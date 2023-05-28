function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBook(){
    const library = document.querySelector('.library')

    const title = document.querySelector('.title').textContent
    const author = document.querySelector('.author').textContent
    const pages = document.querySelector('.pages').textContent
    const read = document.querySelector('.read').textContent

    new book(title, author, pages, read)
}

function newBook() {
    document.querySelector('.add').style.display = 'flex'
    document.querySelector('#new-book').style.display = 'none'
}

