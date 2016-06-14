function GetAllBooks() {
    var books = [
        { id: 1, title: 'first', author: 'One', available: false, category: Category.bio },
        { id: 2, title: 'second', author: 'two', available: true, category: Category.poetry },
        { id: 3, title: 'third', author: 'three', available: false, category: Category.children },
        { id: 4, title: 'fourth', author: 'four', available: false, category: Category.history },
        { id: 5, title: 'fifth', author: 'five', available: false, category: Category.fiction }
    ];
    return books;
}
function LogFirstAvailableBook(books) {
    if (books === void 0) { books = GetAllBooks(); }
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
    if (categoryFilter === void 0) { categoryFilter = Category.fiction; }
    console.log("Getting books in category " + Category[categoryFilter]);
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
function GetBookID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function PublicationMessage(year) {
    return 'Date published ' + year;
}
var publishFunc;
publishFunc = PublicationMessage;
var message = publishFunc(2016);
function CreateCustomId(name, id) {
    return name + id;
}
var iDGenerator;
iDGenerator = CreateCustomId;
//********************************************************
LogFirstAvailableBook();
// let poetryBooks = GetBookTitleByCategory(Category.poetry);
// poetryBooks.forEach(title => console.log(title));
// let fictionBooks = GetBookTitleByCategory();
// fictionBooks.forEach(title => console.log(title));
// let myID : string = iDGenerator("KD", 2) ;
// console.log(myID);
//
// const fictionBooks = GetBookTitleByCategory(Category.fiction);
// fictionBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
// const poetryBooks = GetBookTitleByCategory(Category.poetry);
// LogBookTitles(poetryBooks); 
