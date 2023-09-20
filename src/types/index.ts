import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  styles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface RecipeProps {
  recipe: Meal;
}

export interface FilterProps {
  search: string;
  kitchenType: string;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface Recipe {
  id: number;
  name: string;
  category: string;
  kitchenType: string;
  instructions: Array<string>;
  mealThumbnail: string;
  tags: Array<string>;
  ingredients: Array<string>;
  measures: Array<string>;
  source?: string;
  youtubeLink?: string;
  dateModified?: Date;
}

export interface Meal {
  idMeal: string;
  strMeal: string;
  strDrinkAlternate: any;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags: string;
  strYoutube: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: any;
  strIngredient17: any;
  strIngredient18: any;
  strIngredient19: any;
  strIngredient20: any;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: any;
  strMeasure17: any;
  strMeasure18: any;
  strMeasure19: any;
  strMeasure20: any;
  strSource: any;
  strImageSource: any;
  strCreativeCommonsConfirmed: any;
  dateModified: any;
}
