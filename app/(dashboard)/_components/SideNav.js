"use client"
import React,{useState} from 'react'
import {Upload, File, Shield} from "lucide-react"
import Image from "next/image"
const SideNav = () => {
    const menuLists = [
        {
            id: 1,
            name: "Upload",
            icon: Upload,
            path: "/upload"
        },
        {
            id: 2,
            name: "Files",
            icon: File,
            path: "/files"
        },
        {
            id: 3,
            name: "Upgrade",
            icon: Shield,
            path: "/upgrade"
        },
        // {
        //     id: 4,
        //     name: "Upload",
        //     icon: Shield,
        //     path: "upload"
        // },
    ]
    const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className="border-r shadow-sm h-full">
        <div className="p-6 ml-5 border-b">
            <Image src="/logo.svg" width={150} height={100}/>
        </div>
        <ul className="p-5">
        {menuLists.map((item)=>(
            <li className={`px-6 py-5 flex gap-2 hover:bg-gray-100 w-full text-gray-500 ${activeIndex === item.id ? "text-primary bg-blue-50" : null}`} key={item.id} onClick={()=> setActiveIndex(item.id)}><item.icon />{item.name}</li>
        ))}
        </ul>
    </div>
  )
}

export default SideNav