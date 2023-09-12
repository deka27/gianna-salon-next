import Image from "next/image";
import photo from "@/public/assets/menu/spa.webp";
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

export default function Spa() {

  const services1: Service[] = [
    { name: "Short", price: "1000" },
    { name: "Medium", price: "1200" },
    { name: "Long", price: "1400 (onwards)" },
  ];

  const services2: Service[] = [
     { name: "Head Massage (Olive/Coconut) - 30 Mins", price: "600" },
     { name: "Neck & back - 30 Mins", price: "600" },
     { name: "Neck & back with oil - 30 Mins", price: "800" },
     { name: "Foot massage - 30 Mins", price: "600" },
     { name: "Face massage - 20 Mins", price: "600" },
     { name: "Face massage - 60 Mins", price: "1200" },
     { name: "Swedish body massage - 60 Mins", price: "1500" },

   ];

  

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Spa Services</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Hair Spa (Loreal)</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="flex justify-start my-4 text-xs sm:text-sm md:text-xl italic">Options: Repair, nourishing, and smooth</div>
          <div className=" text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Relaxing Massages</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="flex justify-end my-6">
               <div className="text-xs sm:text-sm md:text-xl italic">
                    <Link href='/services'>
                    For More Spa services, check All Services section
                    </Link>
               </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Gracefulness
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="facial" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
