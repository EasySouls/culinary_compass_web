import RecipeResultsList from "@/components/RecipeResultsList/RecipeResultsList";
import searchbarBackgroundImage from "public/searchbarBackgroundImage.jpg";
import _Searchbar from "@/components/_Searchbar/_Searchbar";
import { Metadata } from "next";
import Image from "next/image";

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
      <RecipeResultsList />
    </>
  );
};

export default BaseRecipeSearchPage;
