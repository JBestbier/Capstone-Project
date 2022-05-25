/*************************
    Checkout Page JS API
**************************/

$(document).ready(function () {


    // -----------------------------
    //  Dropdown menu for nav menu
    // -----------------------------

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


    // ------------------------------
    //  Hide delivery option default
    // ------------------------------

    $('.deliveryInfo').hide();


    // ------------------------------
    // Delivery option selected show
    // ------------------------------

    $('.form-control').each(function () {

        $(this).change(function () {

            var a = $(this).val();

            if (a === "Delivery") {

                $('.deliveryInfo').show();
                if (confirm('A standard fee of R200 will be charged')) {
                    sessionStorage.setItem('deliveryCost', JSON.parse(200));
                }
                $('#submitForm').hide();

            }
            
            if (a === "Collection") {
                $('.deliveryInfo').hide();

                $('#submitForm').show();
            }

        })

    });

})