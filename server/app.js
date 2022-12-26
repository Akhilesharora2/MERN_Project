// Import all dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app= express();

//Config env file & require connection file
dotenv.config({path: './config.env'});
require('./db/conn');
const port = process.env.PORT;

//Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Admin = require('./models/adminSchema');
const authenticate = require('./middleware/authenticate');
const adminAuthenticate = require('./middleware/adminAuthenticate');

// These mehtods are used to get data and cookies from front-end
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', (req, res)=>{
    res.send("Hello World");
})

//Registration
app.post('/register', async (req, res)=>{
    try {
        //Get body or data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;
        
        const createUser = new Users({
            username : username,
            email : email,
            password: password
        });
        
        //Save method is used to create User or Insert user
        // But before saving or inserting , password will Hash
        // because of hashing. After hash it will be saved to db.
        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");
    } catch (error) {
        res.status(400).send(error);    
    }
})

//Login User
app.post('/login', async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        //Find if user exists
        const user = await Users.findOne({email: email});
        if(user){
            //Verify Password
            const isMatch = await bcryptjs.compare(password, user.password);
            
            if(isMatch){
                //Generate Token which is defined in user Schema
                const token = await user.generateToken();
                res.cookie("jwt", token, {
                    // Token Expires in 24 Hours
                    expires: new Date(Date.now()+ 86400000),
                    httpOnly: true
                })
                res.status(200).send("Logged In");
            }else{
                res.status(400).send('Invalid Password');
            }
        }else{
            res.status(400).send('Invalid Email');
        }
    }catch (error) {
     res.status(400).send(error);   
    }
})

//Message
app.post('/message', async (req, res)=>{
    try {
        //Get body or data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;
        
        const sendMsg = new Message({
            name : name,
            email : email,
            message: message
        });
        
        //Save method is used to create User or Insert user
        // But before saving or inserting , password will Hash
        // because of hashing. After hash it will be saved to db.
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");
    } catch (error) {
        res.status(400).send(error);    
    }
})

//Logout
app.get('/logout', (req,res) =>{
    res.clearCookie("jwt", {path: '/'});
    res.status(200).send("Logged Out");
})

//Authentication
 app.get('/auth', authenticate, (req,res)=>{
 
 })
 //Admin Auth
 app.get('/adminAuth', adminAuthenticate, (req, res) =>{

 })
 //Admin User
app.post('/admin', async (req,res)=>{
    try {
        const email = req.body.email;
        const password = req.body.password;        

        //Find if user exists
        const admin = await Admin.findOne({email: email});
            
        if(admin){
            //Verify Password
            const isMatch = await bcryptjs.compare(password, admin.password);
            
            if(isMatch){
                //Generate Token which is defined in user Schema
                const token = await admin.generateToken();
                res.cookie("jwt", token, {
                    // Token Expires in 24 Hours
                    expires: new Date(Date.now()+ 86400000),
                    httpOnly: true
                })
                if(admin.admin === "Akhilesh"){
                res.status(200).send("Admin In");
                }else{
                    res.status(400).send('Invalid Admin');
                }
            }else{
                res.status(400).send('Invalid Password');
            }
        }else{
            res.status(400).send('Invalid Email');
        }
    }catch (error) {
     res.status(400).send(error);   
    }
})


// Run Server
app.listen(port, ()=>{
    console.log('server listening at 3001');
})