import { Meal, Recipe } from "@/types";
import axios, { AxiosResponse } from "axios";

export async function fetchRecipes(query: string): Promise<Meal[]> {
  const options = {
    url: "https://www.themealdb.com/api/json/v1/1/search.php",
    params: {
      s: query,
    },
  };

  try {
    const response: AxiosResponse<{ meals: Meal[] }> = await axios.get(
      options.url,
      { params: options.params }
    );
    const result = response.data.meals;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
