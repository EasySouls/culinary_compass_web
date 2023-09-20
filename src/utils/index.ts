import { FilterProps, Meal } from "@/types";
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
    console.log(result);
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
