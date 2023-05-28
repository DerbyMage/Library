const libArray = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.unread = function() {
    if(this.read){
        this.read = 'True' ? this.read = 'False' : this.read = 'True'
        
    }
    console.log(`${this.read}`)
}


function addBook(){
    const library = document.querySelector('.library')

    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const newer = new Book(title, author, pages, read)
    libArray.push(newer)
   while(library.childElementCount > 4) {
    library.removeChild(library.lastElementChild)

   }
    for(let x=0; x < libArray.length; x++) {
    const tNode = document.createElement('div')
    const aNode = document.createElement('div')
    const pNode = document.createElement('div')
    const rNode = document.createElement('div')
    tNode.setAttribute('class', 'book')
    aNode.setAttribute('class', 'book')
    pNode.setAttribute('class', 'book')
    rNode.setAttribute('class', 'book')
    tNode.textContent = libArray[x].title
    aNode.textContent = libArray[x].author
    pNode.textContent = libArray[x].pages
    rNode.textContent = libArray[x].read
    library.appendChild(tNode)
    library.appendChild(aNode)
    library.appendChild(pNode)
    library.appendChild(rNode)

    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = ''
    
    }


}

function newBook() {
    document.querySelector('.add').style.display = 'flex'
    document.querySelector('#new-book').style.display = 'none'
}

