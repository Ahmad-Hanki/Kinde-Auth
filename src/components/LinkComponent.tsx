'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

type Link = {
    path: string,
    name: string,
}

const LinkComponent = ({path, name}:Link) => {
    const pathname = usePathname();


  return (

    <Link className={pathname === path ? 'bg-slate-200 rounded-l w-20 text-center' : ''} href={path}>{name}</Link>
  )
}

export default LinkComponent