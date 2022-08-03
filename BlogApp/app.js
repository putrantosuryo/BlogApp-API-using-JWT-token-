const express = require('express')
const userRouter = require('./src/user/user.route')
const app = express()

const port = 8001

app.use(express.json());

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})
app.use(userRouter);

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))