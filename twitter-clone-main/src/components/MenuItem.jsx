import React from "react";
import { Link } from "react-router-dom";
const MenuItem = ({icon,title,link}) => {  
  return (
    <Link to={link}>
      <div className="flex flex-row hover:bg-slate-200 rounded-full cursor-pointer p-3 ">
        {/* icon  */}
        {icon}
        {/* title  */}
        <h1 className="text-xl font-medium px-3">{title}</h1>
      </div>
     
    </Link>
  );
};

export default MenuItem;
