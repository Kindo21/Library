const libaryDiv = document.querySelector("div.library")

let tableHeaders = ["Title", "Author", "Pages"]

let myLibrary = 
[
 ["The Thirty-Nine Steps", "John Buchan", "138"],
 ["The Prime of Miss Jean Brodie"," Muriel Spark","150"], 
 ["A Single Man", "Christopher Isherwood", "152"], 
 ["Murphy", "Samuel Beckett", "158"], 
 ["A Clockwork Orange", "Anthony Burgess", "160"]
]

const createLibraryTable = () => {
    while(libaryDiv.firstChild) libaryDiv.removeChild(libaryDiv.firstChild)

    let libraryTable  = document.createElement('table')
    libraryTable.className = 'libraryTable'

    let libraryTableHead = document.createElement('thead')
    libraryTableHead.className = 'libraryTableHead'

    let libraryTableHeaderRow = document.createElement('tr')
    libraryTableHeaderRow.className = 'libaryTableHeaderRow'

    tableHeaders.forEach(header => {
        let libraryHeader = document.createElement('th')
        libraryHeader.innerText = header
        libraryTableHeaderRow.append(libraryHeader)
    })

    libraryTableHead.append(libraryTableHeaderRow)
    libraryTable.append(libraryTableHead)

    let libraryTablebody = document.createElement('tbody')
    libraryTable.append(libraryTablebody)

    libaryDiv.append(libraryTable)
}

createLibraryTable();

// function createTable(tableData) {
//     var table = document.createElement('table');
//     // var tableHead = document.createElement('thead');
//     var tableBody = document.createElement('tbody');
//     // var heading_1 = document.createElement('th')
//     // heading_1 = "Title";
//     // var heading_2 = document.createElement('th')
//     // heading_2 = "Author";
//     // var heading_3 = document.createElement('th')
//     // heading_3 = "Pages";
//     var tableHead = document.createElement('thead')
    
    


//     tableData.forEach(function(rowData) {
//         var row = document.createElement('tr');

//         rowData.forEach(function(cellData){
//             var cell = document.createElement('td');
//             cell.appendChild(document.createTextNode(cellData));
//             row.appendChild(cell);
//         });

//         tableBody.appendChild(row);
//     });
//     // table.appendChild(tableHead);
//     table.appendChild(tableBody);
//     document.body.appendChild(table);
// }

// createTable(myLibrary);

function Book() {
    // the constructor...
}
  
function addBookToLibrary() {
    // do stuff here
}
  