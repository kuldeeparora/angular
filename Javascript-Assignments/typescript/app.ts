function GetAllBooks(){
    let books = [
        {id: 1, title : 'first', author : 'One', available : false, category: Category.bio},
        {id: 2, title : 'second', author : 'two', available : true, category: Category.poetry},
        {id: 3, title : 'third', author : 'three', available : false, category: Category.children},
        {id: 4, title : 'fourth', author : 'four', available : false, category: Category.history},
        {id: 5, title : 'fifth', author : 'five', available : false, category: Category.fiction}
    ];
    return books;
}

function LogFirstAvailableBook(books = GetAllBooks()) : void {
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

function GetBookTitleByCategory(categoryFilter: Category = Category.fiction): Array<string> {
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

function GetBookID(id: number){
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function PublicationMessage(year : number): string {
    return 'Date published ' + year;
}

let publishFunc : (someYear: number) => string;

publishFunc = PublicationMessage;

let message: string = publishFunc(2016);


function CreateCustomId(name: string, id: number): string {
    return name + id;
}

let iDGenerator: (chars: string, num: number) => string;
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