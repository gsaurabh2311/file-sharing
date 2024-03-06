import React from 'react'
import Image from "next/image"
import {AlignJustify} from "lucide-react"
import {UserButton} from "@clerk/nextjs"

const TopHeader = () => {
  return (
    <div className="flex p-6 border-b items-center justify-between md:justify-end md:gap-8">
        <AlignJustify className="md:hidden" />
        <Image src="/logo.svg" width={150} height={100} className="md:hidden"/>
        <UserButton />
    </div>
  )
}

export default TopHeader