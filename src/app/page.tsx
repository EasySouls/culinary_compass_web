import Hero from "@/components/Hero/Hero";
import Searchbar from "@/components/Searchbar";
import { FilterProps } from "@/types";
import CustomFilter from "@/components/CustomFilter";
import { DATABASE_NAME, categories } from "@/constants";
import RecipesList from "@/components/RecipesList/RecipesList";
import { Suspense } from "react";

const Home = async ({
  searchParams,
}: {
  searchParams: FilterProps | undefined;
}) => {
  return (
    <>
      <Hero />

      <div className='flex flex-col items-center'>
        <Searchbar />
        <div className='flex gap-4'>
          <div>
            <CustomFilter title='categories' options={categories} />
          </div>
        </div>
      </div>

      <div className='mt-12 p-8 w-full bg-slate-200' id='discover'>
        <div className=''>
          <h1 className='text-[35px]'>Recipes</h1>
          <p className='text-xl font-light'>Discover the best dishes</p>
        </div>
        <Suspense fallback={<div>Loading</div>}>
          <RecipesList searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  );
};

export default Home;
