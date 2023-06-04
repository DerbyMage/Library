const libArray = []
const library = document.querySelector('.library')

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
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value
    const newer = new Book(title, author, pages, read)
    libArray.push(newer)  
    document.getElementById('title').value = ''
    document.getElementById('author').value = ''
    document.getElementById('pages').value = ''
    document.getElementById('read').value = ''
    divCreator()
   
    
    }


function newBook() {
    document.querySelector('.add').style.display = 'flex'
    document.querySelector('#new-book').style.display = 'none'
}

function remove(num) {
    // const library = document.querySelector('.library')
    console.log(num)
    console.log(num.target.dataset.num)
    const numb = (num.target.dataset.num)
    libArray.splice(numb, 1)
    divCreator()

}

function divCreator() {

    while(library.childElementCount > 5) {
        library.removeChild(library.lastElementChild)
    
       }
    for(let x=0; x < libArray.length; x++) {
        const tNode = document.createElement('div')
        const aNode = document.createElement('div')
        const pNode = document.createElement('div')
        const rNode = document.createElement('div')
        const bNode = document.createElement('div')
        const inp = document.createElement('input')
        inp.setAttribute('type', 'checkbox')
        inp.setAttribute('id', 'check')
        inp.setAttribute('data-num', `${x}`)
        const btn = document.createElement('button')
        bNode.setAttribute('class', 'book')
        tNode.setAttribute('class', 'book')
        aNode.setAttribute('class', 'book')
        pNode.setAttribute('class', 'book')
        rNode.setAttribute('class', 'book')
    
        bNode.setAttribute('data-num', `${x}`)
        tNode.setAttribute('data-num', `${x}`)
        aNode.setAttribute('data-num', `${x}`)
        pNode.setAttribute('data-num', `${x}`)
        rNode.setAttribute('data-num', `${x}`)
        btn.setAttribute('data-num', `${x}`)
        btn.textContent = 'Click to Remove'
        bNode.appendChild(btn)
        tNode.textContent = libArray[x].title
        aNode.textContent = libArray[x].author
        pNode.textContent = libArray[x].pages
        rNode.textContent = libArray[x].read
        rNode.appendChild(inp)
    
        library.appendChild(tNode)
        library.appendChild(aNode)
        library.appendChild(pNode)
        library.appendChild(rNode)
        library.appendChild(bNode)  
        bNode.addEventListener('click', remove) 
        inp.addEventListener('click', toggleRead) 
}
}

function toggleRead(e) {
    const targ = e.target.dataset.num
    libArray[targ].read === 'No' ? libArray[targ].read = 'Yes' : libArray[targ].read = 'No'
 console.log(libArray[targ])
 divCreator()
}