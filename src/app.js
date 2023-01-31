const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3004

const mainRoutes = require('./routes/mainRoutes');
//seteo de public y template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(mainRoutes)



app.listen(PORT, ()=>{
    console.log(`server corriendo en http://localhost:${PORT}`);
});