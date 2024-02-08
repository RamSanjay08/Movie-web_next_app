import React from 'react'
import { IoSearch } from "react-icons/io5";

type Props = {}

export default function SearchBar({}: Props) {  
  return (
    <div className='border-2 w-fit rounded-lg p-2 flex gap-2 justify-center items-center'>
      <IoSearch className='text-3xl'/>
      <input className='bg-inherit outline-none w-[350px] max-w-[350px]' type="text" placeholder='Search Movies...' />
    </div>
  )
}