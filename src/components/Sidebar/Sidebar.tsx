import { getRecipesByCategory } from "@/data/mongodb";
import { CategoryValue } from "@/types";
import RecipeCard from "../RecipeCard";

const Sidebar = async ({ category }: { category: CategoryValue }) => {
  const recommendedRecipes = await getRecipesByCategory(category);

  return (
    <div className='flex flex-col'>
      <h3 className='text-lg pt-4 pl-4 xl:text-center'>Recommended recipes</h3>
      <div className='flex flex-row xl:flex-col justify-center items-center'>
        {recommendedRecipes?.map((recipe) => {
          recipe._id = recipe._id.toString();
          return <RecipeCard recipe={recipe} key={recipe.id} />;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
