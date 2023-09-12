import Image from "next/image";
import photo from "@/public/assets/menu/facial.webp";
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

export default function Facial() {
  const services1: Service[] = [
    { name: "Fruits facial", price: "900" },
    { name: "Wine glow", price: "1100" },
    { name: "Anti- tan", price: "1500" },
    { name: "Pearl", price: "1500" },
    { name: "Acne facial", price: "1700" },
    { name: "Anti ageing facial", price: "2300" },
    { name: "Gold facial", price: "2000" },
    { name: "Whitening facial", price: "1700" },
  ];

  const services2: Service[] = [
    { name: "O3+ Facial", price: "3000" },
    { name: "Janssen facial", price: "4000" },
    { name: "Vitamin C radiance", price: "2500" },
    { name: "O3+ clean-up", price: "2500" },
  ];

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Facials</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Normal Facial</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className=" text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Luxury Facial</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="flex justify-end my-6">
               <div className="text-xs sm:text-sm md:text-xl italic">
                    <Link href='/services'>
                    For More Facial services, check All Services section
                    </Link>
               </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Refinement
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="facial" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
