"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadRecipes = exports.addRecipe = exports.updateRecipe = undefined;

var _toConsumableArray2 = require("babel-runtime/helpers/toConsumableArray");

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateRecipe = exports.updateRecipe = function updateRecipe(recipes, updatedRecipe) {
  var updatedIndex = recipes.findIndex(function (item) {
    return item.recipeName === updatedRecipe.recipeName;
  });
  return [].concat((0, _toConsumableArray3.default)(recipes.slice(0, updatedIndex)), [updatedRecipe], (0, _toConsumableArray3.default)(recipes.slice(updatedIndex + 1)));
};

var addRecipe = exports.addRecipe = function addRecipe(recipes, newRecipe) {
  return [newRecipe].concat((0, _toConsumableArray3.default)(recipes));
};

var loadRecipes = exports.loadRecipes = function loadRecipes() {
  return [{
    "recipeName": "Pizza",
    "ingredients": ["Bread", "Brocolli", "Tomato", "Onion", "Mushroom"],
    "description": "Add toppings to dough base and place into oven for 35 minutes on a high heat.\n\nBellissimo!"
  }, {
    "recipeName": "Spaghetti",
    "ingredients": ["Spaghetti", "Sauce", "Tomatoes", "Bacon", "Garlic"],
    "description": "Try not to get it all over your shirt."
  }, {
    "recipeName": "Meatballs",
    "ingredients": ["Minced Beef/Pork", "Onions", "Flour", "Chili Peppers", "Tomatoes", "Seasoning"],
    "description": "Roughly chop onions and mix with minced meat. Add flour for firmness until they hold their own shape. Place into pan on high heat with a brushing of oil until browned. Reduce heat until cooked through"
  }, {
    "recipeName": "🧀 CheeseCake",
    "ingredients": ["Cream Cheese", "Whipping Cream", "Strawberries", "Ginger Snap Biscuits", "Sugar", "Butter"],
    "description": "Crumble the biscuits into a tin and mix with the butter. Heat for a few minutes to form a solid base. Mix the cream cheese and whipping cream until heavy, then apply to top of biscuit base.\n\nAdd strawberries for decoration and leave to rest in fridge for 12 hours."
  }];
};