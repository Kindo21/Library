//old code


// // var myLibrary = 
// // [
// //  ["The Thirty-Nine Steps", "John Buchan", "138", "Read"],
// //  ["The Prime of Miss Jean Brodie"," Muriel Spark","150", "Not Read"], 
// //  ["A Single Man", "Christopher Isherwood", "152", "Read"], 
// //  ["Murphy", "Samuel Beckett", "158", "Read"], 
// //  ["A Clockwork Orange", "Anthony Burgess", "160", "Read"]
// // ]
// var myLibrary = [];
// // isRead = (flag) =>{
// //     setFlag = flag;
// //     if(setFlag = 1){
// //         return "Has been Read";
// //     }
// //     else if(setFlag = 0){
// //         return "Has not been Read";
// //     }
// // }


// createTable = (data) => {
//     var table = document.getElementById('library');
//     var tableBody = document.createElement('tbody')
//     tableBody.setAttribute("id", "mainTable")

//     data.forEach(rowData => {
//         var row = document.createElement('tr');

//         rowData.forEach(celldata => {
//             var cell = document.createElement('td');
//             cell.appendChild(document.createTextNode(celldata));
//             row.appendChild(cell);
//         });
//         tableBody.appendChild(row);
//     });

//     table.appendChild(tableBody);
//     document.body.appendChild(table);
    
//     // let table = `<table ></table>`
    
// }

// createForm = () => {
//     // var form = document.createElement("form");
//     // var bookInputTitle = document.createElement("input");
//     // var bookInputAuthor = document.createElement("input");
//     // var bookInputPages = document.createElement("input");
//     // var bookInputRead = document.createElement("input");
//     const formExists = document.getElementById('mainForm');
    

//     // form = $("<form></form>");
//     // form.append('<label for="title">Enter Title:</label>');
//     // form.append('<input type="text" id="title" name="title">');
//     // form.append('<label for="Author">Enter Author:</label>');
//     // form.append('<input type="text" id="Author" name="Author">');
//     // form.append('<label for="Pages">Enter Pages:</label>');
//     // form.append('<input type="text" id="Pages" name="Pages">');
//     // form.append('<label for="Read">Have You Read this Book?:</label>');
//     // form.append('<input type="text" id="Read" name="Read">');
//     // form.append('<button type="button" id= "bookSubmit" >Submit</button>');

//     let form = `<form id="mainForm">
//    <label for="title">Enter Title:</label>
//    <input type="text" id="title" name="title">
//    <label for="Author">Enter Author:</label>
//    <input type="text" id="Author" name="Author">
//    <label for="Pages">Enter Pages:</label>
//    <input type="text" id="Pages" name="Pages">
//    <label for="Read">Have You Read this Book?:</label>
//    <input type="text" id="Read" name="Read">
//    <button type="button" id= "bookSubmit" >Submit</button>
// </form>
// `;
//     $('body').append(form);

//     let bookSubmit = document.getElementById('bookSubmit')

//     bookSubmit.addEventListener("click", addBookToLibrary);

//     if(bookSubmit.getAttribute('listener') !== 'true'){
//         console.log('event has been attached');
//     }
    
//     for (var i = 0, atts = bookSubmit.attributes, n = atts.length, arr = []; i < n; i++){
//         arr.push(atts[i].nodeName);
//         console.log(atts)
//     }

    
// //     if (bookSubmit.getAttribute('listener') !== 'true') {
// //         bookSubmit.addEventListener('click', function (e) {
// //             const elementClicked = e.target;
// //             elementClicked.setAttribute('listener', 'true');
// //             console.log('event has been attached');
// //        });
// //    }

// }

// $(document).ready(() => {
//     createTable(myLibrary);
// });



// /*add event listener for button 
// event listener will invoke function to set 
// dom objects to variables or directly create the object
// and push the object to the array while also rerunning the
// create table function */



// /**<body>
//   <h1>Adding 'a' and 'b'</h1>

//   a: <input type="number" name="a" id="a"><br> b: <input type="number" name="b" id="b"><br>
//   <button onclick="add(document.getElementById('a').value,document.getElementById('b').value)">Add</button>

//   <script>
//     function add(a, b) {
//       var sum = parseInt(a, 10) + parseInt(b, 10);
//       alert(sum);
//     }
//   </script>
// </body> */

