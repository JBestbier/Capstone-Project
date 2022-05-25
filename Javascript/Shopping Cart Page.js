/*************************
    Shopping Cart JS API
*************************/

$('document').ready(function () {

    // ------------------------------------
    //  sessionstorage check for cart Item
    // ------------------------------------

    if (sessionStorage.length === 0) {

        alert('No contents added to cart');

        $('.container').hide();

        var button = $('<button><a href="1 - Catalogue Page.html">Click here to return to the catalogue</button>');

        $("body").append(button);


    };

    // ---------------------------
    // Dropdown menu for nav menu
    // ---------------------------

    $('#dropdownMenuLink').on("mouseover", function () {

        $('.dropdown-menu').show(function () {

            $(this).fadeIn(500);

        })

    });

    $(document).on("click", function(event){
        
        var $trigger = $(".dropdown-menu");

        if($trigger !== event.target && !$trigger.has(event.target).length){
            $(".dropdown-menu").slideUp("fast");
        }

    });


    // -------------------
    //    Products Array
    // -------------------

    var components = {

        // GPU products
        gpu: [{
                id: 'AsusRog Strix RX570',
                Price: 2000,
                stock: 3,
            },
            {
                id: 'Gigabyte GeForce GTX1650',
                Price: 3500,
                stock: 2,
            },
            {
                id: 'Palit GeForce RTX3060',
                Price: 2500,
                stock: 1,
            }
        ],

        // Motherboard products
        motherboard: [{
                id: 'Asus ROG Maximus XII',
                price: 1500,
                stock: 2,
            },
            {
                id: 'Gigabyte W480 Vision',
                price: 2500,
                stock: 3,
            },
            {
                id: 'MSI MPG X570',
                Price: 3000,
                stock: 5,
            }
        ],

        // CPU products
        cpu: [{
                id: 'Intel Core i5 9600K',
                price: 1500,
                stock: 4
            },
            {
                id: 'AMD Ryzen 5 5600X',
                price: 2500,
                stock: 2,
            },
            {
                id: 'Intel Core i7 10700F',
                price: 2000,
                stock: 1,
            }
        ],

        // RAM products
        ram: [{
                id: 'Corsair Vengeance 4GB',
                price: 450,
                stock: 2,
            },
            {
                id: 'HyperX Gaming 8GB DDR4',
                price: 650,
                stock: 4,
            },
            {
                id: 'Crucial Ballistix DDR4',
                price: 550,
                stock: 6,
            }
        ],
    };


    // -------------------
    //   Table Contents
    // -------------------

    // Get cart length
    var cart = JSON.parse(sessionStorage.shoppingCart).length;


    // Get cell details and assign
    var b = JSON.parse(sessionStorage.getItem('shoppingCart'));


    // Assign buyer values on table
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
        newCell1.className = 'item-amount';
        newCell1.id = b[i].price;

        var newCell2 = newRow.insertCell(2);
        newCell2.className = 'item-qts';

        var newCell3 = newRow.insertCell(3);

        //Insert data into table cells
        newCell.innerHTML = b[i].id;
        newCell1.innerHTML = b[i].price;
        newCell2.innerHTML = ('<input type="number" min="1" max="100" value="0"></input>');
        newCell3.innerHTML = ('<button class="btn btn-danger remove" id="remove-btn">X</button>');

    };

    // ---------------------------------------
    //  Update price according to buyer input
    // ---------------------------------------

    $('.item-qts').each(function () {

        var b = $(this.parentNode).children(".item-amount").html();

        $(this).change(function () {

            var a = $(this.children).val();

            var lineTotal = a * b;

            $(this.parentNode).children(".item-amount").replaceWith("<td class='item-amount'>" + lineTotal + "</td>");


            // Save user qty to sessionStorage
            $(this).each(function () {

                if (sessionStorage.cartTotal != null) {

                    cartTotal = JSON.parse(sessionStorage.getItem('cartTotal'));

                } else {

                    cartTotal = [];

                }

                cartTotal.push(lineTotal);

                sessionStorage.setItem('cartTotal', JSON.stringify(cartTotal));

            })

        })


    });

    // -----------------------------------------------
    //  Remove line item from cart and sessionStorage
    // -----------------------------------------------

    $('.remove').click(function () {

        if (confirm("Clear line item?")) {

            $(this).parent().parent().remove();

            if (JSON.parse(sessionStorage.getItem('shoppingCart').includes(this.parentNode.parentNode.id)) === true) {

                let index = JSON.parse(sessionStorage.getItem("shoppingCart")).findIndex(shoppingCart => shoppingCart.id === this.parentNode.parentNode.id);

                if (index > -1) {

                    var a = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

                    a.splice(index, 1);

                    a.push();

                    sessionStorage.setItem('shoppingCart', JSON.stringify(a));
                }

            } else {

                alert("Failed to remove item!");

            }

        };

    });


    // -------------------------------------
    //  Clear cart and sessionStorage items
    // -------------------------------------

    $('.clear-cart').click(function () {

        if (confirm("Clear all items from cart?")) {
            $('#table').remove();
            sessionStorage.clear();

        }

    })


    // --------------------------------------
    //    Checkout Event - Show cart total
    // --------------------------------------

    $('.checkout').click(function () {

        var a = document.getElementById('modal-body');

        var uT = JSON.parse(sessionStorage.getItem('cartTotal'));
        var total = 0;
        var i;

        for (i = 0; i < uT.length; i++) {
            total += uT[i];
        }

        a.append('Your cart total is :' + ' ' + total);

    })

});