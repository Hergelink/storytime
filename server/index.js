const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: './server/.env' });
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3001;

const app = express();

const salt = bcrypt.genSaltSync(10);
const secret = 'asdasdf#$sdf@#34k2k#234k*)2j%34jk';

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

mongoose.connect(process.env.DATABASE_CONNECT);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/openai', require('./routes/openaiRoutes'));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.create({
      email,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   const userDoc = await User.findOne({ email });
//   const passOk = bcrypt.compareSync(password, userDoc.password);

//   if (passOk) {
//     //Logged in
//     jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
//       if (err) throw err;
//       res.cookie('token', token).json({
//         id: userDoc._id,
//         email,
//       });
//     });
//   } else {
//     res.status(400).json('wrong credentials');

//   }
// });

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      //Logged in
      jwt.sign({ email, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id: userDoc._id,
          email,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  } else {
    res.status(400).json('user not found');
  }
});

// the below get request is found false by gpt3
// app.get('/profile', (req, res) => {
//   const { token } = req.cookies;
//   jwt.verify(token, secret, {}, (err, info) => {
//     if (err) throw err;
//     res.json(info);
//   });
// });

app.get('/profile', (req, res) => {
  const { token } = req.cookies;
  try {
    const decoded = jwt.verify(token, secret);
    res.json(decoded);
  } catch (err) {
    if (err.name === 'TokenExpiredError') {
      res.status(403).json({ message: 'Token expired' });
    } else {
      res.status(401).json({ message: 'Invalid token' });
    }
  }
});

app.post('/logout', (req, res) => {
  res.cookie('token', '').json('ok');
});

// health check for render
app.get('/health', (req, res) => {
  res.sendStatus(200);
});


app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
