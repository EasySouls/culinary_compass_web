"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchKitchenType from "./SearchKitchenType";

const Searchbar = () => {
  const [kitchenType, setKitchenType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();

    //Todo Implement search logic
  };

  return (
    <form onSubmit={handleSearch} className='w-full flex justify-center my-8'>
      <input
        type='text'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className='w-2/3 bg-gray-100 rounded-s-full p-3 border border-blue-700 mr-1'
        placeholder='Search for recipes'
      />
      <div className=''>
        <SearchKitchenType
          kitchenType={kitchenType}
          setKitchenType={setKitchenType}
        />
      </div>
    </form>
  );
};

export default Searchbar;
