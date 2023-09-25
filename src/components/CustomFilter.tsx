"use client";

import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";
import { CustomFilterProps } from "@/types";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { updateSearchParams } from "@/utils";

const CustomFilter = ({ title, options }: CustomFilterProps) => {
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleUpdateParams = (e: { title: string; value: string }) => {
    const newPathname = updateSearchParams(title, e.value);
    router.push(newPathname);
  };

  return (
    <div className='w-fit border rounded-md shadow-sm'>
      <Listbox
        value={selectedOption}
        onChange={(e) => {
          setSelectedOption(e);
          handleUpdateParams(e);
        }}
      >
        <div className='relative w-fit z-10'>
          <Listbox.Button className='relative w-full h-full text-left py-2 pl-3 pr-10 shadow-md rounded-r-full'>
            <span className='block truncate'>{selectedOption.title}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='false'
              />
            </span>
          </Listbox.Button>

          <Transition
            as={Fragment}
            leave='transition easi-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Listbox.Options className='absolute w-full mt-1 bg-white overflow-y-auto text-base rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
              {options.map((option) => (
                <Listbox.Option
                  key={option.title}
                  value={option}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-amber-500 text-white" : "text-gray-900"
                    }`
                  }
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilter;
