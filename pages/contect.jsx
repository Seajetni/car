import Layout from "@/components/Layout";
import React from "react";
import { Button, Input, Textarea } from "@material-tailwind/react";

export default function contect() {
  return (
    <Layout>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                At the same time, the fact that we are wholly owned and totally
                independent from manufacturer and other group control gives you
                confidence that we will only recommend what is right for you.
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  999 999 9999{" "}
                </a>

                <address className="mt-2 not-italic">
                  282 Kevin Brook, Imogeneborough, CA 58517
                </address>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div >
                  <Input label="ชื่อ" color="red" />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <Input label="เบอร์ติดต่อ" color="red" />
                  </div>

                  <div>
                    <Input label="email" color="red" />
                  </div>
                </div>

                <div className="w-full ">
                  <Textarea label="Message"  color='red' />
                </div>
                <div className="mt-4">
                  <Button
                    type="submit"
                    color="red"
                    className=" !text-sm"
                  >
                    ส่งข้อความ
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
