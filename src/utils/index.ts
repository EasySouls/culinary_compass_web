import { FilterProps, Meal, Recipe } from "@/types";
import axios, { AxiosResponse } from "axios";

// TODO use the received kitchenType filter prop
export async function fetchRecipes(filters: FilterProps): Promise<Meal[]> {
  const options = {
    url: "https://www.themealdb.com/api/json/v1/1/search.php",
    params: {
      s: filters.search,
    },
  };

  try {
    const response: AxiosResponse<{ meals: Meal[] }> = await axios.get(
      options.url,
      { params: options.params }
    );
    const result = response.data.meals;
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// from 52764 to 53075
export async function fetchRecipeById(id: number): Promise<Meal | undefined> {
  const options = {
    url: "https://www.themealdb.com/api/json/v1/1/lookup.php",
    params: {
      i: id,
    },
  };

  try {
    const response: AxiosResponse<{ meals: Meal[] }> = await axios.get(
      options.url,
      { params: options.params }
    );

    if (response.data.meals === null || response.data.meals === undefined)
      return;
    const result = response.data.meals[0];
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

// export const convertToRecipe = (meal: Meal) => {
//   const ingredients: string[] = [];
//   const measures: string[] = [];

//   for (let i = 1; i <= 20; i++) {
//     const ingredient = meal[`strIngredient${i}`];
//     if (ingredient !== null && ingredient !== "" && ingredient !== " ") {
//       ingredients.push(ingredient);
//     }
//   }

//   for (let i = 1; i <= 20; i++) {
//     const measure = meal[`strMeasure${i}`];
//     if (measure !== null && measure !== "" && measure !== " ") {
//       measures.push(measure);
//     }
//   }

//   const instructionsArray: string[] = meal.strInstructions.split("\r\n");

//   // Remove empty lines and format each instruction
//   const formattedInstructions: string[] = instructionsArray
//     .filter((line) => line.trim() !== "")
//     .map((line) => {
//       // Remove the step number and tabs
//       const instruction = line.replace(/^\d+\.\t/, "");
//       // Add a period at the end if it's missing
//       return instruction.endsWith(".") ? instruction : instruction + ".";
//     });

//   const tags = meal.strTags ? meal.strTags.split(",") : [];

//   const recipe: Recipe = {
//     id: +meal.idMeal,
//     name: meal.strMeal,
//     category: "",
//     kitchenType: meal.strArea,
//     meatType: meal.strCategory,
//     instructions: formattedInstructions,
//     mealThumbnail: meal.strMealThumb,
//     tags: tags,
//     ingredients: ingredients,
//     measures: measures,
//     youtubeLink: meal.strYoutube,
//     dateModified: meal.dateModified,
//     timeNeeded: {
//       preparation: 0,
//       cooking: 0,
//     },
//     difficulty: "easy",
//   };

//   return recipe;
// };
