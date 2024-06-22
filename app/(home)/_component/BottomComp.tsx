
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

import React from "react";
import { useRouter } from "next/navigation";

export default function BottomComp(){
    const router = useRouter();
    return <div>
        <div className="flex justify-center gap-4">
        <Button onClick={()=>router.push('/upload')}>Get Started Now</Button>
        <Button onClick={()=>router.push('/work')} variant="ghost">Learn More<FaArrowRight /></Button>  
        </div>
    </div>
}