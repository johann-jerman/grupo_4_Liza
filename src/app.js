const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3004

//seteo de public y template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');

// definiendo rutas
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'))
});
app.get('/men', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/men.html'))
});
app.get('/women', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/women.html'))
});
app.get('/login', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'))
});
app.get('/register', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'))
});
app.get('/product', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/product.html'))
});
app.get('/shopping-cart', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/shopping-cart.html'))
});

app.listen(PORT, ()=>{
    console.log(`server corriendo en ${PORT}`);
});