import { categories } from "@/constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: String;
  styles?: String;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface RecipeProps {
  recipe: Recipe;
}

export interface FilterProps {
  search: string;
  kitchenType: string;
  categories: string;
  limit: number;
}

export interface OptionProps {
  title: string;
  value: string;
}

export type CategoryValue = (typeof categories)[number]["value"];

export interface CustomFilterProps {
  title: string;
  options: readonly OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}

export interface Recipe {
  _id: string;
  id: number;
  name: string;
  category: string;
  kitchenType: string;
  meatType: string;
  instructions: Array<string>;
  mealThumbnail: string;
  tags?: Array<string>;
  ingredients: Array<string>;
  measures: Array<string>;
  youtubeLink?: string;
  dateModified?: string;
  timeNeeded: {
    preparation: number;
    cooking: number;
  };
  difficulty: "easy";
}
