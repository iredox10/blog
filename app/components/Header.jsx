import Link from 'next/link'
const Header = () => {
  return (
    <div className='shadow-lg md:p-6 md:flex justify-between items-center'>
        <Link href='/'>
          image
        </Link>
        <nav className='flex gap-2'>
            <Link href="/" className='text-white font-bold capitalize'>Home</Link>
            <Link href="/" className='text-white font-bold capitalize'>Articles</Link>
            <Link href="/" className='text-white font-bold capitalize'>About</Link>
            <Link href="/" className='text-white font-bold capitalize'>contact</Link> 
        </nav>
        <div className="">
    <Link href='/login' className='bg-yellow px-6 py-2 rounded-full '>login</Link>
        </div>
    </div>
  )
}
export default Header