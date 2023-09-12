import Image from "next/image";
import photo from "@/public/assets/menu/color.webp";
import Link from "next/link";


interface Service {
  name: string;
  price: string;
}

const Service: React.FC<Service> = ({ name, price }) => (
  <ul className="w-full flex justify-between">
    <li>{name}</li>
    <li>₹ {price}</li>
  </ul>
);

export default function Color() {
  const services1: Service[] = [
    { name: "Root touch-up", price: "1300" },
    { name: "Global (Short)", price: "2700" },
    { name: "Global (Medium)", price: "3500" },
    { name: "Global (Long)", price: "4500" },
    { name: "Highlights", price: "4000 (onwards)" },
    { name: "Per strike", price: "500/700" },
  ];

  const services2: Service[] = [
    { name: "Root touch-up", price: "1500" },
    { name: "Global (Short)", price: "3000" },
    { name: "Global (Medium)", price: "4000" },
    { name: "Global (Long)", price: "5000" },

  ];

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Hair Colour Services</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">With Ammonia</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Without Ammonia</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Stunning
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="hair" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
