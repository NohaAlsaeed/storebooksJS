//إضافة الكتب وتعديلها وحذفها وعرض معلوماتها
let books=[
    ['Book id','Book Title','Author','Price','Quantity'],
    [1,'Start with why','Simon Sinek',80.0,13],
    [2,'But how do it know','J. Clark Scott', 59.9, 22],
    [3,'Clean Code','Robert Cecil Martin', 50.0, 5],
    [4,'Zero to One', 'Peter Thiel',45.0, 12],
    [5,'You don\'t know JS','Kyle Simpson', 39.9, 9] ];

//القدرة على الاستعلام عن كتاب
console.log(books);

function SearchBook(name){
    for(let i=0;i<books.length; i++){
        if(books[i][1]==name){
            let message=`The book is:" ${books[i][1]} " is available with id number: ${books[i][0]}`; 
            return message;   
        }
        
    }
    return "not found, try again";
    
}
const prompt=require("prompt-sync")(); //
let bookTitle = prompt("type the title of book:  ");
console.log(SearchBook(bookTitle));
console.log("  ");
console.log("  ");
/*--------------------------------------------------------------------------------------*/

//بيع كتاب وتصدير فاتورة
console.log("  Sale The Book ");

let book1='But how do it know';
let Quantity1=3;
let balance=250;
console.log(`number of ${book1} before selling : ${books[2][4]}`);
console.log("  ");

if(books[2][1]===book1){
    if(books[2][4]>=Quantity1){
        if(books[2][3]*Quantity1<=balance){
            price=books[2][3]*Quantity1
            console.log(`
            You can buy what you need
            ${Quantity1} of the title book: '${book1}',
            Total cost is : ${price}`);
            books[2][4]-=Quantity1;
        }
        else{
            console.log('Not Enough Money');
        }
    }
    else{
        console.log('Not Engough');
    }
}
else{
    console.log('Not Available');
}
console.log("  ");
console.log(`After sale : ${books[2][4]}`);