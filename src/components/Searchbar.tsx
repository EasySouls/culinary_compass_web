"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchKitchenType from "./SearchKitchenType";
import client from "@/data/mongodb";
import { DATABASE_NAME } from "@/constants";
import { fetchRecipeById, convertToRecipe } from "@/utils";

const Searchbar = () => {
  const [kitchenType, setKitchenType] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchQuery === "") {
      return alert("Please fill in the search bar");
    }

    updateSearchParams(searchQuery.toLowerCase(), kitchenType);
  };

  const updateSearchParams = (searchParam: string, kitchenType: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (searchParam) {
      searchParams.set("search", searchParam);
    } else {
      searchParams.delete("search");
    }

    if (kitchenType) {
      searchParams.set("kitchenType", kitchenType);
    } else {
      searchParams.delete("kitchenType");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname, {
      scroll: false,
    });
  };

  return (
    <form onSubmit={handleSearch} className='w-full flex justify-center my-8'>
      <input
        type='text'
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
        className='w-2/3 bg-white rounded-s-full p-3 border border-blue-700 mr-1 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
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
