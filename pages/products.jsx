import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
export default function products() {
  const [activeTab, setActiveTab] = useState("");
  const [res, setRes] = useState([]);
  const [label, setLabel] = useState("");

  useEffect(() => {
    axios
      .get("/api/data")
      .then((response) => {
        setRes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const data = res;

  return (
    <Layout>
      <Tabs value="Toyota">
        <TabsHeader
          className="bg-transparent  mx-5 "
          indicatorProps={{
            className: "bg-[#A77419]   shadow-none   ",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={
                activeTab === value
                  ? " text-white  p-2  h-16 sm:h-full  "
                  : "  bg-gray-900/10 p-2 h-16   sm:h-full"
              }
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <div className="w-72 mx-10 mt-10">
          <Select
            label="เลือกประเภท"
            value={label}
            onChange={(value) => setLabel(value)}
          >
            <Option value="">ทั้งหมด</Option>
            <Option value="มือ 1">มือ 1</Option>
            <Option value="มือ 2">มือ 2</Option>
          </Select>
        </div>
        <TabsBody className="grid grid-cols-1 gap-4 ">
          <div>
            {data.map(({ value, infos }) => (
              <TabPanel
                className="grid grid-cols-2 gap-4 md:grid-cols-4"
                key={value}
                value={value}
              >
                {infos
                  .filter((item) => label === "" || item.usecase === label)
                  .map(({ gallery, name, id }, index) => (
                    <div key={index} className="relative">
                      <div className="group">
                        <div className="relative h-[350px] sm:h-[450px]">
                          <Image
                            width={`${1000000}`}
                            height={100}
                            src={gallery[0].img}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
                          />
                          <Image
                            width={`${1000000}`}
                            height={100}
                            src={gallery[1].img}
                            alt=""
                            className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
                          />
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div>
                            <p className=" text-center">{name}</p>
                            <Button color="amber">
                              <Link
                                href={`/product/${id}`}
                                className="text-white"
                              >
                                ดูผลงาน
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </TabPanel>
            ))}
          </div>
        </TabsBody>
      </Tabs>
    </Layout>
  );
}
