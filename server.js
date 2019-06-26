const express = require('express');
const app = express();
const path =require('path');
const router = express.Router();

app.use(express.static('src'));
app.use('/*', express.static(path.resolve('src/index.html')));

app.listen(process.env.PORT || 5000);

router.get('*', function(req, res) {
  res.sendFile(path.resolve('src/index.html'));
});

console.log('Console listening');
