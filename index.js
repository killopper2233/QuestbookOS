/* load the server */
const express = require('express');

const app = express();


app.use("/apps",express.static("apps"));
app.use("/QDE", express.static("QuestbookOS Desktop Environment"))
app.use("/src", express.static("Finished loading important files!"))

app.get('/', function(req, res) {
  res.setHeader('Content-Type', 'text/html');
  res.sendFile('index.html',  { root: __dirname });
    
});

app.listen(3000, () => {
  console.log('QuestbookOS started');
});
// start the JS server
// ignore when OS is finshed
