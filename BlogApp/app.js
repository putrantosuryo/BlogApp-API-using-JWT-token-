// TUGAS  CHAPTER 7 
// 1. Selesaikan API registrasi, login, dan middleware JWT token verification
// 2. Buat migrasi table posts {id, title, image, body, user_id}
// 3. Buat API =
//     1. GET ALL posts
//     2. GET Single posts
//     3. Create Posts
//     4. Edit Posts
// 4. Implementasi proteksi/middleare JWT untuk API create post dan edit post.


const express = require('express');
const authRouter = require('./src/auth/auth.route');
const tokenVerification = require('./src/middleware/token.verification');
const postRouter = require('./src/post/post.route');
const userRouter = require('./src/user/user.route')
const app = express()

const port = 8001

app.use(express.json());

app.get('/' ,tokenVerification,(req , res)=>{
   const authUser = req.auth;
   // res.send('hello from simple server :)'+ req.auth)
   res.json({halo : authUser.username})

})
app.use(userRouter);
app.use(authRouter);
app.use(postRouter);

app.listen(port , ()=> console.log('> Server is up and running on port : ' + port))