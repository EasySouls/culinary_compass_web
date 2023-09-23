"use client";

import { Meal } from "@/types";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { RecipeProps } from "@/types";
import RecipeDetails from "./RecipeDetails";

const RecipeCard = ({ recipe }: RecipeProps) => {
  const { name, kitchenType, mealThumbnail } = recipe;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='m-4 flex flex-col w-[250px] h-[350px] border border-black rounded-xl shadow-sm'>
      <div className='w-full h-3/5 relative'>
        <Image
          src={mealThumbnail}
          alt={name}
          // placeholder='blur'
          fill
          priority
          sizes='(min-width: 200px) 50vw, 100vw'
          className='object-cover rounded-t-xl'
        />
      </div>
      <div className='p-2 flex flex-col items-center justify-center w-full'>
        <h3 className='uppercase text-md text-center'>{name}</h3>
        <hr className='w-3/4 m-2 text-black border-black' />
        <span>{kitchenType}</span>
      </div>
      <div className='w-full flex justify-center'>
        <CustomButton
          title='See more'
          handleClick={() => setIsOpen((isOpen) => !isOpen)}
          styles='w-2/3 p-1 border bg-amber-500 rounded-xl transition-all duration-500  hover:text-white hover:border hover:border-black'
        />
      </div>

      {isOpen && (
        <RecipeDetails
          isOpen={isOpen}
          closeModal={() => setIsOpen(false)}
          recipe={recipe}
        />
      )}
    </div>
  );
};

export default RecipeCard;
