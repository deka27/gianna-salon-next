import Image from "next/image";
import photo from "@/public/assets/menu/clean.webp";


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

export default function Bleach() {
  const services: Service[] = [
    { name: "Face & neck", price: "500" },
    { name: "Full Arms", price: "800" },
    { name: "Half Legs", price: "600" },
    { name: "Under arms", price: "400" },
    { name: "Tummy", price: "500" },
    { name: "Half back", price: "500" },
    { name: "Full back", price: "800" },
    { name: "Full body", price: "2500" },
    { name: "De-tan face pack", price: "500" },
  ];


  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Bleaching</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Normal</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Delicate
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="hair" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
