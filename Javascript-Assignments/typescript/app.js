function GetAllBooks() {
    var books = [
        { title: 'first', author: 'One', available: false, category: Category.bio },
        { title: 'second', author: 'two', available: true, category: Category.poetry },
        { title: 'third', author: 'three', available: false, category: Category.children },
        { title: 'fourth', author: 'four', available: false, category: Category.history }
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
var Category;
(function (Category) {
    Category[Category["bio"] = 0] = "bio";
    Category[Category["poetry"] = 1] = "poetry";
    Category[Category["children"] = 2] = "children";
    Category[Category["history"] = 3] = "history";
    Category[Category["fiction"] = 4] = "fiction";
})(Category || (Category = {}));
function GetBookTitleByCategory(categoryFilter) {
    console.log("Getting books in category " + categoryFilter);
    var allBook = GetAllBooks();
    var filteredTitles = [];
    // LogFirstAvailableBook(allBook);
    for (var _i = 0, allBook_1 = allBook; _i < allBook_1.length; _i++) {
        var currentBook = allBook_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
var poetryBooks = GetBookTitleByCategory(Category.poetry);
LogBookTitles(poetryBooks);
