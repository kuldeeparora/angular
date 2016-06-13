function GetAllBooks(){
    let books = [
        {title : 'first', author : 'One', available : false},
        {title : 'second', author : 'two', available : true},
        {title : 'third', author : 'three', available : false},
        {title : 'fourth', author : 'four', available : false}
    ];

    return books;
}

function LogFirstAvailableBook(books) : void {
    let numberOfBooks : number = books.length;
    let availableBook : string = '';

    for (let currentBook of books){
        if(currentBook.available){
            availableBook = currentBook.title;
            break;
        }
    }

    console.log("Total Books " + numberOfBooks);
    console.log("Available Books is " + availableBook);
}

const allBook = GetAllBooks();
LogFirstAvailableBook(allBook);
