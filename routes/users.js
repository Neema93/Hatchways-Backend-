const express = require("express");
const router = express.Router();
module.exports = (data) => {
    router.get('/', (req, res) => {
        
      res.render("recipes");
      });
      router.get('/recipes',(req,res) => {

          res.send({"Response body (JSON)": ({recipeNames:data.recipes.map(({ name }) => name)}),"status":200});
       
      })
      router.get('/recipes/details/:name',(req,res) => {
          const {name} = req.params;
          
            const result = data.recipes.filter(({ name }) => name === req.params.name)[0];
        console.log(result)
            res.send({"Response body (JSON)":{"details": result},"status":200});
     
    })
    router.post('/recipes',(req,res) => {
        console.log( req.body)
         const {name , ingredients ,instructions} = req.body;
         if(name && ingredients && instructions) {
             data.recipes.push(name,ingredients,instructions);
            console.log( res.json({recipes}));
      
         }
      })
      router.post('/recipes/edit',(req,res) => {
        console.log( req.body)
         const {name , ingredients ,instructions} = req.body;
         if(name && ingredients && instructions) {
             data.recipes.push(name,ingredients,instructions);
             res.json({recipes});
      
         }
      })
      
      return router;
}