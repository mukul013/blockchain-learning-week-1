// - Create a JavaScript object to represent a Book, with properties for the title, author, and the number of pages.
// - Add a method to the object that logs a description of the book to the console.

let book = {
    title : "Notes from A Fellow Traveller",
    author : "Derren Brown",
    numberOfPages : 500,
    print : function () {
        console.log(this.title)
        console.log(this.author)
        console.log(this.numberOfPages)
    }
}

book.print()