"use client"
import React, { useState, useEffect } from "react";
import DataFetching from "@/components/Data";
import Navbar from "@/components/Navbar";
import { useRouter } from "next/router"; 
import { getAllTickers, getProductWithMarket } from "@/services/index";
import App from "@/components/Cards";
import { useParams } from "next/navigation";

const DataPage = () => {
  const { tag }= useParams()
  const [data, setData]= useState("");

  useEffect(() => {
    if (tag) {
      getProductWithMarket(tag)
        .then((responseData)=>{
          setData(responseData);
        })
        .catch((error)=>{
          console.error("Error fetching data:", error);
        });
    }
  }, [tag]);

  return (
    <>
      <DataFetching tag={tag} />
    </>
  );
};

export default DataPage;