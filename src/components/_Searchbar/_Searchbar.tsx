import { updateQuery } from "@/lib/actions";

const _Searchbar = () => {
  return (
    <form action={updateQuery} className='flex gap-4'>
      <input
        type='search'
        name='query'
        className='text-lg p-3 min-w-[20rem] rounded-lg flex-grow z-10'
        placeholder='Type your search here'
        autoFocus
      />

      <button
        type='submit'
        className='p-3 text-lg rounded-lg text-white bg-blue-600 border-solid border-black transition-all duration-200 hover:cursor-pointer hover:border-blue-600 hover:text-blue-600 hover:bg-white z-10'
      >
        Search
      </button>
    </form>
  );
};

export default _Searchbar;
