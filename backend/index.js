//importing all modules
const connectToMongo = require("./database");
const express = require('express');



//Connecting to Mongo
connectToMongo();



//Variable declarations
const app = express();
const port = 3000;


//Routes setup
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.use("/api/auth",require("./routes/auth"));







//Connection to local port 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})