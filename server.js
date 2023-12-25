const express = require("express");

const app = express();

//define port
const port=3000;

app.get("/", (req, res) => {

res.json({message:'welcome to the node.js application'})

})

//get example

app.get("/get-data", (req, res) => {

res.json({message:'Get JSON Example'})

})

//run the application
app.listen(port, () => {
  console.log(`running at port ${port}`);
});
