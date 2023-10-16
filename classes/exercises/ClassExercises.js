// Define your Book class here:
class Book
{
    constructor(title, author, copyright, ISBN, pages, checkOutCount, discarded)
    {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.ISBN = ISBN;
        this.pages = pages;
        this.checkOutCount = checkOutCount;
        this.discarded = discarded;
     }

     checkOut(used = 1)
     {
        this.checkOutCount += used;
     }
};

// Define your Manual and Novel classes here:
class Manual extends Book
{
    constructor(title, author, copyright, ISBN, pages, checkOutCount, discarded)
    {
        super(title, author, copyright, ISBN, pages, checkOutCount, discarded);

    }

    dispose(year)
    {
        if(year - this.copyright > 5)
        {
            this.discarded = 'This book has been discarded.';
        }
    }
};

class Novel extends Book
{
    constructor(title, author, copyright, ISBN, pages, checkOutCount, discarded)
    {
        super(title, author, copyright, ISBN, pages, checkOutCount, discarded);
        
    }

    dispose()
    {
        if(this.checkOutCount > 100)
        {
            this.discarded = 'This book has been thrown away.';
        }
    }
};
// Declare the objects for exercises 2 and 3 here:
let otherNovel = new Novel('Pride and Prejudice','Jane Austen',1813,1111111111111,432,32,'No');

let otherManual = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No');

// Code exercises 4 & 5 here:

otherNovel.checkOut(5) ;

otherManual.dispose(2020);

console.log(otherNovel.checkOutCount);
console.log(otherManual.discarded);