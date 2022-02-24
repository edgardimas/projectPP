const express = require('express')
const app = express()
const port = 3000
const router = require('./router/index')
// const flash = require('express-flash');
// const session = require('express-session');

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))
app.use(router)

// app.use(flash())
// app.use(session ({
//     secret:process.env.SESSION_SECRET
// }))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})