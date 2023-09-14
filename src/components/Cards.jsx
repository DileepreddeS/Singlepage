"use client";
import { Card, Grid, Button, Row } from "@nextui-org/react";
import Image from "next/image";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { FaDollarSign, FaStar, FaFlag } from "react-icons/fa";
import { FiFile } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function App({ data }) {
  
  return (
    <div>
      <Grid.Container className="flex mt-20 pt-20">
        <Grid.Container gap={2} sm={8} className="mt-10 pt-10">
          <Grid xs={12} sm={6} className="mt-10 pt-10">
            <Card className="mt-10 pt-10 transition duration-300 ease-in-out transform hover:scale-105 group rounded-full w-1/2 p-4">
              <Card.Body>
                <div className="flex items-center mb-4 ">
                  <div className="mr-2 w-12 h-12 bg-cyan-600 rounded-lg">
                    <FaDollarSign className="text-4xl text-white w-12 h-12 rounded-lg" />
                  </div>
                  <h3>Stock Price</h3>
                </div>
                <h4 className="flex">{data?.stockprice||0}</h4>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card className="transition duration-300 ease-in-out transform hover:scale-105 group rounded-full w-1/2 p-4">
              <Card.Body>
                <div className="flex items-center mb-4">
                  <div className="mr-2 w-12 h-12 bg-green-600 rounded-lg items-center flex ">
                    <FaFlag className="text-4xl text-white w-10 h-10 rounded-lg" />
                  </div>
                  <h3>Market Cap</h3>
                </div>
                <h4>{data?.marketcap||0}</h4>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card className="transition duration-300 ease-in-out transform hover:scale-105 group rounded-full w-1/2 p-4">
              <Card.Body>
                <div className="flex items-center mb-4">
                  <div className="mr-2 w-10 h-10 bg-yellow-400 rounded-lg flex items-center">
                    <FiFile className="text-gray-600 w-10 h-10 rounded-lg" />
                  </div>
                  <h3>52 Week High</h3>
                </div>
                <h3>{data?.fifty_two_high||0}</h3>
              </Card.Body>
            </Card>
          </Grid>
          <Grid xs={12} sm={6}>
            <Card className="transition duration-300 ease-in-out transform hover:scale-105 group rounded-full w-1/2 p-4">
              <Card.Body>
                <div className="flex items-center mb-4">
                  <div className="mr-2 w-12 h-12 bg-red-600 rounded-lg flex items-center">
                    <FaStar className="text-4xl text-white w-8 h-8 flex justify-items-center rounded-lg" />
                  </div>
                  <h4>52 Week Low</h4>
                </div>
                <h4>{data?.fifty_two_low||0}</h4>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
       {data?.video_url&& <Grid xs={12} sm={4} className="mt-10 pt-10">
          <iframe
            src={data?.video_url}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share  "
            allowFullScreen
            className="w-full aspect-video p-6"
          ></iframe>
        </Grid>}
      </Grid.Container>
      {/* Container */}
      <div className="flex items-center justify-center my-0 mb-32 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-amber-200 rounded-lg shadow-lg max-w-3xl w-full mx-auto p-6 sm:p-10">
          <h3 className="text-xl font-bold mb-4">Summary</h3>
          <Carousel showArrows={true}></Carousel>

          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={data?.summary?.length || 0}
          >
        <div className="flex flex-col style={{ maxHeight: '400px' }}"> 
        <div className=" overflow-y-auto">             
        <Slider>
              {data?.summary?.map((singleData, index) => (
                <Slide key={index} index={index}>
                  <>
                    <h3
                      key={index+"head"}
                      dangerouslySetInnerHTML={{
                        __html: Object.keys(singleData)[0],
                      }}
                    ></h3>
                    <div
                      key={index}
                      dangerouslySetInnerHTML={{
                        __html: Object.values(singleData)[0],
                      }}
                    ></div>
                  </>
                </Slide>
              ))}
            </Slider>
            </div>
            <div className="flex justify-between">
              <ButtonBack>Back</ButtonBack>
              <ButtonNext>Next</ButtonNext>
            </div>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
