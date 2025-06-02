import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Phone } from "lucide-react";

import { Input } from "./ui/input";

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-grey-800 p-8 text-sm">
      <div className="container  flex  justify-between">
        {/* Subscription Section */}
        <div className="ml-15 pl-10 w-150">
          <h3 className="font-bold text-lg ">Шинэ мэдээнээс бүү хоцороорой</h3>
          <p className="mt-2">
            Худалдаж авах чанарыг бид таньд өгье
            <br />
            Хэрэглээнд төгс үзэмжийг бид таньд мэдрүүлье
            <br />
            Хэрэглэгчид ойр үзэмж төгс Хийлэн бренд
            <br />
            Таны хүсэлтийг бид БҮТЭЭЕ
          </p>
        </div>

        {/* Location Section */}
        <div className="ml-20">
          <h3 className="font-bold text-lg ">Хаяг</h3>
          <p>Gem mall 4 давхар</p>
          <p>Soyolj mall 6 давхар</p>
          <p>Ulaanbaatar, Mongolia</p>
        </div>

        {/* Contact Section */}
        <div className="ml-20">
          <h3 className="font-bold text-lg ">Тусламж</h3>
          <Link href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWstpszZpDvsssHdGmmVsFxzvRFkXBXFVsNLHKxCtwDkpqdZlwTRzDTgqVQSLdjNdpTdjdkhl">
            Мэйл: info@khiilen.mn
          </Link>
          <p>Утас: 9888-7880</p>
        </div>

        {/* About Section */}
        <div className="ml-20">
          <h3 className="font-bold text-lg ">Бидний тухай</h3>
          <p>Khiilen brand -ийн тухай</p>
          <p>Хийлэн брэнд</p>
        </div>
      </div>
      <div className="flex justify-between px-10 mr-20">
        <div className=" mt-4">
          <Input
            placeholder="Email"
            className="bg-transparent border border-b-black rounded-none"
          />
        </div>
        <div className="">
          <h1>Follow :</h1>
          <div className="flex space-x-4 mt-4">
            <Link href="https://www.facebook.com/khiilenmongolia" legacyBehavior>
              <Facebook />
            </Link>
            <Link href="https://www.instagram.com/khiilenmongolia" legacyBehavior>
              <Instagram />
            </Link>
            <Link href="#" legacyBehavior>
              <Phone />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-600 text-xs ml-20">
        <p>© 2024 Khiilen. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Do Not Sell or Share My Personal Information</Link>
          <Link href="#">Vendor Code & Conduct</Link>
          <Link href="#">Sitemap Pages</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
