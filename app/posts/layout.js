import Link from "next/link";

export const metadata = {
    title:"posts page"

}
export default function RootLayout({children}){
    return (
        <div>
            <h1 className="text-center font-bold text-md">Posts page</h1>
            <nav className='p-2 flex gap-2 '>
                <Link className='p-2 hover:text-white hover:bg-red-500 transition rounded-md' href='/posts/1'>Post 1</Link>
                <Link className='p-2 hover:text-white hover:bg-red-500 transition rounded-md' href='/posts/2'>Post 2</Link>
                <Link className='p-2 hover:text-white hover:bg-red-500 transition rounded-md' href='/posts/3'>Post 3</Link>
            </nav>
            {children}
        </div>
    )
}