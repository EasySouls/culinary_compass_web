"use client";

import { Listbox, Transition } from "@headlessui/react";
import icon from "public/vercel.svg";
import { kitchenTypes } from "@/constants";
import Image from "next/image";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState, Fragment } from "react";

interface SearchKitchenTypeProps {
  kitchenType: String;
  setKitchenType: (kitchenType: string) => void;
}

const SearchKitchenType = ({
  kitchenType,
  setKitchenType,
}: SearchKitchenTypeProps) => {
  const [query, setQuery] = useState("");

  const filteredKitchenTypes =
    query === ""
      ? kitchenTypes
      : kitchenTypes.filter((item) => {
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""));
        });

  return (
    <div className='top-16 w-40 h-full border border-blue-700 rounded-r-full'>
      <Listbox value={kitchenType} onChange={setKitchenType}>
        <div className='relative h-full'>
          <Listbox.Button className='relative w-full h-full text-left py-2 pl-3 pr-10 shadow-md rounded-r-full'>
            <span className='block truncate'>{kitchenType}</span>
            <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
              <ChevronUpDownIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='false'
              />
            </span>
            {/* <Image
              src={icon}
              width={50}
              height={50}
              className='h-full'
              alt='Kitchen type icon'
            /> */}
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery("")}
        >
          <Listbox.Options className='absolute mt-1 w-40 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {filteredKitchenTypes.map((item) => (
              <Listbox.Option
                key={item}
                className={({ active }) =>
                  `relative select-none py-2 pl-10 pr-4 ${
                    active ? "bg-amber-200 text-amber-900" : "text-gray-900"
                  }`
                }
                value={item}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {item}
                    </span>
                    {selected ? (
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'>
                        <CheckIcon className='h-5 w-5' aria-hidden='true' />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default SearchKitchenType;
