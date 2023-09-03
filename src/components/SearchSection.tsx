"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SearchSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();

    //Todo Implement search logic
  };

  return (
    <form onSubmit={onSearch} className='w-full flex justify-center my-8'>
      <input
        type='text'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className='w-2/3 bg-gray-100 rounded-full p-3'
        placeholder='Search for recipes'
      />
    </form>
  );
};

export default SearchSection;
