/******************************
  Order Confirm Page JS API
*******************************/

$(document).ready(function () {

    //------------------------------
    //  Assign buyer order contents
    //------------------------------

    var cart = JSON.parse(sessionStorage.shoppingCart).length;

    var b = JSON.parse(sessionStorage.getItem('shoppingCart'));


    for (i = 0; i < cart; i++) {

        let tbRef = document.getElementById('table').getElementsByTagName('tbody')[0];


        // Insert a row at the end of table
        var newRow = tbRef.insertRow();
        newRow.className = 'item-row';
        newRow.id = b[i].id;


        // Insert a cell at the end of the row
        var newCell = newRow.insertCell(0);
        newCell.className = 'item-name';


        var newCell1 = newRow.insertCell(1);
        newCell1.className = 'item-qts';

        //Insert data into table cells
        newCell.innerHTML = b[i].id;
        newCell1.innerHTML = b[i].price;

    };


    // ---------------------------
    //   Buyer Total Calculation
    // ---------------------------

    var sum = 0;

    $('.item-qts').each(function () {
        sum += Number($(this).html());
    });

    $('#amountX').html(sum)


    // --------------------
    //    Delivery Charge 
    // --------------------

    var delivery = JSON.parse(sessionStorage.getItem('deliveryCost'));
    $('#deliveryCharge').html(delivery);


    // ----------------------------
    //  Get discount coupon amount
    // ----------------------------

    var discount = JSON.parse(sessionStorage.getItem('discount'));
    $('#coupon').html("-" + " " + discount)


    // ----------------------------
    //  Coupon discount deduction
    // ----------------------------

    var sumof = sum + delivery;
    var excVat = sumof - discount;
    $('#couponX').html(excVat)



    // ------------------------
    //   Amount including VAT
    // ------------------------

    vatI = 0.15;
    var vatInc = excVat * vatI;
    var amountPaid = vatInc + excVat;
    $('#amountVat').html(amountPaid.toFixed(2));



    // ---------------------------
    //  Invoice Number generator
    // ---------------------------

    function invoiceNum() {
        $('#invoiceNum').append("<b>Invoice #</b>" + " " + Math.random().toString(36).substr(2, 9));
    };

    window.onload = invoiceNum

})