// // function Book(title, author, pages, read) {
// //     // the constructor...
// //     // Will use this to take the form object and create a book object
// //     // each book will have a button (function) to show if its been read
// //     // this.bookTitle = title,
// //     // this.bookAuthor = author,
// //     // this.bookPages = pages,
// //     // this.bookRead = read

// //     this.book = [title, author, pages, read];

// //     // this.removeBook = () => {
// //     //     myLibrary.pop(myLibrary.length - 1); 
// //     // }
// // }

// function Book(title, author, pages, read){
//     this.Title = title;
//     this.Author = author;
//     this.Pages = pages;
//     this.Read = read;
//     this.id = myLibrary.length;
//     //this.button = document.createElement("BUTTON")
//     this.Index;
// }



//   addBookToLibrary = () => {
//     // do stuff here
//     //take book object and add it to array

    

//     var Title = document.getElementById('title').value;
//     // Book.title = getbookTitle;
//     var Author = document.getElementById('Author').value;
//     // Book.author = getbookAuthor;
//     var Pages = document.getElementById('Pages').value;
//     // Book.pages = getbookPages;
//     var Read = document.getElementById('Read').value;
//     // Book.read  = getbookRead;

    

//     // const newBook = new Book(getbookTitle, getbookAuthor, getbookPages, getbookRead);

//     const newBook = new Book(Title, Author, Pages, Read);

    
//     //set an interator starting at 0 
//     //  for(var element in newBook) {
//     //      myLibrary.push(newBook[element]);
//     //  }

//     myLibrary.push(newBook);

    
//     // let getbookID = newBook.id;

//     //  newBook.Index = myLibrary.findIndex(getbookID);

//     // for (var prop in newBook) {
//     //     if (newBook.hasOwnProperty(prop)) {
//     //        var innerObj = {};
//     //        innerObj[prop] = newBook[prop];
//     //        myLibrary.push(innerObj)
//     //     }
//     //  }
     
//     //  let wantedArray = myLibrary.map((obj, index) => {
//     //     return {
//     //       name: obj.name,
//     //       [`count${index+1}`]: obj.count
//     //     }
//     //  });

//     //  console.log(wantedArray)

//      console.log(myLibrary);

//     //console.log(myLibrary);

//     let tbodyRef = document.getElementById('mainTable');
//     // for (let obj of myLibrary){
//     //     let tr = tbodyRef.insertRow();
//     //     tr.insertCell().textContent = obj.Title;
//     //     tr.insertCell().textContent = obj.Author;
//     //     tr.insertCell().textContent = obj.Pages;
//     //     tr.insertCell().textContent = obj.Read;
//     // }

//     //dynamically add object to html with loop
//     // let tr = tbodyRef.insertRow();
//     // for (const [key, value] of Object.entries(newBook)) {
//     //     tr.insertCell().textContent = value ; 
//     //   }


     
    
//     // $('tr').append(deletebutton);

//     // $('mainTable').on('click', 'input[type="button"]', function(e){
//     //     $(this).closest('tr').remove()
//     //  })

    
//       //let deletebutton = `<button onclick="myDeleteFunction()" type="button">Remove</button>`; 

//     row = tbodyRef.insertRow(tbodyRef.length),
    
//     cell1 = row.insertCell(0),
//     cell2 = row.insertCell(1),
//     cell3 = row.insertCell(2),
//     cell4 = row.insertCell(3);
//     cell5 = row.insertCell(4);
//     cell6 = row.insertCell(5);
//     cell7 = row.insertCell(6);


//     cell1.innerHTML = Object.values(newBook)[0];
//     cell2.innerHTML = Object.values(newBook)[1];
//     cell3.innerHTML = Object.values(newBook)[2];
//     cell4.innerHTML = Object.values(newBook)[3];
//     cell4.className = "readStatus"
//     cell5.innerHTML = Object.values(newBook)[4]; 
//     row.id = Object.values(newBook)[4];
//     cell5.id = Object.values(newBook)[4];
//     let id = Object.values(newBook)[4];
//     // cell6.innerHTML = `<button onclick="removeRow()" type="button">Remove</button>`
//     cell6.innerHTML = `<button type="button" class="delete">Remove</button>`
//     cell7.innerHTML = `<button type="button" class="status">Change Status</button>`
//     newBook.Index = myLibrary.map(function(Book) { return Book.id; }).indexOf(Object.values(newBook)[4]);
//     //with code can set indexof using id
    
