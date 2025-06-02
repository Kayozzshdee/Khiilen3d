"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const [count, setCount] = useState(1);
  const pricePerItem = 35000;
  const deliveryFee = 5000;
  const coupon = 0;
  const totalPrice = count * pricePerItem + deliveryFee - coupon;

  return (
    <div className="bg-white min-h-screen text-black p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Таны Сагс</h1>
      <div className="bg-gray-50 p-4 rounded-lg shadow-lg">
        <table className="w-full border-collapse mb-6 text-left text-sm bg-white rounded-lg">
          <thead className="bg-gray-100">
            <tr className="border-b text-base font-semibold">
              <th className="p-3">Бүтээгдэхүүн</th>
              <th className="p-3">Нэгж үнэ</th>
              <th className="p-3">Үнэ</th>
              <th className="p-3">Тоо ширхэг</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-3 flex items-center">
                <img
                  src="/images/product.png"
                  alt="Product"
                  className="w-16 h-16 mr-4 rounded-lg"
                />
                <span className="text-sm font-medium">Heading: 123abcd</span>
              </td>
              <td className="p-3 text-gray-700">
                ₮ {pricePerItem.toLocaleString()}
              </td>
              <td className="p-3 text-gray-700">
                ₮ {(count * pricePerItem).toLocaleString()}
              </td>
              <td className="p-3 flex items-center gap-2">
                <Button
                  onClick={() => setCount(count > 1 ? count - 1 : 1)}
                  className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
                >
                  -
                </Button>
                <span className="text-sm font-medium px-2">{count}</span>
                <Button
                  onClick={() => setCount(count + 1)}
                  className="bg-red-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm"
                >
                  +
                </Button>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col md:flex-row justify-between items-start mt-6 gap-6">
          <div className="flex items-center gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Ваучерын код"
              className="border px-3 py-2 rounded-lg text-sm w-full md:w-auto"
            />
            <Button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 transition">
              Худалдан авах
            </Button>
          </div>

          <div className="text-right text-sm w-full md:w-1/3 bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Дундаж нийлбэр</span>
              <span>₮ {(count * pricePerItem).toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Хүргэлтийн хураамж</span>
              <span>₮ {deliveryFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mb-2 text-gray-700">
              <span>Купон</span>
              <span>₮ {coupon.toLocaleString()}</span>
            </div>
            <div className="flex justify-between mt-4 text-lg font-bold">
              <span>Нийт</span>
              <span>₮ {totalPrice.toLocaleString()}</span>
            </div>
            <Button className="bg-red-500 text-white w-full mt-4 py-2 text-base rounded-lg hover:bg-red-600 transition">
              Баталгаажуулах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
