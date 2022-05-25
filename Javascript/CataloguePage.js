/**************************
    Catalogue JS Page API
***************************/

// -----------------------------
//  Dropdown menu for nav menu
// -----------------------------

$(document).ready(function(){
    
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


// -------------------------
// Assign ID's to products
// ------------------------

//Assign Id to gpu
function gpuIDAssign() {
    var gpu = document.querySelectorAll('.gpu');

    // Set ids
    for (var i = 0; i < gpu.length; i++)
        gpu[i].id = 'gpu-' + i;

};


//Assign Id to mtb
function mtbIDAssign() {
    var mtb = document.querySelectorAll('.mtb');

    // Set ids
    for (var i = 0; i < mtb.length; i++)
        mtb[i].id = 'mtb-' + i;

};


//Assign Id to cpu
function cpuIDAssign() {
    var cpu = document.querySelectorAll('.cpu');

    //Set id's
    for (var i = 0; i < cpu.length; i++)
        cpu[i].id = 'cpu-' + i;


};


//Assign Id to ram
function ramIDAssign() {
    var ram = document.querySelectorAll('.ram');

    //set id's
    for (var i = 0; i < ram.length; i++)
        ram[i].id = 'ram-' + i;

};


// ------------------------
// Save user input to Cart 
// ------------------------

function asgnProduct(e) {


    //Product Array
    var components = {

        //GPU products
        gpu: [{
                id: 'AsusRog Strix RX570',
                price: 2000,
                stock: 3,
            },
            {
                id: 'Gigabyte GeForce GTX1650',
                price: 3500,
                stock: 2,
            },
            {
                id: 'Palit GeForce RTX3060',
                price: 2500,
                stock: 1,
            }
        ],

        //Motherboard products
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
                price: 3000,
                stock: 5,
            }
        ],

        //CPU products
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

        //RAM products
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


    // ---------------------------------------
    //  GPU user input save to sessionStorage
    // ---------------------------------------

    let gpuIndex = components.gpu.findIndex(gpu => gpu.id === e.id);

    if (gpuIndex != -1) {

        var a = [];
        var i = components.gpu[gpuIndex];

        a = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

        a.push(i);

        sessionStorage.setItem('shoppingCart', JSON.stringify(a));

    };


    // ----------------------------------
    //  MTB input save to sessionStorage
    // ----------------------------------

    let mtbIndex = components.motherboard.findIndex(motherboard => motherboard.id === e.id);


    if (mtbIndex != -1) {

        var a = [];

        var i = components.motherboard[mtbIndex];

        a = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

        a.push(i);

        sessionStorage.setItem('shoppingCart', JSON.stringify(a));

    };


    // -----------------------------------
    //   CPU input save to sessionStorage
    // -----------------------------------

    let cpuIndex = components.cpu.findIndex(cpu => cpu.id === e.id);

    if (cpuIndex != -1) {
        var a = [];

        var i = components.cpu[cpuIndex];

        a = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

        a.push(i);

        sessionStorage.setItem('shoppingCart', JSON.stringify(a));

    };


    // ----------------------------------
    //  RAM input save to sessionStorage
    // ----------------------------------

    let ramIndex = components.ram.findIndex(ram => ram.id === e.id);


    if (ramIndex != -1) {
        var a = [];

        var i = components.ram[ramIndex];

        a = JSON.parse(sessionStorage.getItem('shoppingCart')) || [];

        a.push(i);

        sessionStorage.setItem('shoppingCart', JSON.stringify(a));

    };

};


// ----------------------
//  Total of Cart Alert
// ----------------------

$(document).ready(function () {

    $('.modal').click(function () {

        var uT = JSON.parse(sessionStorage.getItem('shoppingCart'));
        var total = 0;
        var i;

        for (i = 0; i < uT.length; i++) {

            total += uT[i].price;

            console.log(total)

        }

        alert('Your cart total is :' + ' ' + 'R' + ' ' + total);

    })

});


// -----------------------------
//  Add to Cart Counter Display
// -----------------------------

var counterVal = 0;

function incrementClick() {
    updateDisplay(++counterVal);
}

function updateDisplay(val) {
    document.getElementById("cart-counter").innerHTML = val;
}