import React from "react";

export default function Navbar() {
  return (
    // <nav class='flex fixed w-screen'>
    //   {/* <!-- Left Navigation --> */}
    //   <div class='flex-1 flex justify-center mr-auto'>
    //     <a class='mx-2'>LINK ONE</a>
    //     <a class='mx-2'>LINK TWO</a>
    //   </div>
    //   {/* <!-- Logo --> */}
    //   <div class='mx-12'>L</div>
    //   {/* <!-- Right Navigation --> */}
    //   <div class='flex-1 flex justify-center ml-auto'>
    //     <a class='mx-2'>LINK THREEE</a>
    //     <a class='mx-2'>LINK FOOOUR</a>
    //   </div>
    // </nav>

    // <!-- component -->
    <header class='header sticky top-0 bg-stone-300 shadow-lg place-items-center justify-between px-8 py-02'>
      {/* <!-- navigation --> */}
      <nav class='nav flex items-center justify-center font-semibold text-lg'>
        <ul class='flex'>
          <li class='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer active'>
            <a href=''>Certificates</a>
          </li>
          <li class='p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100 hover:text-green-500 duration-200 cursor-pointer'>
            <a href=''>Personal Projects</a>
          </li>
        </ul>
      </nav>

      {/* <!-- buttons ---> */}
      <div class='w-3/12 flex justify-end'>
        <a href=''>
          <path
            fill='currentColor'
            d='M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z'
            className=''
          ></path>
        </a>
      </div>
    </header>
  );
}
