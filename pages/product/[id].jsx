import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function product() {
  const [res, setRes] = useState([]);
  const router = useRouter()
  const {id} = router.query
  useEffect(() => {
    if (id) {
        axios
            .get("/api/data?id=" + id)
            .then((response) => {
                setRes(response.data.infos);
                console.log(id);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }
}, [id]);


  const data = res;
  const [active, setActive] = useState(null);

  useEffect(() => {
    if(id){
      const fetchData = () => {
        const img = data.map(({ gallery }) => {
          return gallery;
        });
  
        const agin = img.map((items) => {
          return items[0].img;
        });
  
        setActive(agin[0]);
      };
      fetchData();
      const interval = setInterval(fetchData, 10 * 60 * 1000);
      return () => clearInterval(interval);
    }
  }, [data]);
  return (
    <Layout>
      <div className="flex my-10 flex-col lg:flex-row">
        <div className="grid gap-4 lg:w-1/2 ">
          <div>
            <img
              className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
              src={active}
              alt=""
            />
          </div>
          <div className="grid grid-cols-1">
            {data &&
              data.map(({ gallery, name }) => (
                <div key={name} className="grid grid-cols-2 lg:grid-cols-5 gap-10">
                  {gallery.map(({ img }, index) => (
                    <div key={index} className="flex flex-col">
                      <Image
                        width={`${100000}`}
                        height={100}
                        onClick={() => setActive(img)}
                        src={img}
                        className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                        alt={name}
                      />
                    </div>
                  ))}
                </div>
              ))}
          </div>
        </div>
        <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm lg:w-1/2">
          {data &&
            data.map(
              (
                { name, price, door, energy, carclass, details, usecase },
                index
              ) => (
                <dl
                  className="-my-3 divide-y divide-gray-100 text-sm"
                  key={index}
                >
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">ชื่อรุ่นรถ</dt>
                    <dd className="text-gray-700 sm:col-span-2">{name}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">สภาพการใช้งาน</dt>
                    <dd className="text-gray-700 sm:col-span-2">{usecase}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">ประเภทขอรถ</dt>
                    <dd className="text-gray-700 sm:col-span-2">{carclass}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Salary</dt>
                    <dd className="text-gray-700 sm:col-span-2"> ฿ {price} </dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">ประตู</dt>
                    <dd className="text-gray-700 sm:col-span-2">{door}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">พลังงานที่ใช้</dt>
                    <dd className="text-gray-700 sm:col-span-2">{energy}</dd>
                  </div>
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">Bio</dt>
                    <dd className="text-gray-700 sm:col-span-2">{details}</dd>
                  </div>
                </dl>
              )
            )}
        </div>
      </div>
    </Layout>
  );
}
