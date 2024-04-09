import { useEffect, useState } from "react"; // Import useState if it's not already imported
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
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [startIndex, setStartIndex] = useState(0);
  const [brand, setBrand] = useState([]);
  const [data, setData] = useState(null);
  const handleForward = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 4));
  };

  const handleRewind = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 4, 0));
  };

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
      img: "https://images.unsplash.com/photo-1537984822441-cff330075342?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
      ref: "/products",
    },
    {
      name: "รถมือสอง",
      img: "https://images.unsplash.com/photo-1511125357779-27038c647d9d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
      ref: "/products",
    },
    {
      name: "ขายรถ",
      img: "https://plus.unsplash.com/premium_photo-1663047616905-5bdff3c06010?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGNhcnxlbnwwfHwwfHx8MA%3D%3D",
      details: `With plenty of talk and listen time, voice-activated Siri access, and
      an available wireless charging case`,
      ref: "/contect",
    },
  ];

  const getData = async () => {
    const res = await axios.get("/api/data");
    setData(res.data);
  };

  useEffect(() => {
    const data = getData();
    setData(data);
  }, []);

  const getBrand = () => {
    if (data !== null) {
      let uniqueEnergy = new Set();

      data.forEach((car) => {
        uniqueEnergy.add(car.brand);
      });

      return uniqueEnergy;
    }
  };

  useEffect(() => {
    if (data !== null) {
      const updatedUniqueEnergy = getBrand();
      setBrand(Array.from(updatedUniqueEnergy));
    }
  }, []);

  return (
    <Layout>
      {/* slide........................................................................................r */}
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

      {/* Colloctione........................................................................................r */}
      <div className=" flex justify-center">
        <div className=" grid  grid-cols-1 lg:grid-cols-3">
          {card.map((item, index) => (
            <Link
              key={index}
              href={item.ref}
              className="group relative block bg-black mx-20 my-10"
            >
              <Image
                width={`${10000}`}
                height={100}
                alt=""
                src={item.img}
                className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
              />

              <div className="relative p-4 sm:p-6 lg:p-8">
                <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
                  ประเภทหมวดสินค้า
                </p>

                <p className="text-xl font-bold text-white sm:text-2xl">
                  {item.name}
                </p>

                <div className="mt-32 sm:mt-48 lg:mt-64">
                  <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm text-white">{item.details}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Product........................................................................................r */}
      <div className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1608823240964-d7f1d8e2ac85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxjYXJ8ZW58MHx8MHx8fDA%3D)] bg-cover  bg-no-repeat">
        <div className="bg-black/25 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="text-center sm:text-left ">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
              เลือกรถของคุณวันนี้
            </h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Inventore officia corporis quasi doloribus iure architecto quae
              voluptatum beatae excepturi dolores.
            </p>

            <div className="mt-4 sm:mt-8">
              <Link
                href="#"
                className="inline-block rounded-full bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Get Yours Today
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Product Collection Components ............................................................................*/}
      <div>
        {/* รถมือติดฟีด .......................................................................................................*/}
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
            <div>
              <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                รถเนะนำสำหรับคุณ
              </h2>

              <p className="mt-4 max-w-md text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
                praesentium cumque iure dicta incidunt est ipsam, officia dolor
                fugit natus?
              </p>
            </div>

            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {data && data.length > 0
                ? data.slice(startIndex, startIndex + 4).map(({ infos }) =>
                    infos.map(({ name, gallery, price, id }) => (
                      <li key={id}>
                        <Link
                          href={`/product/${id}`}
                          className="group block overflow-hidden"
                        >
                          <div className="relative h-[350px] sm:h-[450px]">
                            <Image
                              width={1000000}
                              height={100}
                              src={gallery[0].img}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                            />
                            <Image
                              width={1000000}
                              height={100}
                              src={gallery[1].img}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                            />
                          </div>

                          <div className="relative bg-white pt-3">
                            <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4">
                              {name}
                            </h3>
                            <p className="mt-1.5 tracking-wide text-gray-900">
                              ${price}
                            </p>
                          </div>
                        </Link>
                      </li>
                    ))
                  )
                : null}
            </ul>

            <div className=" flex justify-end">
              {data && (
                <div className="inline-flex items-center justify-center gap-3">
                  <Button
                    variant="outlined"
                    onClick={handleRewind}
                    disabled={Math.ceil(startIndex / 3) + 1 === 1}
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>

                  <p className="text-xs text-gray-900">
                    {Math.ceil(startIndex / 4) + 1}
                    <span className="mx-0.25">/</span>
                    {Math.ceil(data.length / 4)}
                  </p>

                  <Button
                    variant="outlined"
                    disabled={
                      Math.ceil(startIndex / 4) + 1 ===
                      Math.ceil(data.length / 4)
                    }
                    onClick={handleForward}
                  >
                    <span className="sr-only">Next Page</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* รถมือ 1 .............................................................................................................................*/}
        <div>
          <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                  <div className="mx-auto max-w-md text-center lg:text-left">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        รถใหม่มือ 1
                      </h2>

                      <p className="mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quas rerum quam amet provident nulla error!
                      </p>
                    </div>

                    <Link
                      href={`/products`}
                      className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                    >
                      สินค้ามือ 1 ทั้งหมด
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:py-8">
                  <ul className="grid grid-cols-2 gap-4">
                    {data && data.length > 0
                      ? data.slice(0, 2).map(({ infos }, index) =>
                          infos
                            .filter((item) => item.usecase === "มือ 1")
                            .map(({ name, price, gallery, id }, index) => (
                              <li key={index}>
                                <Link
                                  href={`/product/${id}`}
                                  className="group block"
                                >
                                  <div className="relative">
                                    <Image
                                      width={1000} // Adjusted width value
                                      height={100}
                                      src={gallery[0].img}
                                      alt=""
                                      className="aspect-square w-full rounded object-cover group-hover:opacity-0"
                                    />
                                    <Image
                                      width={1000} // Adjusted width value
                                      height={100}
                                      src={gallery[1].img}
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                      {name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                      ฿{price}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))
                        )
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* รถมือ 2 .............................................................................................................................*/}
        <div>
          <div>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
                <div className="grid place-content-center rounded bg-gray-100 p-6 sm:p-8">
                  <div className="mx-auto max-w-md text-center lg:text-left">
                    <div>
                      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
                        รถใหม่มือ 2
                      </h2>

                      <p className="mt-4 text-gray-500">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Quas rerum quam amet provident nulla error!
                      </p>
                    </div>

                    <Link
                      href={`/products`}
                      className="mt-8 inline-block rounded border border-gray-900 bg-gray-900 px-12 py-3 text-sm font-medium text-white transition hover:shadow focus:outline-none focus:ring"
                    >
                      สินค้ามือ 2 ทั้งหมด
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-2 lg:py-8">
                  <ul className="grid grid-cols-2 gap-4">
                    {data && data.length > 0
                      ? data.slice(0, 7).map(({ infos }, index) =>
                          infos
                            .filter((item) => item.usecase === "มือ 2")
                            .map(({ name, price, gallery, id }, index) => (
                              <li key={index}>
                                <Link
                                  href={`/product/${id}`}
                                  className="group block"
                                >
                                  <div className="relative">
                                    <Image
                                      width={1000} // Adjusted width value
                                      height={100}
                                      src={gallery[0].img}
                                      alt=""
                                      className="aspect-square w-full rounded object-cover group-hover:opacity-0"
                                    />
                                    <Image
                                      width={1000} // Adjusted width value
                                      height={100}
                                      src={gallery[1].img}
                                      alt=""
                                      className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                                    />
                                  </div>
                                  <div className="mt-3">
                                    <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                                      {name}
                                    </h3>
                                    <p className="mt-1 text-sm text-gray-700">
                                      ฿{price}
                                    </p>
                                  </div>
                                </Link>
                              </li>
                            ))
                        )
                      : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ค้นหารถจาก brand........................................................................................................................................................ */}
        <div>
          <div className=" flex justify-center">
            <h1 className="text-3xl">ค้นหารถจาก brand</h1>
          </div>
          <div className=" flex justify-center my-10">
            <ul className="grid grid-cols-2  lg:grid-cols-5">
              {data &&
                data.length > 0 &&
                data.map(({ label }, index) => (
                  <li key={index} className=" mx-4 lg:mx-10 text-center my-5">
                    <Link
                      href={"/products"}
                      key={index}
                      className="    hover:bg-[#fb7185] hover:text-white flex flex-col justify-center items-center border border-gray-500 py-10 px-10 lg:px-20"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className=" h-12 w-12 "
                        viewBox="0 0 512 512"
                        id="car"
                      >
                        <path d="M508.8 390.9c-.6 4.1-1.6 8.1-3.1 11.2-2.7 5.5-5.3 6-15.5 5.5-13.2-.6-32.1 0-52.1.8 0 5.5.2 8.1.2 8.1 1.3 15.1 8.1 15.6 10.8 15.6h43c3.8 0 7.3 0 10-1.8 3.5-2.3 5-9 6.3-20.7.2-1.7.3-3.9.4-6.5v-.1c0-.8.1-1.8.1-2.9V399c0-2.7 0-5.7-.1-8.1zM3 390.9c.6 4.1 1.6 8.1 3.1 11.2 2.7 5.5 5.3 6 15.5 5.5 13.2-.6 32.1 0 52.1.8 0 5.5-.2 8.1-.2 8.1-1.3 15.1-8.1 15.6-10.8 15.6h-43c-3.8 0-7 0-10-1.8-3.6-2.1-5-9-6.3-20.7-.2-1.7-.3-3.9-.4-6.5v-.1c0-.8-.1-1.8-.1-2.9V399c.1-2.7.1-5.7.1-8.1z"></path>
                        <path d="M512 296.6c0-30.7-4-60.7-5.6-64-1.2-2.4-8.9-8.7-26.4-20.6-17.7-12.1-17.3-10.3-20.5-18.2 2.9-.9 5.7-2.6 7.4-2.8 3.8-.4 4 3.2 11.9 3.2s25-2.1 28.5-5.6c3.5-3.5 4.6-4.7 4.6-7.8s-1.8-9.5-5.2-13.3-17.9-5.7-26.4-6.8-9.7 0-11.9 1.4c-3.5 2.2-3.7 22.3-3.7 22.3l-8.3.2c-5.4-13.3-12.9-40.1-24.6-61.2-12.8-23-26.2-30.2-31.8-32-5.5-1.7-10.5-2.9-48-6.7-38.3-4-68.8-4.5-96-4.5s-57.7.6-96 4.5c-37.5 3.9-42.5 5-48 6.7-5.5 1.7-19 9-31.8 32-11.7 21.1-19.2 47.9-24.6 61.2l-8.3-.2s-.1-20.1-3.7-22.3c-2.2-1.4-3.4-2.6-11.9-1.4s-23 3-26.4 6.8S.1 177.7.1 180.8s1.1 4.4 4.6 7.8c3.5 3.5 20.6 5.6 28.5 5.6s8.1-3.6 11.9-3.2c1.7.2 4.6 1.9 7.4 2.8-3.3 7.9-2.8 6.1-20.5 18.2-17.5 12-25.3 18.2-26.4 20.6-1.6 3.3-5.6 33.3-5.6 64s2.2 58.3 2.2 68.1c0 4.1 0 11.3.9 18.2.6 4.1 1.5 8.1 3.1 11.2 2.7 5.5 5.2 6 15.5 5.5 13.2-.6 32.3 0 52 .8 13.2.5 26.7 1 38.7 1.3 30 .6 21.2-4.4 34-4.2 12.8.2 63.3 2.3 109.5 2.3s96.8-2.1 109.5-2.3c12.8-.2 4 4.8 34 4.2 12-.2 25.5-.8 38.7-1.3 19.7-.7 38.9-1.4 52-.8 10.3.5 12.8 0 15.5-5.5 1.5-3.1 2.5-7.1 3.1-11.2 1-6.9.9-14.1.9-18.2.2-9.7 2.4-37.4 2.4-68.1zM86.2 145.2c4.8-11.2 19.2-33.7 26.2-37.7 1.7-1 16.6-5.7 53.9-8.2 34.3-2.3 72.2-3.2 89.8-3.2s55.5.9 89.8 3.2c37.2 2.5 52.3 7.1 53.9 8.2 9 6.2 21.4 26.5 26.2 37.7 4.8 11.2 11.2 33.2 10 36.2-1.2 3 1.2 4.5-15 3.2-16.1-1.2-117.2-2.5-164.8-2.5-47.5 0-148.6 1.3-164.8 2.5-16.2 1.2-13.8-.2-15-3.2-1.4-3 5-24.9 9.8-36.2zM123 270.4c-7.2 1.8-11.5 5.7-20.5 5.6-9 0-33.3-4.1-38.5-4.3-5.2-.2-9.8 3.5-12.5 4.2s-8-1.2-16-3.7-12.7-1.8-15.3-12.7c-2.7-10.8 0-26.3 0-26.3 17.3-.8 34 .8 65.3 9.6 31.3 8.8 48.7 25.7 48.7 25.7s-4 .1-11.2 1.9zm235.2 78.8c-14.3 1.9-74.2 2.4-102.2 2.4s-87.9-.6-102.2-2.4c-14.6-1.9-33.6-19.4-20.5-33.3 17.7-18.9 14.4-18.3 54.6-23.5 34.8-4.5 61.2-4.7 68.1-4.7 6.8 0 33.3.3 68.1 4.7 40.2 5.2 36.9 4.6 54.6 23.5 13.1 13.9-5.9 31.4-20.5 33.3zm133.6-89.6c-2.7 10.8-7.3 10.2-15.3 12.7s-13.3 4.3-16 3.7-7.3-4.3-12.5-4.2c-5.2.2-29.5 4.3-38.5 4.3s-13.3-3.8-20.5-5.6c-7.2-1.8-11.2-1.8-11.2-1.8s17.3-17 48.7-25.7c31.3-8.8 48-10.4 65.3-9.6 0-.2 2.7 15.3 0 26.2z"></path>
                      </svg>
                      {label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
