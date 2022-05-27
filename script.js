

var myLibrary = 
[
 ["The Thirty-Nine Steps", "John Buchan", "138", 1],
 ["The Prime of Miss Jean Brodie"," Muriel Spark","150", 0], 
 ["A Single Man", "Christopher Isherwood", "152", 1], 
 ["Murphy", "Samuel Beckett", "158", 0], 
 ["A Clockwork Orange", "Anthony Burgess", "160", 1]
]

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
    const formRemove = document.getElementsByTagName('form');

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

}

$(document).ready(() => {
    createTable(myLibrary);
});



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

function Book(title, author, pages, read) {
    // the constructor...
    // Will use this to take the form object and create a book object
    // each book will have a button (function) to show if its been read
    this.bookTitle = title,
    this.bookAuthor = author,
    this.bookPages = pages,
    this.bookRead = read
}
  
function addBookToLibrary() {
    // do stuff here
    //take book object and add it to array
}
  