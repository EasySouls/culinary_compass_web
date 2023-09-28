import Sidebar from "@/components/Sidebar/Sidebar";
import { getRecipeById, getRecipesByCategory } from "@/data/mongodb";
import { CategoryValue } from "@/types";
import Image from "next/image";

const RecipePage = async ({ params }: { params: { recipeId: string } }) => {
  const recipe = await getRecipeById(parseInt(params.recipeId));

  return (
    <div className='bg-indigo-400 flex'>
      <div className='w-3/4'>
        {recipe ? (
          <div className='flex flex-col bg-white border border-black items-center'>
            <h1>{recipe.name}</h1>
            <div className='relative'>
              <Image
                src={recipe.mealThumbnail}
                alt={`Image of ${recipe.name}`}
                priority
                width={400}
                height={300}
                className='rounded-md border border-black'
              />
            </div>
            <ul>
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>
                  <p>{instruction}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className=''>Error. Recipe not found!</div>
        )}
      </div>
      <div className='w-1/4 flex flex-col items-center'>
        <Sidebar category={recipe?.meatType as CategoryValue} />
      </div>
    </div>
  );
};

export default RecipePage;
