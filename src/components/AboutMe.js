import React from "react";
import "../index.css";

export default function AboutMe() {
  return (
    <div className='flex items-center justify-center'>
      {/* <!-- component --> */}
      <div className='max-w-md bg-slate-200 py-7 px-7 shadow-lg rounded-lg my-20 mx-20'>
        <div class='flex justify-center md:justify-end -mt-16'>
          <img
            class='w-20 h-20 object-cover rounded-full border-2 border-indigo-500'
            src='../images/CV.jpg'
          />
        </div>
        <div>
          <h2 class='text-gray-800 text-3xl font-semibold'>Colton Randall</h2>
          <p class='mt-2 text-gray-600'>
            <ul>
              <li>Full-time Engineer at Xero, part time software tinkerer.</li>
              <li>Guitar | running | Aviation &#x2708; </li>
            </ul>

            <p> &#x1F30F; Auckland | New Zealand </p>
          </p>
        </div>
        <div class='flex justify-end mt-4'>
          <a href='#' class='text-xl font-medium text-indigo-500'>
            Software Engineer
          </a>
        </div>
      </div>
    </div>
  );
}
