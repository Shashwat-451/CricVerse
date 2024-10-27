import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
              Company
            </h2>
            <ul className="text-gray-500 text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Careers
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Brand Center
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
              Help center
            </h2>
            <ul className="text-gray-500 text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Discord Server
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
              Legal
            </h2>
            <ul className="text-gray-500 text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Licensing
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">
              Download
            </h2>
            <ul className="text-gray-500 text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  iOS
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Android
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  Windows
                </a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">
                  MacOS
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-100 bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 text-gray-300 sm:text-center">
            © 2023 <a href="https://flowbite.com/">Flowbite™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            <a href="#" className="text-gray-400 hover:text-gray-900 hover:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M5.156 4.344c0-1.336.2-1.902 1.533-1.902H7.75V.077C6.845.016 6.169 0 5.312 0 3.478 0 2.156 1.125 2.156 3.156v1.75H0v2.719h2.156v8.719h3V7.625h2.25l.344-2.719H5.156v-.562Z"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 hover:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 21 16"
              >
                <path
                  fillRule="evenodd"
                  d="M19.964 1.93c-.735.326-1.525.545-2.354.644a4.118 4.118 0 0 0 1.806-2.276 8.23 8.23 0 0 1-2.605.995 4.107 4.107 0 0 0-7.068 3.743A11.653 11.653 0 0 1 1.392.75a4.11 4.11 0 0 0 1.27 5.481 4.08 4.08 0 0 1-1.86-.514v.05a4.108 4.108 0 0 0 3.292 4.024 4.105 4.105 0 0 1-1.853.07 4.107 4.107 0 0 0 3.835 2.85A8.238 8.238 0 0 1 0 14.68a11.619 11.619 0 0 0 6.29 1.844c7.547 0 11.675-6.254 11.675-11.675l-.014-.531A8.335 8.335 0 0 0 21 2.14a8.204 8.204 0 0 1-2.036 2.14Z"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 hover:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Zm0 5a5 5 0 1 0 0 10A5 5 0 0 0 10 5Zm7.146-2.854a1 1 0 0 1 0 1.415l-1.176 1.175a1 1 0 0 1-1.415 0 1 1 0 0 1 0-1.415l1.175-1.175a1 1 0 0 1 1.415 0Z"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 hover:text-white">
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 1.839c2.962 0 3.313.011 4.473.065 1.09.05 1.683.23 2.076.383a4.207 4.207 0 0 1 1.525.995c.436.436.76.947.995 1.525.153.393.333.986.383 2.076.054 1.16.065 1.511.065 4.473s-.011 3.313-.065 4.473c-.05 1.09-.23 1.683-.383 2.076a4.207 4.207 0 0 1-.995 1.525c-.436.436-.947.76-1.525.995-.393.153-.986.333-2.076.383-1.16.054-1.511.065-4.473.065s-3.313-.011-4.473-.065c-1.09-.05-1.683-.23-2.076-.383a4.207 4.207 0 0 1-1.525-.995 4.207 4.207 0 0 1-.995-1.525c-.153-.393-.333-.986-.383-2.076C1.85 13.312 1.839 12.962 1.839 10s.011-3.313.065-4.473c.05-1.09.23-1.683.383-2.076A4.207 4.207 0 0 1 3.282 1.926a4.207 4.207 0 0 1 1.525-.995c.393-.153.986-.333 2.076-.383C6.687 1.85 7.038 1.839 10 1.839ZM10 0C7.002 0 6.612.01 5.446.064 4.29.118 3.309.305 2.478.622a6.207 6.207 0 0 0-2.253 1.47A6.207 6.207 0 0 0 .622 4.344c-.317.83-.504 1.811-.558 2.967C.01 7.476 0 7.866 0 10c0 2.963.011 3.313.065 4.473.054 1.156.241 2.137.558 2.967a6.207 6.207 0 0 0 1.47 2.253 6.207 6.207 0 0 0 2.253 1.47c.83.317 1.811.504 2.967.558 1.156.054 1.547.065 4.473.065s3.313-.011 4.473-.065c1.156-.054 2.137-.241 2.967-.558a6.207 6.207 0 0 0 2.253-1.47 6.207 6.207 0 0 0 1.47-2.253c.317-.83.504-1.811.558-2.967.054-1.16.065-1.511.065-4.473s-.011-3.313-.065-4.473c-.054-1.156-.241-2.137-.558-2.967a6.207 6.207 0 0 0-1.47-2.253 6.207 6.207 0 0 0-2.253-1.47c-.83-.317-1.811-.504-2.967-.558C13.312.01 12.962 0 10 0Zm0 4.844a5.156 5.156 0 1 0 0 10.312A5.156 5.156 0 0 0 10 4.844Zm6.531-.078a1.203 1.203 0 1 0 0 2.406 1.203 1.203 0 0 0 0-2.406ZM10 5.844a4.156 4.156 0 1 1 0 8.312 4.156 4.156 0 0 1 0-8.312Z"
                />
              </svg>
              <span className="sr-only">Dribbble account</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
