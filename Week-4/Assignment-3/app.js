const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'pug');

// create connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "tiffany2020",
    database: "assignment"
});

// sql connection
con.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Database Connected');
});

// home page
app.get('/', (req, res) => {
    res.redirect('login');
});

//register page
app.get('/register', (req, res) => {
    res.render('register');
});

//login page
app.get('/login', (req, res) => {
    res.render('login');
})

// register
app.post('/register', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let account = { email: email, password: password };
    let insertSQL = 'INSERT INTO user SET ?';
    let selectSQL = `SELECT * FROM user WHERE email = '${account.email}'`;
    con.query(selectSQL, (err, result) => {
        if (err) throw err;
        else if (result.length != 0) {
            res.render('register', { text: `${result[0].email} has already been registered!` });
        } else {
            con.query(insertSQL, account, (err, result) => {
                if (err) throw err;
                console.log(result);
                res.redirect('/member');
            });
        }
    });
});

// login
app.post('/login', (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let account = { email: email, password: password };
    let selectSQL = `SELECT * FROM user WHERE email = '${account.email}'`;
    con.query(selectSQL, (err, result) => {
        if (err) throw err;
        else if (result[0].password == password) {
            res.redirect('/member');
        } else {
            res.render('login', { text: 'Incorrect email or password!' });
        }
    });
});

app.get('/member', (req, res) => {
    res.render('member', { text: 'Welcome!' });
});

app.listen('3000', () => {
    console.log(`I'm running`)
});
