const express = require('express')
const app = express()
const PORT = 3000

// Reecieving incoming data from the client configuration

app.use(express.json())

const book = [
    {
        id:'1',
        title: 'Computer Science',
    },
    {
        id:'2',
        title: 'MERN stack',
    },
    {
        id:'3',
        title: 'Data Structure',
    }
] ;

app.get('/',(req,res)=>{
    res.json({
        status: 'success',
        message: 'Welcome To My First Book Api in express'
    })
})

// ? fetching all books

app.get('/books',(req,res)=>{
    res.json({
        status: 'success',
        fetch: 'book fetch successfully',
        data: bookFound
    })
})

// ? fetching  book

app.get('/books/:id',(req,res)=>{
     const id = req.params.id
    const bookFound = book.find((book)=> book.id === id)
    if (!bookFound) {
        return res.json({
            status:'failed',
            message: `user id not ${id} found`
        })
    }
    res.json({
        status: 'success',
        fetch: 'book fetch successfully',
    })
})


// ? create a book

app.post('/books',(req,res)=>{
    const newPost = req.body
    book.push(newPost)
    res.json({
        status: 'success',
        fetch: 'book fetch successfully',
        data: book
    })
})



app.listen(PORT,console.log(`Server Is Running ${PORT}`))