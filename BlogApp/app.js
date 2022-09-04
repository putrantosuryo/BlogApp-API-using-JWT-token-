const express = require('express');
const authRouter = require('./src/auth/auth.route');
const tokenVerification = require('./src/middleware/token.verification');
const postRouter = require('./src/post/post.route');
const userRouter = require('./src/user/user.route')
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./src/config/swagger");
const app = express();
var cors = require('cors')

const port = 8001

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

app.get('/CekToken' ,tokenVerification,(req , res)=>{
   const authUser = req.auth;
   // res.send('hello from simple server :)'+ req.auth)
   res.json({halo : authUser.username})

})
app.use(userRouter);
app.use(authRouter);
app.use(postRouter);

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))