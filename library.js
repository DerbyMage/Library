const libArray = []

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}


function addBook(){
    const library = document.querySelector('.library')

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const newer = new book(title, author, pages, read)
    libArray.push(newer)
    const tNode = document.createElement('class')
    const aNode = document.createElement('class')
    const pNode = document.createElement('class')
    const rNode = document.createElement('class')
    tNode.textContent = title
    aNode.textContent = author
    pNode.textContent = pages
    rNode.textContent = read
    library.appendChild(tNode)
    library.appendChild(aNode)
    library.appendChild(pNode)
    library.appendChild(rNode)

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = ''
    



}

function newBook() {
    document.querySelector('.add').style.display = 'flex'
    document.querySelector('#new-book').style.display = 'none'
}

