const express = require('express');
const nunjucks = require('nunjucks');

const recipes = require("./data");

const server = express();

server.use(express.static('public'));

server.set('view engine', 'njk');

nunjucks.configure("views", {
  express: server,
  autoescape: false,
  noCache: true,
})

server.get("/", function (req, res) {
  return res.render("index", { items: recipes });
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/recipes", function (req, res) {
  return res.render("recipes", { items: recipes });
});

server.get("/recipe", function (req, res) {
  const recipeName = req.query.name;
  console.log('Server '+ recipeName);

  const index = recipes.findIndex(recipe => recipe.title == recipeName);

  return res.render('recipe', {recipe: recipes[index]});
});


//   console.log(recipes[recipeIndex]);

//   if (!recipes[recipeIndex]) {
//     return res.send("Recipe not found");
//   }
//   return res.render("recipe", recipes[recipeIndex]);
// })

server.listen(3000, function () {
  console.log('server is runing');
});