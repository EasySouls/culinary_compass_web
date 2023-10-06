import RecipeResultsList from "@/components/RecipeResultsList/RecipeResultsList";
import _Searchbar from "@/components/_Searchbar/_Searchbar";
import searchbarBackgroundImage from "public/searchbarBackgroundImage.jpg";
import Image from "next/image";

const BaseRecipeSearchPage = () => {
  return (
    <>
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
    </>
  );
};

export default BaseRecipeSearchPage;
