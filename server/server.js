const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
// const apiRouter = require('./routes/api');
const cors = require('cors');
const postController = require('./controllers/postController');

// parses JSON from incoming request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// handle requests for static files
app.use(express.static(path.resolve(__dirname, '../client')));

// define route handlers
// app.use('/api', apiRouter, (req, res) => {
//     return res.status(200);
//     });
app.get('/bulletin', postController.getAllPosts, (req, res, next) => {
  return res.status(200).json(res.locals.allPosts);
});

app.get('/filter', postController.filterPosts, (req, res, next) => {
  return res.status(200).json(res.locals.filteredPosts);
});

app.get('/userPosts', postController.getUserPosts, (req, res, next) => {
  return res.status(200).json(res.locals.userPosts);
});

app.post('/createPost', postController.createPost, (req, res, next) => {
  return res.status(201).json(res.locals);
});

app.delete('/userPosts', postController.deletePost, (req, res, next) => {
  return res.status(200).json(res.locals);
});

app.put('/updateStatus', postController.updateStatus, (req, res, next) => {
  return res.status(200).json(res.locals);
  u;
});

// catch-all error handler
app.get('*', (req, res) => {
  return res.status(404).send("This is not the page you're looking for...");
});

// Global error handling middleware
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log('Server listening on port 3000');
});

module.exports = app;
