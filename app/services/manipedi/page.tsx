import Image from "next/image";
import photo from "@/public/assets/menu/mani.webp";


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

export default function Manipedi() {

  const services1: Service[] = [
    { name: "Classic", price: "450" },
    { name: "Sea", price: "700" },
    { name: "Spa", price: "1200" },
    { name: "Bombini", price: "1500" },
    { name: "Nail cut, file and polish", price: "200" },
    { name: "Nail cut and file", price: "100" },
    { name: "Polish change", price: "100" },
    { name: "French polish", price: "200" },
  ];

  const services2: Service[] = [
     { name: "Classic", price: "600" },
     { name: "Sea", price: "1200" },
     { name: "Spa", price: "1000" },
     { name: "Bombini", price: "1500" },
     { name: "Aroma Treasure", price: "1500" },

   ];

  

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Manicure & Pedicure Services</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Manicure</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className=" text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Pedicure</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Opulence
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="facial" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
