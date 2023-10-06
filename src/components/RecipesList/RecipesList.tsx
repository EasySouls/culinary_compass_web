import { getRecipes } from "@/data/mongodb";
import { FilterProps } from "@/types";
import RecipeCard from "../RecipeCard";
import ShowMore from "../ShowMore";

const RecipesList = async ({
  searchParams,
}: {
  searchParams: FilterProps | undefined;
}) => {
  const recipes = await getRecipes(
    searchParams?.limit || 10,
    searchParams?.search,
    searchParams?.kitchenType,
    searchParams?.categories
  );

  const isDataEmpty = recipes === null || !recipes;

  return (
    <>
      {!isDataEmpty ? (
        <section>
          <div className='flex flex-wrap'>
            {recipes.map((recipe, index) => {
              recipe._id = recipe._id.toString();
              return <RecipeCard key={index} recipe={recipe} />;
            })}
          </div>

          <ShowMore
            pageNumber={(searchParams?.limit || 10) / 10}
            isNext={(searchParams?.limit || 10) > recipes.length}
          />
        </section>
      ) : (
        <div className=''>
          <h2>Oops, no results</h2>
        </div>
      )}
    </>
  );
};

export default RecipesList;
