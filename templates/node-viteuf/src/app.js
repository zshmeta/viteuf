const express = require('express');
const { setRoutes } = require('./routes');
const { setMiddleware } = require('./middleware');

const app = express();

// Set up middleware
setMiddleware(app);

// Set up routes
setRoutes(app);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;