//     // removeRow = () => {
//     //     // let idFor = idOf;
//     //     // document.getElementById(`${id}`).deleteRow(0);
//     //     // $(this).closest("tr").remove();
//     //     $("table#mainTable tr#0").remove();
//     // }
    
//     $('#mainTable').on('click', '.delete', function (e) {
//         e.preventDefault();
//         //set a variable equal to the index corresponding to statement below
        
//         let indexOf = $(this).closest('tr').index();
//         myLibrary.splice(indexOf, 1);
//         $(this).closest('tr').remove();
        
//         //remove array based on index grabbed from above
        
//         //loop and reassign index numbers and id numbers
//         console.log(myLibrary)
//     });

//     $('#mainTable').on('click', '.status', function (e){
//         e.preventDefault();
        
//         let indexOf = $(this).closest('tr').index();
//         let findStatus = myLibrary[indexOf].Read
//         if(findStatus === "Read"){
//             $(this).closest('tr').find('td.readStatus').text("Unread");
//             myLibrary[indexOf].Read = "Read"
//         }
//         else if(findStatus === "Unread"){
//             $(this).closest('tr').find('td.readStatus').text("Read");
//             myLibrary[indexOf].Read = "Unread"
//         }
//         else
//         $(this).closest('tr').find('td.readStatus').text("Read");
//         myLibrary[indexOf].Read = "Read"
//         console.log(myLibrary);
//     })
   
//     // newBook.Index = myLibrary.lastIndexOf(getbookTitle.value);
//     //when rendering the row, add a data attribute for the index
//     // console.log(newBook.Index);
//     /**whenever a book object is created generate an id assign id to the constructor function somehow and when constructor function is clicked delete object by id */
// }
  

//new code





class Book{
    constructor(author, name, pages){
        this.author = author;
        this.name = name;
        this.pages = pages;
        this.read = false;

    }

    setAuthor(author){
        this.author = author;
    }

    setName(name){
        this.name = name;
    }


    setPages(pages){
        this.pages = pages;
    }

    
}

//maybe put this into a module later

var library = [];

function addBook(book){
    var book = book;
    library.push(book);
}

function setRead(){
    // for(const obj of library){
    //     if  (obj.name === 'asd') {
    //         obj.read = true;

    //         break;
    //     }
    // }
    
}
$(document).ready(
      $('table').on('click', function (e){
        e.preventDefault();
        
        let indexOf = $(this).closest('tr').index();
        console.log(indexOf);
        let findStatus = library[indexOf]
        console.log(findStatus);

        // if(findStatus === "true"){
        //     $(this).closest('tr').find('td').text("false");
        //     library[indexOf].Read = "false"
        // }
        // else if(findStatus === "false"){
        //     $(this).closest('tr').find('td').text("true");
        //     library[indexOf].Read = "true"
        // }
        // else
        // $(this).closest('tr').find('td').text("true");
        // library[indexOf].Read = "true"
        // console.log(library);
    })
)
  



function removeBook(){
   
    $("table").on("click", "button", function() {
        $(this).closest("tr").remove();
     });
     $("table").on('click',"button", function(e){
        let index =  ($(this).closest('td').parent()[0].sectionRowIndex);
        library.splice(index, 1);
     })
 
    
}

function writeTable(book) {
   

    $('tbody').append('<tr><td>'+book['author']+'</td><td>'+book['name']+'</td><td>'+book['pages']+'</td><td id = status>'+book['read']+ 
  '</td><td>' + '<button class="btn btn-large btn-danger" type="button" onclick = "removeBook()">Remove</button>'  + '</td></tr>')
    
}


function bookTest(){
    var getAuthor = $('#Author').val();
    var getTitle = $('#Title').val();
    var getPages = $('#Pages').val();
    console.log(getAuthor);
    console.log(getTitle);
    console.log(getPages);
    book = new Book(getAuthor,getTitle , getPages );
    addBook(book);
    writeTable(book);

   
}


