require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override'); 
const PORT = process.env.PORT || 3004;
const session = require ('express-session');
const cookie = require('cookie-parser');
const cors = require('cors');
const userLoggedMiddelware = require('./middleware/userLoggedMiddleware');
const mainRoutes = require('./routes/mainRoutes');
const fileRoutes = require('./routes/fileRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const apiUserRoutes = require('./api/routes/user.routes');
const apiMainRoutes = require('./api/routes/main.routes');
const apiProductRoutes = require('./api/routes/product.routes');
const apiCategoryRoutes = require('./api/routes/categories.routes');

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

app.use(cors({
    origin: '*'
}))

//uso de rutas
app.use(mainRoutes);
app.use('/product', productRoutes);
app.use('/user', userRoutes);
app.use('/productFile', fileRoutes);

// API routes
app.use('/api', apiMainRoutes);
app.use('/api/user', apiUserRoutes);
app.use('/api/product', apiProductRoutes);
app.use('/api/category', apiCategoryRoutes);

app.use((req, res, next)=>{
    res.status(404).render('error' , {css:null});
    next();
})


app.listen(PORT, ()=>{
    console.log(`server corriendo en http://localhost:${PORT}`);
});