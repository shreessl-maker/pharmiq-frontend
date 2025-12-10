import React from "react";

export default function Sidebar({ menu }) {
  return (
    <div className="w-56 bg-white shadow-md p-4">
      <ul>
        {menu.map((item, index) => (
          <li key={index} className="py-2 px-3 hover:bg-purple-100 rounded-md cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
