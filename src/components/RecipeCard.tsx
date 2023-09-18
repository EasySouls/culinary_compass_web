"use client";

import { Meal } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";

interface RecipeCardProps {
  recipe: Meal;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const { strMeal, strArea, strMealThumb } = recipe;

  return (
    <div className='m-4 flex flex-col w-[200px] h-[300px] border border-black rounded-xl'>
      <div className='w-full h-3/5 relative'>
        <Image
          src={strMealThumb}
          alt={strMeal}
          // placeholder='blur'
          fill
          priority
          sizes='(min-width: 200px) 50vw, 100vw'
          className='object-cover rounded-t-xl'
        />
      </div>
      <div className='p-2 flex flex-col items-center justify-center w-full h-2/5'>
        <h3 className='uppercase text-md text-center'>{strMeal}</h3>
        <hr className='w-3/4 m-2 text-black border-black' />
        <span>{strArea}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
