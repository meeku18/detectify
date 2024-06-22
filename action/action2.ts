"use client"
import useLinkStore from "@/store/store";
export function addLink({link}:{link:string}){
    const addLink = useLinkStore((state) => state.addLink);
    addLink(link);
}