import React from 'react'
import Link from 'next/link'

type Props = {}

export default function NavBar({}: Props) {
  return (
    <nav className='flex w-full max-w-7xl m-auto px-2 py-4 justify-between items-center'>
      <div className='font-bold text-3xl'>Movies</div>
      <div className='flex gap-4 font-bold text-xl'>
        <Link href='/'>Home</Link>
        <Link href='/favourites'>Favourites</Link>
      </div>
    </nav>
  )
}