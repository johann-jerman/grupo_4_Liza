const express = require('express');
const app = express();
const path = require('path');
// const methodOverride =  require('method-override'); 
const PORT = process.env.PORT || 3004

const mainRoutes = require('./routes/mainRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');

//seteo de public y template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));
// app.use(express.json());
// app.use(methodOverride('_method')); 


app.use(mainRoutes)
app.use(productRoutes)
app.use(userRoutes)

// app.use((req, res, next)=>{
//     res.status(404).render('error');
// })


app.listen(PORT, ()=>{
    console.log(`server corriendo en http://localhost:${PORT}`);
});