import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import RecipeCard from "@/components/RecipeCard";
import { FilterProps } from "@/types";
import CustomFilter from "@/components/CustomFilter";
import { categories } from "@/constants";
import { getRecipes } from "@/data/mongodb";
import ShowMore from "@/components/ShowMore";

const Home = async ({ searchParams }: { searchParams: FilterProps }) => {
  const recipes = await getRecipes(
    searchParams.limit || 10,
    searchParams.search,
    searchParams.kitchenType,
    searchParams.categories
  );

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
          <div></div>
        </div>
      </div>

      <div className='mt-12 p-8 w-full bg-lime-200' id='discover'>
        <div className=''>
          <h1 className='text-[35px]'>Recipes</h1>
          <p className='text-xl font-light'>Discover the best dishes</p>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='flex flex-wrap'>
              {recipes.map((recipe, index) => {
                return <RecipeCard key={index} recipe={recipe} />;
              })}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > recipes.length}
            />
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
