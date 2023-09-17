import axios from "axios";

export async function fetchRecipes(query: string) {
  const options = {
    url: "https://www.themealdb.com/api/json/v1/1/search.php",
    params: {
      s: query,
    },
  };

  try {
    const response = await axios.get(options.url, { params: options.params });
    const result = await response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
