const express = require('express')
const session = require('express-session')
const {body, validationResult, check} = require('express-validator')
const parser = require ('cookie-parser')
const flash = require ('connect-flash')

//connections database
require('./utils/db')
const Contact = require('./model/contact')

const app = express()
const port = 3000

//configuration 
app.use(parser('secret'))
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge : 6000 }
}))
app.use(flash())


//setup ejs
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));

//halaman home
app.get('/',(req, res)=>{
    res.render('index')
})

//halaman bali destination
app.get('/bali', (req,res)=>{
  res.render('Bali-destination')
})

//halaman lombok destination
app.get('/lombok-destination', (req,res)=>{
  res.render('Lombok-destination')
})

//halaman login
app.get('/login',(req,res)=>{
    res.render('login')
})

//halaman signup / registrasi
app.get('/sign-up',(req,res)=>{
    res.render('sign-up')
})

//registrasi
app.post('/sign-up', 
[
  body('nama').custom(async(value)=>{
    const duplikat = await Contact.findOne({nama:value})
    if (duplikat){
      throw new Error ('Eror : this name is already in use');
    }
    return true;
  }),
  check('email', 'the email was written incorrectly').isEmail(),
  check('nohp','wrong number written').isMobilePhone('id-ID')

], function(req, res){
  const erors = validationResult(req) 
  if(!erors.isEmpty()){

    res.render('sign-up',{
      title : 'halaman add kontak',
    layout : 'layouts/main-layout',
    errors : erors.array()
    })
  } else{
 
    Contact.insertMany(req.body, (erro, result)=>{
      req.flash('msg','Data Contact berhasil ditambahkan')
    res.redirect('login')
    })
    
  }
 
})
app.use('/' ,function(req, res){
  res.status(404)
  res.send ('<h1> 404 </h1>')
})

app.listen(port,()=>{
    console.log('Server Running http://localhost:3000')
})

