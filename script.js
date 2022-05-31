

// var myLibrary = 
// [
//  ["The Thirty-Nine Steps", "John Buchan", "138", "Read"],
//  ["The Prime of Miss Jean Brodie"," Muriel Spark","150", "Not Read"], 
//  ["A Single Man", "Christopher Isherwood", "152", "Read"], 
//  ["Murphy", "Samuel Beckett", "158", "Read"], 
//  ["A Clockwork Orange", "Anthony Burgess", "160", "Read"]
// ]
var myLibrary = [];
// isRead = (flag) =>{
//     setFlag = flag;
//     if(setFlag = 1){
//         return "Has been Read";
//     }
//     else if(setFlag = 0){
//         return "Has not been Read";
//     }
// }


createTable = (data) => {
    var table = document.getElementById('library');
    var tableBody = document.createElement('tbody')
    tableBody.setAttribute("id", "mainTable")

    data.forEach(rowData => {
        var row = document.createElement('tr');

        rowData.forEach(celldata => {
            var cell = document.createElement('td');
            cell.appendChild(document.createTextNode(celldata));
            row.appendChild(cell);
        });
        tableBody.appendChild(row);
    });

    table.appendChild(tableBody);
    document.body.appendChild(table);
    

    
}

createForm = () => {
    // var form = document.createElement("form");
    // var bookInputTitle = document.createElement("input");
    // var bookInputAuthor = document.createElement("input");
    // var bookInputPages = document.createElement("input");
    // var bookInputRead = document.createElement("input");
    const formExists = document.getElementById('mainForm');
    

    // form = $("<form></form>");
    // form.append('<label for="title">Enter Title:</label>');
    // form.append('<input type="text" id="title" name="title">');
    // form.append('<label for="Author">Enter Author:</label>');
    // form.append('<input type="text" id="Author" name="Author">');
    // form.append('<label for="Pages">Enter Pages:</label>');
    // form.append('<input type="text" id="Pages" name="Pages">');
    // form.append('<label for="Read">Have You Read this Book?:</label>');
    // form.append('<input type="text" id="Read" name="Read">');
    // form.append('<button type="button" id= "bookSubmit" >Submit</button>');

    let form = `<form id="mainForm">
   <label for="title">Enter Title:</label>
   <input type="text" id="title" name="title">
   <label for="Author">Enter Author:</label>
   <input type="text" id="Author" name="Author">
   <label for="Pages">Enter Pages:</label>
   <input type="text" id="Pages" name="Pages">
   <label for="Read">Have You Read this Book?:</label>
   <input type="text" id="Read" name="Read">
   <button type="button" id= "bookSubmit" >Submit</button>
</form>
`;
    $('body').append(form);

    let bookSubmit = document.getElementById('bookSubmit')

    bookSubmit.addEventListener("click", addBookToLibrary);

    if(bookSubmit.getAttribute('listener') !== 'true'){
        console.log('event has been attached');
    }
    
    for (var i = 0, atts = bookSubmit.attributes, n = atts.length, arr = []; i < n; i++){
        arr.push(atts[i].nodeName);
        console.log(atts)
    }

    
//     if (bookSubmit.getAttribute('listener') !== 'true') {
//         bookSubmit.addEventListener('click', function (e) {
//             const elementClicked = e.target;
//             elementClicked.setAttribute('listener', 'true');
//             console.log('event has been attached');
//        });
//    }

}

$(document).ready(() => {
    createTable(myLibrary);
});



/*add event listener for button 
event listener will invoke function to set 
dom objects to variables or directly create the object
and push the object to the array while also rerunning the
create table function */



/**<body>
  <h1>Adding 'a' and 'b'</h1>

  a: <input type="number" name="a" id="a"><br> b: <input type="number" name="b" id="b"><br>
  <button onclick="add(document.getElementById('a').value,document.getElementById('b').value)">Add</button>

  <script>
    function add(a, b) {
      var sum = parseInt(a, 10) + parseInt(b, 10);
      alert(sum);
    }
  </script>
</body> */

// function Book(title, author, pages, read) {
//     // the constructor...
//     // Will use this to take the form object and create a book object
//     // each book will have a button (function) to show if its been read
//     // this.bookTitle = title,
//     // this.bookAuthor = author,
//     // this.bookPages = pages,
//     // this.bookRead = read

//     this.book = [title, author, pages, read];

//     // this.removeBook = () => {
//     //     myLibrary.pop(myLibrary.length - 1); 
//     // }
// }

function Book(title, author, pages, read){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
    this.id = myLibrary.length;
    this.Index;
}



  addBookToLibrary = () => {
    // do stuff here
    //take book object and add it to array

    

    var Title = document.getElementById('title').value;
    // Book.title = getbookTitle;
    var Author = document.getElementById('Author').value;
    // Book.author = getbookAuthor;
    var Pages = document.getElementById('Pages').value;
    // Book.pages = getbookPages;
    var Read = document.getElementById('Read').value;
    // Book.read  = getbookRead;

    

    // const newBook = new Book(getbookTitle, getbookAuthor, getbookPages, getbookRead);

    const newBook = new Book(Title, Author, Pages, Read);

    
    //set an interator starting at 0 
    //  for(var element in newBook) {
    //      myLibrary.push(newBook[element]);
    //  }

    myLibrary.push(newBook);

    
    // let getbookID = newBook.id;

    //  newBook.Index = myLibrary.findIndex(getbookID);

    // for (var prop in newBook) {
    //     if (newBook.hasOwnProperty(prop)) {
    //        var innerObj = {};
    //        innerObj[prop] = newBook[prop];
    //        myLibrary.push(innerObj)
    //     }
    //  }
     
    //  let wantedArray = myLibrary.map((obj, index) => {
    //     return {
    //       name: obj.name,
    //       [`count${index+1}`]: obj.count
    //     }
    //  });

    //  console.log(wantedArray)

     console.log(myLibrary);

    //console.log(myLibrary);

    let tbodyRef = document.getElementById('mainTable');
    // for (let obj of myLibrary){
    //     let tr = tbodyRef.insertRow();
    //     tr.insertCell().textContent = obj.Title;
    //     tr.insertCell().textContent = obj.Author;
    //     tr.insertCell().textContent = obj.Pages;
    //     tr.insertCell().textContent = obj.Read;
    // }
    let tr = tbodyRef.insertRow();
    for (const [key, value] of Object.entries(newBook)) {
        tr.insertCell().textContent = value ; 
      }

    

    removeBook = () => {
        getAttribute
    }
    // row = tbodyRef.insertRow(tbodyRef.length),
    // cell1 = row.insertCell(0),
    // cell2 = row.insertCell(1),
    // cell3 = row.insertCell(2),
    // cell4 = row.insertCell(3);

    // cell1.innerHTML = myLibrary[myLibrary.length - 1][0];
    // cell2.innerHTML = myLibrary[myLibrary.length - 1][1];
    // cell3.innerHTML = myLibrary[myLibrary.length - 1][2];
    // cell4.innerHTML = myLibrary[myLibrary.length - 1][3];

    
    // newBook.Index = myLibrary.lastIndexOf(getbookTitle.value);

    // console.log(newBook.Index);
    /**whenever a book object is created generate an id assign id to the constructor function somehow and when constructor function is clicked delete object by id */
}
  


