const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

function setMiddleware(app) {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(helmet());
  app.use(morgan('dev'));
}

module.exports = setMiddleware;