import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import RecipeCard from "@/components/RecipeCard";
import { fetchRecipes } from "@/utils";

const Home = async () => {
  const recipes = await fetchRecipes("Chicken");
  console.log(recipes);

  const isDataEmpty = recipes === null || recipes.length < 1 || !recipes;

  return (
    <>
      <Hero />
      <Searchbar />
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
