const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// to use the pug templating engine
app.set('view engine', 'pug');
// serving static files
app.use(express.static('public'));
// tell express to user cookie-Parser
app.use(cookieParser());

// Web Server
app.get('/', (req, res) => {
  res.send('<h1>Hello, My Server!</h1>');
});

// API
app.get('/getData', (req, res) => {
  const { number } = req.query;
  const isNum = Number(number);
  const sum = (isNum + 1) * isNum / 2;
  if (!number) {
    res.render('numbers', {text: 'Lack of Parameter'});
  } else if (!isNum) {
    res.render('numbers', {text: 'Wrong Parameter'});
  }
  res.render('numbers', {text: sum});
});

// Cookie
app.get('/myName', (req, res) => {
  const name = req.cookies.name;
  if (name) {
    res.render('names', {name});
  } else {
    res.render('hello');
  }
});

// Store Cookie
app.get('/trackName', (req, res) => {
  res.cookie('name', req.query.name);
  res.redirect('myName');
});

app.listen(3000, () => {
  console.log(`I'm running!`);
});
