
class Book{
    constructor(author, name, pages){
        this.author = author;
        this.name = name;
        this.pages = pages;
        this.read = false;

    }
}

//maybe put this into a module later

var library = [];

function addBook(book){
    var book = book;
    library.push(book);
}

function setRead(x){
     let index  = x.rowIndex - 1;
    if (library[index].read === false) {
        library[index].read = true;
        $("table").on("click", "#status", function() {
            $(this).closest("td").text("True");
         });

        }
        else if(library[index].read === true){
            library[index].read = false;
            $("table").on("click", "#status", function() {
                $(this).closest("td").text("False");
             });
        }
}

function removeBook(){
   
    $("table").on("click", "button", function() {
        $(this).closest("tr").remove();
     });
     $("table").on('click',"button", function(){
        let index =  ($(this).closest('td').parent()[0].sectionRowIndex);
        library.splice(index, 1);
     })   
}

function writeTable(book) {
   

    $('tbody').append('<tr onclick="setRead(this)"><td>'+book['author']+
    '</td><td>'+book['name']+'</td><td>'+book['pages']+
    '</td><td id = status >'+book['read']+ '</td><td>' + 
    '<button class="btn btn-large btn-danger" type="button" onclick = "removeBook()">Remove</button>'  
    + '</td></tr>')
    
}

function librarian(){
    var getAuthor = $('#Author').val();
    var getTitle = $('#Title').val();
    var getPages = $('#Pages').val();
    book = new Book(getAuthor,getTitle , getPages );
    addBook(book);
    writeTable(book);
    $('#newBook').click(function() {
        $('#Author').val('');
        $('#Title').val('');
        $('#Pages').val('');
      });   
}


