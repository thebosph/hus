import React from "react";

const footer = () => {
  return (
    <footer className="shadow-inner  w-screen max-w-6xl bg-white  flex justify-between p-5 bottom-0  fixed ">
      <div>
        <span>copyright 2021 huseyin icen, building by ivo  </span>
      </div>
      <div className="flex justify-between ml-5 ">
        <a
          target="_blank"
          href="https://tr.linkedin.com/in/h%C3%BCseyin-i%C3%A7en-471362144"
        >
          <i className="fab fa-linkedin text-2xl hover:text-blue-500 cursor-pointer"></i>
        </a>
        <a
          target="_blank"
          href="https://istanbul.academia.edu/h%C3%BCseyini%C3%A7en"
        >
          <i class="ai ai-academia ml-5 text-2xl hover:text-blue-500 cursor-pointer"></i>
        </a>
      </div>
    </footer>
  );
};

export default footer;
