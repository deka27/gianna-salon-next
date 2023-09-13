import Image from "next/image";
import bg1 from "@/public/assets/gallery/c.jpg";
export default function About() {
  return (
    <div className="">
      <div className="lg:h-full md:h-[100px] sm:h-[50px] bg-white"></div>
    <div className="relative h-full flex flex-col-reverse py-10 lg:pt-0 lg:flex-col lg:pb-0 bg-white">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          src={bg1}
          alt="Background Home"
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
        ></Image>
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-red-800 uppercase rounded-full bg-teal-accent-400">
            Welcome to
          </p>
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-orange-800 sm:text-4xl sm:leading-none">
            Gianna
            <br className="hidden md:block" />
            Beauty {" "}
            <span className="inline-block">
              Salon
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-black md:text-lg">
          Allow us to introduce you to Gianna Beauty Salon, a haven where beauty meets personalized care. At Gianna, we believe that every individual is unique, and our skilled professionals are here to celebrate your distinct beauty. Step into our world of warmth and expertise, where your comfort and satisfaction are our top priorities. Gianna Beauty Salon is more than just a salon; it&apos;s a sanctuary of style and self-expression, where every visit is a delightful journey of transformation. Join us, and let us introduce you to a new level of beauty and confidence.
          </p>
          <div className="flex items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-950 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
            >
              Connect
            </a>
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
