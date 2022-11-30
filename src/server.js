require('dotenv').config();
const express = require('express');
const connect = require('./config/database.js');
const PORT = process.env.PORT || 3334;
//const userRoute = require('./routes/user.route.js');
const todoRoute = require('./routes/todo.route.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api/user', userRoute);
app.use('/api/todo', todoRoute);

connect(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
