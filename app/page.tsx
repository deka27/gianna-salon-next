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
        <div className="w-4/6 mx-auto text-sm md:text-xl text-center my-16">Welcome to Gianna Beauty Salon, where every visit is a cherished moment of self-care and rejuvenation. Our doors open to a world of warmth and expertise, where our skilled professionals are dedicated to bringing out your inner radiance. Come experience the tranquility of our sanctuary, relax in the comfort of our chairs, and let us transform your beauty aspirations into reality. Gianna Beauty Salon is not just a destination; it&apos;s an oasis of serenity and style, where you&apos;re not just a client, but a cherished guest. Step inside and let us pamper you to perfection.</div>
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
