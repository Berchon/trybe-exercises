const express = require('express');
const cors = require('cors');
const path = require('path');

class AppController {
  constructor() {
    this.express = express();

    this.middlewares();
  }

  middlewares() {
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(cors());

    this.express.set('view engine', 'ejs');
    this.express.set('views', './views');

    this.express.use(express.static(path.join(__dirname, '/public')));
  }
}

module.exports = new AppController().express;
