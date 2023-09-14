"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Cards";
import App from "./Cards";
import { getAllTickers, getProductWithMarket } from "@/services";
const DataFetching = ({tag=''}) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (tag) => {
    // if(!tag)return 
    const data = await getProductWithMarket(`${tag}`);
    if (data) {
      setData(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(tag);
  }, [tag]);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <App data={data} />;
};

export default DataFetching;
