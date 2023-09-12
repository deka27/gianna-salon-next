import Image from "next/image";
import photo from "@/public/assets/menu/hairwax.webp";
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

export default function Hairwax() {
  const services1: Service[] = [
    { name: "Eyebrows", price: "70" },
    { name: "Upper lip", price: "50" },
    { name: "Lower lip", price: "30" },
    { name: "Chin", price: "50" },
    { name: "Sides", price: "100" },
    { name: "Forehead", price: "50" },
    { name: "Full-face", price: "320" },
  ];

  const services2: Service[] = [
     { name: "Eyebrows", price: "100" },
     { name: "Upper lip", price: "70" },
     { name: "Lower lip", price: "50" },
     { name: "Chin", price: "70" },
     { name: "Sides", price: "150" },
     { name: "Forehead", price: "70" },
     { name: "Full-face", price: "450" },
   ];

  return (
    <div>
      <div className="w-full h-[10px] bg-red-800"></div>
      <div className="w-full h-full flex flex-row">
        <div className="w-full lg:w-1/2 h-full flex flex-col mx-16 mt-16">
          <div className="text-4xl font-bold">Hair Removal</div>
          <div className="w-full h-[10px] bg-red-800 my-10 md:my-6 rounded-lg"></div>
          <div className="text-2xl font-bold mt-6">Threading</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className=" text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services1.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="text-2xl font-bold mt-10">Waxing</div>
          <div className="w-full h-1 bg-white my-4 rounded-lg"></div>
          <div className="my-6 text-xs sm:text-sm md:text-xl space-y-10 p-2">
            {services2.map((service, index) => (
              <Service key={index} {...service} />
            ))}
          </div>
          <div className="flex justify-end my-6">
               <div className="text-xs sm:text-sm md:text-xl italic">
                    <Link href='/services'>
                    For More Waxing services, check All Services section
                    </Link>
               </div>
          </div>
        </div>
        <div className="w-1/2 lg:flex flex-col hidden relative">
          <div className="absolute top-0 left-0 uppercase text-8xl font-extrabold text-red-800 transform rotate-90 origin-top-left translate-x-36 translate-y-12">
          Aesthetic
          </div>
          <div className="w-full h-auto">
            <Image src={photo} alt="facial" className="lg:h-[1600px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
