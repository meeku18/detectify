
import { IoCubeOutline } from "react-icons/io5";

export default function BoxComp({ text1, text2 }:{text1:string,text2:string}) {
   
  return (
    <div className="bg-zinc-500 p-8 rounded m-4">
      <div className="flex text-secondary my-2">
        <div className="flex justify-center items-center flex-col">
        <IoCubeOutline />
        </div>
        <div className="text-xl">{text1}</div>
      </div>
      <div>{text2}</div>
      
    </div>
  );
}
