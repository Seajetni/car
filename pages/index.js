import { useState } from "react"; // Import useState if it's not already imported
import {
  Carousel,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Layout from "@/components/Layout";
import Image from "next/image";
export default function Home() {
  const slider = [
    {
      img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
  ];

  const card = [
    {
      name: "รถใหม่ (มือ1)",
      price: "39000",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
    },
    {
      name: "รถมือสอง",
      price: "39000",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
    },
    {
      name: "ขายรถ",
      price: "39000",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
    },
  ];

  return (
    <Layout>
      <Carousel
        className="rounded-xl"
        loop
        autoplay
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {slider.map((item, index) => (
          <div key={index}>
            <Image
              width={`${1000000}`}
              height={100}
              src={item.img}
              className="w-full  h-96 object-cover"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Carousel>
      <div className=" flex justify-center  ">
        <div className=" grid grid-cols-1  lg:grid-cols-3">
          {card.map((item, index) => (
            <div key={index}>
              <Card className="w-96 my-10 sm:mx-10">
                <CardHeader shadow={false} floated={false} className="h-96">
                  <img
                    src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="card-image"
                    className="h-full w-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <div className="mb-2 flex items-center justify-between">
                    <Typography color="blue-gray" className="font-medium">
                      {item.name}
                    </Typography>
                    <Typography color="blue-gray" className="font-medium">
                      {item.price}฿
                    </Typography>
                  </div>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal opacity-75"
                  ></Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button
                    ripple={false}
                    fullWidth={true}
                    className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
