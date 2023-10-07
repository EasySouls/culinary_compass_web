"use client";

import { Recipe } from "@/types";
import Image from "next/image";
import closeIcon from "public/close.svg";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface RecipeDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  recipe: Recipe;
}

const RecipeDetails = ({ isOpen, closeModal, recipe }: RecipeDetailsProps) => {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='relative w-full max-w-xl max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5'>
                  <button
                    type='button'
                    onClick={closeModal}
                    className='absolute top-2 right-2 z-10 w-fit p-2 bg-primary-amber-100 rounded-full'
                  >
                    <Image
                      src={closeIcon}
                      alt='close'
                      width={20}
                      height={20}
                      className='object-contain bg-white rounded-full'
                    />
                  </button>

                  <div className='flex-1 flex flex-col gap-3'>
                    <div className='relative w-full h-[20rem] bg-amber-300 bg-cover bg-center rounded-xl'>
                      <Image
                        src={recipe.mealThumbnail}
                        alt={recipe.name}
                        // placeholder='blur'
                        fill
                        priority
                        className='object-cover rounded-xl'
                      />
                    </div>
                  </div>

                  <div className='flex-1 flex flex-col gap-2 '>
                    <h2 className='font-semibold text-xl uppercase'>
                      {recipe.name}
                    </h2>
                    <div className='mt-3 flex flex-wrap gap-4'>
                      {/* The listed attributes of the recipe */}
                      <div className='flex justify-between gap-5 w-full text-right'>
                        <h4 className='text-grey capitalize'>Name</h4>
                        <p className='text-black-100 font-semibold'>
                          {recipe.name}
                        </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'>
                        <h4 className='text-grey capitalize'>Nationality</h4>
                        <p className='text-black-100 font-semibold capitalize'>
                          {recipe.kitchenType}
                        </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'>
                        <h4 className='text-grey capitalize'>Category</h4>
                        <p className='text-black-100 font-semibold capitalize'>
                          {recipe.meatType}
                        </p>
                      </div>
                      <div className='flex justify-between gap-5 w-full text-right'>
                        <h4 className='text-grey capitalize'>Tags</h4>
                        {recipe.tags?.map((tag, index) => (
                          <p
                            key={index}
                            className='text-black-100 font-semibold capitalize'
                          >
                            {tag}
                          </p>
                        ))}
                      </div>
                      {/* {Object.entries(recipe).map(([key, value]) => {
                        return value !== null && value !== "" && key ? (
                          <div
                            className='flex justify-between gap-5 w-full text-right'
                            key={key}
                          >
                            <h4 className='text-grey capitalize'>{key}</h4>
                            <p className='text-black-100 font-semibold'>
                              {value}
                            </p>
                          </div>
                        ) : null;
                      })} */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default RecipeDetails;
