const express = require('express');

const bodyParser = require ('body-parser');

const authRoutes= require ('./routes/auth');

const formateursRoutes=require('./routes/formateurs');

const participantRoutes = require('./routes/participant');

const cyclesRoutes=require('./routes/cycles');

const errorController = require ('./controllers/error');

const app = express();

const ports = process.env.ports || 3000;

app.use(bodyParser.json());

app.use((req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Content-Type, Accept, X-Custom-Header, Authorization'
  );
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});
app.use('/cycle',cyclesRoutes);
app.use('/auth',authRoutes);
app.use('/formateur',formateursRoutes)
app.use('/participant',participantRoutes);

app.use(errorController.get404);
app.use(errorController.get500);



app.listen(ports,()=>console.log(`listening on port ${ports}`))
