const express = require('express');
const sequelize = require('./utils/database');
const todoRoutes = require('./routes/todo');
const path = require('path');

const app = express();
const PORT = process.env.PROT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/api/todo', todoRoutes);

app.use((req, res, next) => {
  res.sendFile('/index.html');
});

async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT);
  } catch (e) {
    console.error(e);
  }
}

start();
