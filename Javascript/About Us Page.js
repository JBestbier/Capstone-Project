/*********************
    About us JS API
**********************/

$(document).ready(function () {

    //----------------------------
    //  Dropdown menu on nav bar
    //----------------------------

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

})