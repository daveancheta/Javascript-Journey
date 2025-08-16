// Book class represents a single book

class Book {
    constructor(title, author, year) {
        // Initialize book properties
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Method to display book details in a formatted string
    bookDetails() {
        return `Book Title: ${this.title} \nAuthor: ${this.author} \nPublish Year: ${this.year}`;
    }
}

// BookManager class to manage a collection of books
class BookManager {
    #book = []; // private array to store books

    // Method to add a book object to the collection
    addBook(book) {
        this.#book.push(book);
    }

    // Method to list all books in the collection
    listBook() {
        if (this.#book.length === 0) {
            // If no books, display message
            console.log("The Book Collection is empty.");
        } else {
            // If books exist, display each one
            console.log("Book Collection:");
            this.#book.forEach(book => {
                console.log('\n' + book.bookDetails() + '\n');
            })
        }
    }
}

// =====================
// Example usage
// =====================

// Create BookManager instance
const manager = new BookManager();

// Create book objects
const book1 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book2 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book3 = new Book("Clean Code", "Robert C. Martin", 2008);

// Add books to the manager
manager.addBook(book1);
manager.addBook(book2);

// Display the list of books
manager.listBook();
