import React, { ReactElement } from "react";
import Header from "./_component/Header";
import { Footer } from "./_component/Footer";


export default function Homelayout({children}:{children:ReactElement}){
    return (
        <div className="relative">
            <Header/>
            <div className="mx-5 md:mx-20 lg:mx-36 h-fit h-screen mb-44">
                {children}
            </div>
            <Footer/>
        </div>
    )
}