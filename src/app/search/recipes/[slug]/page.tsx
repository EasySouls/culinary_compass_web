import RecipeResultsList from "@/components/RecipeResultsList/RecipeResultsList";
import _Searchbar from "@/components/_Searchbar/_Searchbar";
import searchbarBackgroundImage from "public/searchbarBackgroundImage.jpg";
import Image from "next/image";
import SearchFilters from "@/components/SearchFilters/SearchFilters";

type Params = {
  params: {
    slug: string;
  };
};

// export async function generateMetadata({ params }: Params) {
//   return { title: `List of results for ${params.slug}` };
// }

const RecipeSearchPage = ({ params }: Params) => {
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
        <div className='p-4'>
          <h2>Results for {params.slug}</h2>
          <div className='flex flex-row'>
            <RecipeResultsList />
            <SearchFilters />
          </div>
        </div>
      </>
    </>
  );
};

export default RecipeSearchPage;
