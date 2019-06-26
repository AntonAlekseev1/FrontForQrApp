const express = require('express');
const app = express();
const path =require('path');

app.use(express.static('./dist/App'));

app.get('/*', (req, res)=> {
  res.sendFile(path.join(__dirname,'/dist/App/index.html'));
});
app.listen(process.env.PORT || 8080, () => {
  console.log('Console listening');
});

