const mongoose = require('mongoose');

// Import Recipe model
const Recipe = require('./models/Recipe');

// Import data
const data = require('./data');

const MONGODB_URI = 'mongodb://localhost/recipeApp';

// Connection to the database "recipeApp"
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to Mongo!');
  })

//Iteration 2 - Create a recipe

  // Recipe.create({
  //   title: "Rigatoni alla Genovese",
  //   level: "Easy Peasy",
  //   ingredients: [
  //     "2 pounds red onions, sliced salt to taste",
  //     "2 (16 ounce) boxes uncooked rigatoni",
  //     "1 tablespoon chopped fresh marjoram leaves",
  //     "1 pinch cayenne pepper",
  //     "2 tablespoons freshly grated Parmigiano-Reggiano cheese"
  //   ],
  //   cuisine: "Italian",
  //   dishType: "Dish",
  //   image: "https://images.media-allrecipes.com/userphotos/720x405/3489951.jpg",
  //   duration: 220,
  //   creator: "Chef Luigi"
  // })

  //Iteration 3 - Insert Many recipes
  Recipe.insertMany(data)
  .then(document => {
    console.log(document.title)
  })
  //Iteration 4 - Update recipe
  .then(document => {
    console.log('Duration was changed successfully');
    console.log(document);
    return Recipe.updateOne({ title: 'Rigatoni alla Genovese' }, { duration: 100 });
  })
  //Iteration 5 - Remove a recipe
  .then(deletedDocument => {
    console.log('Carrot Cake was successfully removed from the database');
    console.log(deletedDocument);
    return Recipe.deleteOne({ title: 'Carrot Cake' });
  })

  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

//Iteration 6 - Close the Database
  .finally(() => {
    mongoose.connection.close()
  })


