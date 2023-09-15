import Hero from "@/components/Hero";
import Searchbar from "@/components/Searchbar";
import Link from "next/link";

const Home = async () => {
  return (
    <>
      <Hero />
      <Searchbar />
      <div className='mt-12 p-8 w-full' id='discover'>
        <div className=''>
          <h1 className='text-[35px]'>Recipes</h1>
          <p className='text-xl font-light'>Discover the best dishes</p>
        </div>
      </div>
    </>
  );
};

export default Home;
