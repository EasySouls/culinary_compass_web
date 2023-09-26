"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import { useState } from "react";
import { RecipeProps } from "@/types";
import RecipeDetails from "./RecipeDetails";
import Link from "next/link";

const RecipeCard = ({ recipe }: RecipeProps) => {
  const { name, kitchenType, mealThumbnail } = recipe;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='m-4 flex flex-col w-[250px] h-[350px] border border-black rounded-xl shadow-sm'>
      <div className='w-full h-3/5 relative'>
        <Link href={`/recipes/${recipe.id}`}>
          <Image
            src={mealThumbnail}
            alt={name}
            // placeholder='blur'
            fill
            priority
            sizes='(min-width: 200px) 50vw, 100vw'
            className='object-cover rounded-t-xl'
          />
        </Link>
      </div>
      <div className='px-2 flex flex-col items-center justify-center w-full h-2/6'>
        <Link href={`/recipes/${recipe.id}`}>
          <h3 className='uppercase text-md text-center'>{name}</h3>
        </Link>
        <hr className='w-3/4 m-2 text-black border-black' />
        <span>{kitchenType}</span>
      </div>
      <div className='w-full mb-2 flex justify-center'>
        <CustomButton
          title='See more'
          handleClick={() => setIsOpen((isOpen) => !isOpen)}
          styles='w-2/3 p-1 mb-2 border bg-amber-500 rounded-xl transition-all duration-500  hover:text-white hover:border hover:border-black'
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
