const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  // TODO: write the schema
  title: {
    type: String,
    required: true
  },

  level: {
    type: String,
    enum: ['Easy Peasy', 'Amateur Chef', 'UltraPro Chef']
  },

  ingredients: Array,
  cuisine: {
    type: String,
    required: true
  },

  dishType: {
    type: String,
    enum: ['Breakfast', 'Dish', 'Snack', 'Drink', 'Dessert', 'Other']
  },

  image: {
    type: String,
    default: 'https://images.media-allrecipes.com/images/75131.jpg'
  },

  duration: {
    type: Number,
    min: 0
  },

  creator: String,
  
  created: {
    type: Date,
    default: Date.now
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

// const mongodbURI = 'mongodb://localhost:27017/lab-mongoose-recipes'; // protocol // host name and port // database name
// //this data return a promise
// mongoose.connect(mongodbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })

// .then(() => {
//     console.log('connected to the database successfully');

// })



// .catch(error => {
//     console.log('there was an error connecting to the database'); 
// });

module.exports = Recipe;
