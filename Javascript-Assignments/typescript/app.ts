function GetAllBooks(){
    let books = [
        {title : 'first', author : 'One', available : false, category: Category.bio},
        {title : 'second', author : 'two', available : true, category: Category.poetry},
        {title : 'third', author : 'three', available : false, category: Category.children},
        {title : 'fourth', author : 'four', available : false, category: Category.history}
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

enum Category {bio, poetry, children, history, fiction}

function GetBookTitleByCategory(categoryFilter: Category): Array<string> {
    console.log("Getting books in category " + Category[categoryFilter]);

    const allBook = GetAllBooks();
    const filteredTitles : string[] = [];
    // LogFirstAvailableBook(allBook);

    for (let currentBook of allBook){
        if(currentBook.category === categoryFilter){
            filteredTitles.push(currentBook.title)
        }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void{
    for (let title of titles){
        console.log(title)
    }
}

const poetryBooks = GetBookTitleByCategory(Category.poetry);

LogBookTitles(poetryBooks);