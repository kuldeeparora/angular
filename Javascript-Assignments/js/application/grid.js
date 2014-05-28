function Product(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}

var products = [];

$('#saveBtn').click(function () {
    var name = [];
    var quanity = [];
    var price = [];

    $('.prod-name').each(function () {
        var names = $(this).val();
        name.push(names);
    });
    $('.prod-quantity').each(function () {
        var quantities = $(this).val();
        quanity.push(quantities);
    });
    $('.prod-price').each(function () {
        var prices = $(this).val();
        price.push(prices);
    });

    var product = new Product(name, quanity, price);
    products.push(product);

    updateUI();
});

function updateUI(){
    var prodQuan = $('.prod-quantity').val();
    var prodPrice = $('.prod-price').val();
    var prodTotal = prodQuan*prodPrice;
    $('.prod-total').append(prodTotal);
}

$('.add-product').click(function(){
    $('.grid-value').clone().appendTo('#grid');
});

$('.remove-product').click(function(){
    $(this).closest('.grid-value').remove();
});



// datagrid
//4 columns
// prodname, prod quantity, price, total, add, remove

