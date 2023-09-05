import Image from "next/image";
import bg from "../public/assets/bg.jpg";
import logo from "../public/assets/Gianna.png";

import Gallery from "./components/Gallery";
import Offers from "./components/Offers";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Map from "./components/Map";

export default function Home() {
  return (
    <div>

      <div>
        <Image
          src={bg}
          alt="background"
          className="object-cover w-full h-screen"
        ></Image>
      </div>

      <div className="absolute bottom-10 left-0 bg-red-800 z-1 h-auto w-64 md:w-96 shadow-xl border-b-8  border-black">
        <div className="flex justify-center items-center p-4 ml-8 mr-2 my-6">
          <Image src={logo} alt="logo" className=""></Image>
        </div>
      </div>

      <div className="mx-6 my-36">
        <div className="text-2xl md:text-4xl font-bold mt-16 mb-6 text-center">Welcome to Gianna!!!</div>
        <div className="text-sm md:text-xl text-center mx-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a rhoncus ligula, ac rhoncus risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat. Nulla dapibus vulputate arcu, imperdiet posuere urna feugiat quis. Donec vehicula a tortor eu rhoncus. Cras sit amet mollis lacus. Donec feugiat fermentum mauris. Donec sit amet nibh dapibus, pharetra tortor ut, egestas erat. Maecenas ac diam ut est commodo euismod vel quis risus. Aliquam porttitor velit vel facilisis consequat. Cras ut diam quis sem molestie pellentesque. Phasellus porttitor venenatis augue, sed tempus nibh posuere id. Donec blandit scelerisque risus, quis vestibulum erat porta in. Aliquam ut gravida nunc.</div>
      </div>

      <div className="my-16">
        <Gallery/>
      </div>

      <div className="my-16 bg-red-800">
        <Offers/>
      </div>

      <div className="my-16">
        <Reviews/>
      </div>

      <div className="my-16 bg-red-800">
        <Contact/>
      </div>

      <div className="my-16">
        <Map/>
      </div>

    </div>
  );
}
