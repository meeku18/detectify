"use client"
import React from "react";
import BottomComp from "./_component/BottomComp";
import BoxComp from "./_component/BoxComp";

export default function Home(){
    return (
        <div className="p-10 mt-4">  
            <div className="h-[200px] text-5xl flex justify-center flex-col bg-secondary rounded-lg pl-8 items-center">
                Discover the contents of your video/image with AI
            </div>
            <div className="flex justify-center py-10">
                Explore the capabilities of our machine learning model
            </div>
            <BottomComp/>
            <div className="bg-zinc-600 md:col-span-4 rounded-lg mt-28 text-secondary mb-20">
                <div className="flex flex-col justify-center items-center text-white">
                    <div className="text-sm pt-8">FEATURE</div>
                    <div className="text-4xl">Powerful Features for Video/Image Detection</div>
                    <div className="p-4">Experience cutting-edge technology that enhances video analysis</div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                    <BoxComp text1={"Easy Video Upload"} text2={"Simply drag and drop your videos to begin detection"}/>
                    <BoxComp text1={"Advanced Image Recognition"} text2={"Upload images and uncover detailed insights automatically"}/>
                    <BoxComp text1={"Real-time Video Processing"} text2={"Experience rapid analysis with our state-of-the-art model"}/>
                    <BoxComp text1={"Comprehensive Insights"} text2={"Gain deep insights into video content effortlessly"}/>
                </div>
            </div>
        </div>
    );
}
