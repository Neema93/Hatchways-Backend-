const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/users");
const data = require("./data.json")
const app = express();
const PORT = 8012;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");

app.use("/api/users",userRoutes(data));
// app.get('/',(req,res) => {
// res.send("hello");
// })
app.post('/recipes/edit',(req,res) => {
  console.log( req.body)
   const {name , ingredients ,instructions} = req.body;
   if(name && ingredients && instructions) {
       data.recipes.push(name,ingredients,instructions);
      console.log( res.json({recipes}));

   }
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
  