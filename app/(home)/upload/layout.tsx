import React, { ReactElement } from "react";

export default function Uploadlayout({children}:{children:ReactElement}){
    return (
        <div className="w-full h-[650px]  rounded-lg text-secondary">
            {children}
        </div>
    )
}