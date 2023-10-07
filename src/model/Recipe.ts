import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({});

const Recipe = mongoose.models.Recipe || mongoose.model("Recipe", recipeSchema);

export default Recipe;
