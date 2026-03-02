import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()
const port = 3000



// console.log(join(__dirname, 'public', 'index.html'))
const filePath = join(__dirname, 'public'); // all files inside the folder now can be requested 

// express.static(root, [options])
app.use('/static',express.static(filePath)) // virtual path for reverse proxy for cache, and performance


// ----------------------------------------------------------------------------------------------------------------------------------------------------
// app.get('/', (req, res) => {
// //   res.send('Hello World!')   
//     res.sendFile(filePath) // by default file will be sent, since it was in the global middleware, 
// })


// Method
// get
// put
// post 
// delete
// all



// Route Parameters 

// Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
// req.params: { "userId": "34", "bookId": "8989" }


// Route parameters ' - '

// Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
// req.params: { "from": "LAX", "to": "SFO" }


// Route parameters ' - '
// Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
// req.params: { "genus": "Prunus", "species": "persica" }





// Middleware


// Application level middleware
// app.use(middlewarefunc)

// Router Level Middleware
// router.use(middlewareFunc)

// Error handling middleware
// always app.use((err, req, res, next) => {})
// Built in middleware

// cookieParser = cookie-parser
// app.use(cookieParse())

// third party middleware



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
