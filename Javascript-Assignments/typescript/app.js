function GetAllBooks() {
    var books = [
        { title: 'first', author: 'One', available: false },
        { title: 'second', author: 'two', available: true },
        { title: 'third', author: 'three', available: false }
    ];
    return books;
}
function LogFirstAvailableBook(books) {
    var numberOfBooks = books.length;
    var availableBook = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
        if (currentBook.available) {
            availableBook = currentBook.title;
            break;
        }
    }
    console.log("Total Books " + numberOfBooks);
    console.log("Available Books is " + availableBook);
}
var allBook = GetAllBooks();
LogFirstAvailableBook(allBook);
