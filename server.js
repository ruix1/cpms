const express = require('express');
const app = express();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const winston = require('winston');
const mongoose = require("mongoose");
const config = require('config');
const Joi = require('joi');

app.use(express.json());//this is pass all incoming  data to jason format
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect(config.get("db.conn_str"), { useNewUrlParser: true }, (err) => {
    if (!err) {
        winston.log('info', 'Database connected');
    }
});
console.log(config.get("db.conn_str"));


const { User } = require("./models/users");app.post("/authenticate", (req, res) => {
    User.find({ username: req.body.username, password: req.body.password })
        .then(data => {
            if (!data || data.length === 0) {
                throw 'Invalid authenticate';
            }
            var token = jwt.sign({
                username: req.body.username,
            }, 'secretKey', {
                    expiresIn: '1h',
                });
            res.send({
                isLoggedIn: true,
                token: token
            });
        }).catch(err => {
            res.status(401).send({
                isLoggedIn: false,
                message: "Invalid authenticate. ",
                err: err
            });
        });
});

app.post('/register', function (req, res) {

    User(req.body).save()
        .then(() => {
            var token = jwt.sign({
                username: req.body.username,
            }, 'secretKey', {
                    expiresIn: '1h',
                });
            res.send({
                isLoggedIn: true,
                username: req.body.username,
                token: token,
            });
        })
        .catch(err => {
            res.status(400).send({
                isLoggedIn: false,
                message: "Invalid user information. ",
                err: err
            });
        });
});

app.use((req, res, next) => {
    var token = req.headers.authtoken || req.body.authtoken || req.params.authtoken;
    jwt.verify(token, 'secretKey', function (err, decoded) {
        if (err) {
            res.status(403).send({
                err: "invalid details",
                isLoggedIn: false
            });
        } else {
            req.decoded = decoded;
            next();
        }
    });
});

function getDate() {
    return [
        { name: 'IRA-5200', cur_cash: '5763.36', pre_cash: '$8916.69', status: 'descending', ratio: '-0.08%' },
        { name: 'AAA-2018', cur_cash: '15,884,302.36', pre_cash: '$7,430.69', status: 'ascending', ratio: '0.08%' },
        { name: 'REG-0029', cur_cash: '2,010,926.10', pre_cash: '$38,888.69', status: 'descending', ratio: '-1.18%' },
        { name: 'AAA-1812', cur_cash: '13,465,679.34', pre_cash: '$0.00', status: 'balance', ratio: '0.00%' },
        { name: 'IRA-0146', cur_cash: '10,050,054.07', pre_cash: '$8,916.69', status: 'descending', ratio: '-2.08%' },
        { name: 'AAA-3810', cur_cash: '576,388.36', pre_cash: '$8906.69', status: 'ascending', ratio: '3.08%' },
        { name: 'REG-2019', cur_cash: '39,160,334.36', pre_cash: '$8,916,324.69', status: 'descending', ratio: '-0.07%' }
    ]
}

app.get('/getdates', (req, res) => {
    var result = getDate();
    res.send(result);
})

app.listen(8080, () => {
    console.log('sever running @localhost:3000');

});