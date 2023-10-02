import Sidebar from "@/components/Sidebar/Sidebar";
import { getRecipeById } from "@/data/mongodb";
import { CategoryValue } from "@/types";
import Image from "next/image";

const RecipePage = async ({ params }: { params: { recipeId: string } }) => {
  const recipe = await getRecipeById(parseInt(params.recipeId));

  return (
    <div className='flex flex-col xl:flex-row w-screen'>
      <div className='xl:w-3/4'>
        {recipe ? (
          <div className='flex flex-col bg-white border border-black items-center py-4'>
            <h1 className='text-2xl mb-4'>{recipe.name}</h1>
            <div className='relative mb-4'>
              <Image
                src={recipe.mealThumbnail}
                alt={`Image of ${recipe.name}`}
                priority
                width={400}
                height={400}
                className='rounded-md border border-black'
              />
            </div>

            {/*TODO convert it into hours and minutes */}
            <div className='bg-gray-200 flex flex-row w-full py-4 justify-around'>
              <div className='w-full flex relative text-center flex-col vertical-line'>
                <span className='text-blue-500'>Preparation</span>
                <div>
                  <time>{recipe.timeNeeded.preparation}</time>
                  <span> minutes</span>
                </div>
              </div>
              <div className='w-full flex relative text-center flex-col vertical-line'>
                <span className='text-blue-500'>Cooking</span>
                <div>
                  <time>{recipe.timeNeeded.cooking}</time>
                  <span> minutes</span>
                </div>
              </div>
              <div className='w-full flex relative text-center flex-col'>
                <span className='text-blue-500'>Total Time</span>
                <div>
                  <time>
                    {recipe.timeNeeded.preparation + recipe.timeNeeded.cooking}
                  </time>
                  <span> minutes</span>
                </div>
              </div>
            </div>
            <hr className='w-4/5 my-6 border-gray-500' />
            <div className='pl-6 w-full'>
              <h4 className='text-xl font-semibold mb-2'>Ingredients</h4>
              <ul className='list-disc'>
                {recipe.ingredients.map((ing, index) => (
                  <li className='mx-4' key={index}>
                    <p>
                      {recipe.measures[index]} {ing}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <hr className='w-4/5 my-6 border-gray-500' />
            <div className='pl-6 w-full'>
              <h4 className='text-xl font-semibold mb-2'>Method</h4>
              <ol className='list-decimal'>
                {recipe.instructions.map((instruction, index) => (
                  <li className='mx-4' key={index}>
                    <p className='pt-2'>{instruction}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ) : (
          <div className=''>Error. Recipe not found!</div>
        )}
      </div>
      <div className='xl:w-1/4'>
        <Sidebar category={recipe?.meatType as CategoryValue} />
      </div>
    </div>
  );
};

export default RecipePage;
