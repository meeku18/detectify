"use client"
import React from "react";
import BottomComp from "./_component/BottomComp";
import BoxComp from "./_component/BoxComp";


export default function Home(){
    return (
        <div className="p-10 mt-4">  
            <div className="h-[200px] text-5xl flex justify-center flex-col items-center bg-secondary rounded-lg">
                Upload your video and discover its contents
            </div>
            <div className="flex justify-center py-10">
                Experience the power of our machine learning model
            </div>
            <BottomComp/>
            <div className="bg-zinc-600 md:col-span-4 rounded-lg mt-28 text-secondary mb-20">
                <div className="flex flex-col justify-center items-center text-white">
                    <div className="text-sm pt-8">FEATURE</div>
                    <div className="text-4xl">Powerful Features for Video Detection</div>
                    <div className="p-4">Experience cutting-edge technology that revolutionizes video analysis</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <BoxComp text1={"Upload Videos Easily"} text2={"Simply drag and drop your videos to start the detection process"}/>
                    <BoxComp text1={"Upload Videos Easily"} text2={"Simply drag and drop your videos to start the detection process"}/>
                    <BoxComp text1={"Upload Videos Easily"} text2={"Simply drag and drop your videos to start the detection process"}/>
                    <BoxComp text1={"Upload Videos Easily"} text2={"Simply drag and drop your videos to start the detection process"}/>
                </div>
            </div>
        </div>
    )
}