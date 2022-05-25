/*************************
    Payment JS Page API
**************************/

$(document).ready(function () {

        // ----------------------------
        //  Dropdown menu for nav menu
        // ----------------------------

        $('#dropdownMenuLink').on("mouseover", function () {

            $('.dropdown-menu').show(function () {
    
                $(this).fadeIn(500);
    
            })
    
        });
    
        $(document).on("click", function (event) {
    
            var $trigger = $(".dropdown-menu");
    
            if ($trigger !== event.target && !$trigger.has(event.target).length) {
                $(".dropdown-menu").slideUp("fast");
            }
    
        });

    var coupon = $('#couponEntery')


    // ----------------------------------
    //  Assign amounts to sessionStorage
    // ----------------------------------

    coupon.keyup(function () {


        addHyphen(this);


        if (coupon.val().length === 11) {


            // Calculations of VAT + Discount + Delivery
            
            var uT = JSON.parse(sessionStorage.getItem('cartTotal'));
            var delivery = JSON.parse(sessionStorage.getItem('deliveryCost'));
            var total = 0;
            var i;

            for (i = 0; i < uT.length; i++) {
                total += uT[i];
            }

            vat = 115;

            totalVAT = total / vat
            newtotal = totalVAT + total
            amount = newtotal;

            discount = amount / 109;

            sessionStorage.setItem('discount', JSON.stringify(discount.toFixed(2)));

            finalAmount = amount - discount + delivery;


            // Set new cart total 

            sessionStorage.setItem('cartTotal', JSON.stringify(finalAmount.toFixed(2)));


            // Alert user of new Total

            alert('Your new Total is ' + ' ' + finalAmount.toFixed(2))

        }

    });

    // ----------------------------------------------
    //  Add (-) after 3rd every char for readability
    // ----------------------------------------------

    function addHyphen(e) {

        let val = $(e).val().split('-').join('');

        let finalVal = val.match(/.{1,3}/g).join('-');
        $(e).val(finalVal);

    }

})