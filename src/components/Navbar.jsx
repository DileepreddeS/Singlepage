/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
const DynamicDownshift = dynamic(() => import('downshift'), {
  ssr: false
});
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import dynamic from "next/dynamic";

function Navbar() {
  const router = useRouter();
  const [searchResults, setSearchResults] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [debouncedInputValue] = useDebounce(inputValue, 300);

  const fetchSearchResults = (query) => {
    if (!query && query.length < 3) return;
    axios
      .get(
        `https://api.stockjabber.com:8443/dev_temp/sj/getProductWithMarket/getAllTickers/${query}`
      )
      .then((response) => {
        // console.log("searchResults==>", response);

        setSearchResults(response?.data?.result);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  };

  useEffect(() => {
    fetchSearchResults(debouncedInputValue);
  }, [debouncedInputValue]);

  useEffect(() => {
    // console.log("searchResults==>", searchResults);
  });

  return (
    <div className="h-16 pr-4 grid grid-cols-2 bg-amber-400">
      <div className="flex justify-start ml-4 items-center ">
        <img
          src="https://stockjabber.com/images/JS2-02.png"
          className="h-8 mr-4"
          alt="stockjabber Logo"
        />
        <div>
          <a className="font-semibold text-xl" href="www.stockjabber.com">Stock jabber</a>
        </div>
      </div>
      <div className='flex justify-end items-center'>
      <DynamicDownshift
        onChange={(selectedItem) => {
          setInputValue(selectedItem.tag);
        }}
        itemToString={(item) => (item ? item.tag : "")}
        onSelect={(item) => {
          router.push("/" +item?.ticker);
        }}
      >
        {({
          getInputProps,
          getItemProps,
          getMenuProps,
          isOpen,
          highlightedIndex,
        }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search...",
                onChange: (event) => {
                  setInputValue(event.target.value.toUpperCase());
                },
              })}
            />
            <ul
              {...getMenuProps()}
              className="absolute mt-2 w-fit bg-white rounded justify-items-end z-10 max-h-40 overflow-y-auto shadow-lg"
            >
              {searchResults?.map((item, index) => (
                <li
                  onClick={() => {
                    router.push("/" +item?.ticker);
                  }}
                  key={index}
                  {...getItemProps({
                    key: index,
                    index,
                    item,
                    className: `py-4 px-3 shadow-sm  flex-col  ${
                      highlightedIndex === index ? "bg-orange-300" : "bg-white"
                    }`,
                  })}
                >
                  {item?.tag}-{item?.ticker}
                </li>
              ))}
            </ul>
          </div>
        )}
      </DynamicDownshift>
      </div>
    </div>
  );
}

export default Navbar;
