function Contact(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
}

var Contacts = [];

$('#addAddress').click(function () {
    var addAddressInput = $('<input type="text" class="address" placeholder="Address">');
    $(this).parent().prepend(addAddressInput);
});

$('#addPhone').click(function () {
    var addPhoneInput = $('<input type="text" class="phone" placeholder="Phone">');
    $(this).parent().prepend(addPhoneInput);
});

$('#saveBtn').click(function () {
    $('.details-show').empty();
    var addresses = [];
    var phones = [];
    var name = $('#name').val();
    $('.address').each(function(){
        var address = $(this).val();
        addresses.push(address);
    });
    $('.phone').each(function(){
        var phone = $(this).val();
        phones.push(phone);
    });

    var contact = new Contact(name, phones, addresses);

    Contacts.push(contact);
    console.log(contact);
    $('.details-show').append(contact.name + " "  + contact.address + " " + contact.phone);
});