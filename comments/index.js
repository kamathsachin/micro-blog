const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('cryto');

const app = express();
app.use(bodyParser.json());

const commentsByPostId = {};

app.get('/posts/:id/comments', (req, res) => {});

app.post('/posts/:id/comments', (req, res) => {});

app.listen(4001, () => {
  console.log('Listening at 4001');
});
