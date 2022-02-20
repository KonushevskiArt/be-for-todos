const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
// const methodOverride = require('method-override');
const postApiRoutes = require('./routes/api-todo-routes');
const cors = require('cors');

const app = express();

app.use(cors());

mongoose.set('useFindAndModify', false);
mongoose
  .connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log('Connected to DB'))
  .catch((error) => console.log(error));

app.listen(process.env.PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${process.env.PORT}`);
});

app.use(express.json());

// app.use(methodOverride('_method'));//??

app.use(postApiRoutes);

app.use((req, res) => {
  res
    .status(404)
    .send('Not found');
});
