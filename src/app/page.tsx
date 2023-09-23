import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/utils";
import { FilterProps } from "@/types";
import CustomFilter from "@/components/CustomFilter";
import { DATABASE_NAME, categories, kitchenTypes } from "@/constants";
import client, { getRecipeById, getRecipes } from "@/data/mongodb";

const Home = async ({ searchParams }: { searchParams: FilterProps }) => {
  const recipes = await getRecipes(
    searchParams.search,
    searchParams.kitchenType,
    "Chicken"
  );
  console.log("The retrieved recipes are:", recipes);

  const isDataEmpty = recipes === null || !recipes;

  return (
    <>
      <Hero />

      <div className='flex flex-col items-center'>
        <Searchbar />
        <div className='flex gap-4'>
          <div>
            <CustomFilter title='categories' options={categories} />
          </div>
          <div>
            <CustomFilter title='categories' options={categories} />
          </div>
        </div>
      </div>

      <div className='mt-12 p-8 w-full' id='discover'>
        <div className=''>
          <h1 className='text-[35px]'>Recipes</h1>
          <p className='text-xl font-light'>Discover the best dishes</p>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='flex flex-wrap'>
              {recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} />
              ))}
            </div>
          </section>
        ) : (
          <div className=''>
            <h2>Oops, no results</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
