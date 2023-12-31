import {BiLogoTwitter, BiLogoFacebook, BiLogoInstagram, BiLogoYoutube} from 'react-icons/bi';



export default function Footer() {
  return (
    <div className="relative bg-red-800 z-10">

      <div className="relative bg-blueGray-200 pt-8 pb-6">

        <div className="container mx-auto px-4">

          <div className="flex flex-wrap text-left lg:text-left mt-8">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl fonat-semibold text-blueGray-700 text-white dark:text-black">
                Let us keep in touch!
              </h4>
              <h5 className="text-lg mt-0 mb-2 text-blueGray-600 text-white dark:text-black">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6 lg:mb-0 mb-6 flex">
                
                  <BiLogoTwitter className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 bg-white dark:bg-slate-700"/>

                  <BiLogoFacebook className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 bg-white dark:bg-slate-700"/>

                  <BiLogoInstagram className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 bg-white dark:bg-slate-700"/>

                  <BiLogoYoutube className="shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-2 bg-white dark:bg-slate-700"/>
                
                
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white dark:text-black text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/about"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/booking"
                      >
                        Booking
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/team"
                      >
                        Team
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/contact"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-white dark:text-black text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="/services"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href=""
                      >
                        Modubix
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="my-6 border-blueGray-300">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                <div className="text-sm text-white dark:text-blueGray-500 font-semibold py-1">
                  Copyright © <span id="get-current-year">2023</span>
                  <a
                    href=""
                    className="text-white dark:text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    {" "}
                    Modubix, Inc.
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
