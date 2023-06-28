  const express = require('express');
  const app = express();
  const port = 3000;
  const morgan = require('morgan')
  const route = require('./route')
  const methodOverride = require('method-override')
  const db  = require('./config/db');
  const path = require('path');
  // CONNECT DB 

  db.connect();

  // use middleware to call function put patch deleta,... 

  app.use(methodOverride('_method'))

  // parse body 

  app.use(express.urlencoded({ extended: true }))

  // SET VIEW HANDLEBAR
  const hbs = require('express-handlebars')
  app.engine('.hbs', hbs.engine({
    extname: '.hbs',
  
  }))
  app.set('view engine', '.hbs');
  app.set('views', './src/resources/views')

  app.use(morgan('combined'))

  // set static route (if path coincide public/... it redirect path u put)
  app.use(express.static('./src/public'))

  route(app);

  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}/`);
  })

