const express = require('express');
const app = express();
const path =require('path');
const router = express.Router();

app.use(express.static('./dist'));
app.use('/*', express.static(path.resolve('dist/index.html')));

app.listen(process.env.PORT || 5000);

router.get('*', function(req, res) {
  res.sendFile(path.resolve('dist/index.html'));
});

console.log('Console listening');
