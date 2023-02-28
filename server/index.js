const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config({ path: './server/.env' });
const mongoose = require('mongoose');
const User = require('./models/User');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.DATABASE_CONNECT);

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use('/openai', require('./routes/openaiRoutes'));

app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDoc = await User.create({
      email,
      password,
      // password: bcrypt.hashSync(password, salt),
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e);
    console.log(e);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
