const libArray = []
const library = document.querySelector('.library')

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
        bNode.setAttribute('class', 'remove')
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
        rNode.addEventListener('click', toggleRead)

        
        
    }}

function newBook() {
    const add = document.querySelector('.add')
    add.style.display = 'flex'
    const btn = document.querySelector('.addbtn')
    btn.style.display = 'none'
}

function addBook(title, author, pages, read) {
    titleValue =  document.getElementById('title')
    authorValue = document.getElementById('author')
    pagesValue =  document.getElementById('pages')
    readValue =   document.getElementById('read')
    
    title = titleValue.value
    author = authorValue.value
    pages = pagesValue.value
    read = readValue.value
const newer = new Book(title, author, pages, read)
libArray.push(newer)
console.log(newer)
divCreator()
titleValue.value = ''
authorValue.value =''
pagesValue.value = ''
readValue.value =  ''


}



class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }


    get author() {
        return this._author
    }

    set author(x) {
        this._author = x
    }

    get title() {

        return this._title

    }

    set title(name) {
        this._title = name
    }

    get pages() {
        return this._pages
    }

    set pages(n) {
        this._pages = n
    }


    get read() {
        return this._read
    }

    set read(x) {
        this._read = x
    }
    readBook() {
        if( this.read !== false && this.read !== true && this.read.toLowerCase() === 'no') {
            this.read = false
        }
        if(this.read !== false && this.read !== true && this.read.toLowerCase() === 'yes') {
            this.read = true
        }
        return this.read = !this.read
    }
}

function toggleRead(e) {
    const targ = e.target.dataset.num
    // libArray[targ].read === 'No' ? libArray[targ].read = 'Yes' : libArray[targ].read = 'No'
    libArray[targ].readBook()
//  console.log(libArray[targ])
 divCreator()
}

function remove(num) {
    // const library = document.querySelector('.library')
    console.log(num)
    console.log(num.target.dataset.num)
    const numb = (num.target.dataset.num)
    libArray.splice(numb, 1)
    divCreator()

}


