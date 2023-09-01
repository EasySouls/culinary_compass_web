import {
  DocumentSnapshot,
  QuerySnapshot,
  SnapshotOptions,
} from "firebase/firestore";

class Recipe {
  name: String;
  id: Number;
  ingredients: Array<String>;
  measures: Array<Number>;
  measureTypes: Array<String>;

  constructor(
    name: String,
    id: Number,
    ingredients: Array<String>,
    measures: Array<Number>,
    measureTypes: Array<String>
  ) {
    this.name = name;
    this.id = id;
    this.ingredients = ingredients;
    this.measures = measures;
    this.measureTypes = measureTypes;
  }
  toString() {
    var string = "";
    string += this.name + ", " + this.id;
    for (let index = 0; index < this.ingredients.length; index++) {
      string +=
        ", " +
        this.measures[index] +
        " " +
        this.measureTypes[index] +
        " " +
        this.ingredients[index];
    }
    return string;
  }
}

// Firestore data converter
export const recipeConverter = {
  toFirestore: (recipe: Recipe) => {
    return {
      name: recipe.name,
      id: recipe.id,
      ingredients: recipe.ingredients,
      measures: recipe.measures,
      measureTypes: recipe.measureTypes,
    };
  },
  fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
    const data = snapshot.data(options);
    if (data) {
      return new Recipe(
        data.name,
        data.id,
        data.ingredients,
        data.measures,
        data.measureTypes
      );
    } else {
      throw new Error("Document data not found");
    }
  },
};
