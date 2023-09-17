"use client";

import { SearchKitchenTypeProps } from "@/types";
import { Listbox, Transition } from "@headlessui/react";
import icon from "public/vercel.svg";
import { kitchenTypes } from "@/constants";
import Image from "next/image";
import { useState, Fragment } from "react";

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
        <div className='relative w-full'>
          <Listbox.Button className='absolute top-4'>
            <Image
              src={icon}
              width={50}
              height={50}
              className=''
              alt='Kitchen type icon'
            />
          </Listbox.Button>
        </div>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
          afterLeave={() => setQuery("")}
        >
          <Listbox.Options>
            {filteredKitchenTypes.map((item) => (
              <Listbox.Option
                key={item}
                className={({ active }) =>
                  `relative ${
                    active ? "bg-blue-700 text-white" : "text-gray-900"
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
                      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600'></span>
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
