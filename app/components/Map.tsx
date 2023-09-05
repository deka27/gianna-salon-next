import {MdOutlineShareLocation} from 'react-icons/md';

export default function Map() {
  return (
    <div className="md:flex p-10">
      <div className="w-[80%] mx-auto flex flex-col items-center">        
        <div className="text-4xl font-bold my-10">Find us Here</div>
        <div className='text-4xl my-2'><MdOutlineShareLocation/></div>
        <div className="text-xl font-semibold my-2">GIANNA BEAUTY SALON</div>
        <div className="text-center w-[60%] my-2">3, 19th main, 27th Main Rd, opposite Nagarjuna appartment, 2nd Sector, HSR Layout, Bengaluru, Karnataka 560102</div>
      </div>
      <div className="w-[80%] h-[500px] mx-auto rounded-3xl my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0491894105767!2d77.64317697685317!3d12.904558616341111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae152e97e15d2f%3A0x246fc925e4c509c1!2sGIANNA%20BEAUTY%20SALON!5e0!3m2!1sen!2sin!4v1693934804120!5m2!1sen!2sin"
        width="100%"
        height="100%"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
    </div>
  );
}
