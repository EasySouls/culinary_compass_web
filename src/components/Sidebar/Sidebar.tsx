import { getRecipesByCategory } from "@/data/mongodb";
import { CategoryValue } from "@/types";
import RecipeCard from "../RecipeCard";

//TODO Show recommended recipes based on the current recipe, probably based on the category
const Sidebar = async ({ category }: { category: CategoryValue }) => {
  const recommendedRecipes = await getRecipesByCategory(category);

  return (
    <div className='flex flex-col justify-center bg-blue-300 w-full'>
      <h3 className='text-lg'>Recommended recipes</h3>
      {recommendedRecipes?.map((recipe) => {
        recipe._id = recipe._id.toString();
        return <RecipeCard recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

export default Sidebar;
