

var myLibrary = 
[
 ["The Thirty-Nine Steps", "John Buchan", "138"],
 ["The Prime of Miss Jean Brodie"," Muriel Spark","150"], 
 ["A Single Man", "Christopher Isherwood", "152"], 
 ["Murphy", "Samuel Beckett", "158"], 
 ["A Clockwork Orange", "Anthony Burgess", "160"]
]



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

createTable(myLibrary);




function Book() {
    // the constructor...
    // Will use this to take the form object and create a book object
    // each book will have a button (function) to show if its been read
    
}
  
function addBookToLibrary() {
    // do stuff here
    //take book object and add it to array
}
  