import Image from "next/image";
import photo from "@/public/assets/menu/hair.webp";
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

export default function Hair() {
  const services1: Service[] = [
    { name: "Hair Cut", price: "900 (onwards)" },
    { name: "Kids Hair Cut", price: "400 (below 5 years)" },
    { name: "Boys Haircut", price: "300" },
    { name: "Hair wash", price: "400 (onwards)" },
    { name: "Hair wash Loreal", price: "500 (onwards)" },
    { name: "Hair wash with setting", price: "900 (onwards)" },
    { name: "Hair setting", price: "500 (onwards)" },
    { name: "Ironing", price: "600 (onwards)" },
    { name: "Curling", price: "1000 (onwards)" },
    { name: "Own colour application", price: "1000 (onwards)" },
  ];

  const services2: Service[] = [
    { name: "Smoothing", price: "4000 (onwards)" },
    { name: "Straightening", price: "5000 (onwards)" },
    { name: "Keratin/Protein treatment ", price: "6000 (onwards)" },
    { name: "Botox treatment", price: "7000 (onwards)" },

  ];

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Hair Services</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Normal Services</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Treatment</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="flex justify-end my-6">
               <div className="text-xs sm:text-sm md:text-xl italic">
                    <Link href='/services'>
                    For More Hair services, check All Services section
                    </Link>
               </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
            elegance
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="hair" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
