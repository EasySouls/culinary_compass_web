import RecipeResultsList from "@/components/RecipeResultsList/RecipeResultsList";
import searchbarBackgroundImage from "public/searchbarBackgroundImage.jpg";
import _Searchbar from "@/components/_Searchbar/_Searchbar";
import { Metadata } from "next";
import Image from "next/image";
import SearchFilters from "@/components/SearchFilters/SearchFilters";

export const metadata: Metadata = {
  title: "List of results | Culinary Compass",
  openGraph: {
    title: "List of results | Culinary Compass",
    description: "The list of the search results",
  },
};

const BaseRecipeSearchPage = () => {
  return (
    <>
      <div className='relative h-32 flex justify-center items-center'>
        <Image
          alt='Background image'
          src={searchbarBackgroundImage}
          placeholder='blur'
          fill
          sizes='100vw'
          className='object-cover'
        />
        <_Searchbar />
      </div>
      <div className='p-4'>
        <h2>All recipes</h2>
        <div className='flex flex-row'>
          <RecipeResultsList />
          <SearchFilters />
        </div>
      </div>
    </>
  );
};

export default BaseRecipeSearchPage;
