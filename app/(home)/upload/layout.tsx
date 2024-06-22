import React, { ReactElement } from "react";

export default function Uploadlayout({children}:{children:ReactElement}){
    return (
        <div className="w-full h-[650px]  mt-7 rounded-lg text-secondary">
            {children}
        </div>
    )
}