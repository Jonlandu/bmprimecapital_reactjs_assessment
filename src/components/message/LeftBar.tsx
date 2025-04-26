import React from "react";

type props = {
    title: string,
    icon?:string
}

export const LeftBar: React.FC<props> =({icon, title})=>{
    return(
        <div className="p-6 pb-3 flex justify-start items-center bg-white  mr-4 rounded-tl-3xl  gap-x-4 w-auto h-min shadow">

            {icon && <img src={icon} className="w-8" alt="button icon"/>}
            <p className=" font-bold mr-20">{title}</p>
        </div>
    )
}
