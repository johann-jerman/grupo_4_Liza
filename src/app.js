const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); 
const PORT = process.env.PORT || 3004;
const session = require ('express-session');
const cookie = require('cookie-parser');
const userLoggedMiddelware = require('./middleware/userLoggedMiddleware');

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

app.use(session({
    secret : 'Este mensage es secreto',
    resave : false,
    saveUninitialized : false
}));
app.use(cookie('Clave Secreta'));
app.use(userLoggedMiddelware);
//seteo de public y template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

// utilizacion de metodo put delete
app.use(methodOverride('_method')); 

//agregar informacion como json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//uso de rutas
app.use(mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);

// app.use((req, res, next)=>{
//     res.status(404).render('error' , {css:null});
//     next();
// })


app.listen(PORT, ()=>{
    console.log(`server corriendo en http://localhost:${PORT}`);
});