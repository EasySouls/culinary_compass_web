import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className='text-2xl'>Culinary Compass</h1>
        <Link className='border border-slate-300' href='/recipes'>
          Recipes
        </Link>
      </header>
    </>
  );
}
