import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex items-center flex-row justify-between bg-gray-300 h-12 p-2 text-slate-900 w-screen">
      <h1>aaaaa</h1>
      <div className="flex justify-around items-center">
        <input className="h-8 rounded-xl rounded-r-none p-2 focus:outline-none" type="text" />
        <button className="h-8 rounded-xl rounded-l-none bg-slate-900 w-16 text-white">search</button>
      </div>
      <ul className="flex justify-between">
        <li className="ml-2 cursor-pointer bg-slate-500 rounded-lg hover:bg-slate-900 hover:text-white duration-300">cards</li>
        <li className="ml-2 cursor-pointer bg-slate-500 rounded-lg hover:bg-slate-900 hover:text-white duration-300">the1</li>
        <li className="ml-2 cursor-pointer bg-slate-500 rounded-lg hover:bg-slate-900 hover:text-white duration-300">the2</li>
        <li className="ml-2 cursor-pointer bg-slate-500 rounded-lg hover:bg-slate-900 hover:text-white duration-300">the3</li>
        <li className="ml-2 cursor-pointer bg-slate-500 rounded-lg hover:bg-slate-900 hover:text-white duration-300">the4</li>
      </ul>
    </div>
  );
};
