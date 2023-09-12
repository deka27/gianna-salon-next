import Image from "next/image";
import photo from "@/public/assets/menu/wax.webp";


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

export default function Wax() {
  const services1: Service[] = [
    { name: "Full Arms", price: "350" },
    { name: "Under Arms", price: "100" },
    { name: "Full Legs", price: "500" },
    { name: "3/4 Legs", price: "400" },
    { name: "Half Legs", price: "300" },
    { name: "Tummy", price: "500" },
    { name: "Full back", price: "600" },
    { name: "Bikini", price: "1000" },
    { name: "Brazilian U-arms", price: "350 (onwards)" },
  ];

  const services2: Service[] = [
     { name: "Full Arms", price: "450" },
     { name: "Under Arms", price: "150" },
     { name: "Full Legs", price: "700" },
     { name: "3/4 Legs", price: "600" },
     { name: "Half Legs", price: "400" },
     { name: "Tummy", price: "700" },
     { name: "Full back", price: "800" },
     { name: "Bikini", price: "1500" },
  ];

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Waxing</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Normal</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Rica</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Panache
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="hair" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
