import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-orange-400 to-pink-500 p-6">
      <h1 className="mb-8 text-4xl font-bold text-black">CPRG-306 Assignments</h1>
      <div className="flex flex-col space-y-4">
        <Link href="./week-2"className="px-6 py-2 text-lg font-semibold text-black-500 bg-white rounded-md shadow hover:bg-orange-200 transition duration-150 ease-in-out">Week 2 link
        </Link>
        <Link href="./week-3"className="px-6 py-2 text-lg font-semibold text-black-500 bg-white rounded-md shadow hover:bg-pink-200 transition duration-150 ease-in-out">Week 3 link
        </Link>
        <Link href="./week-4" className="px-6 py-2 text-lg font-semibold text-black-500 bg-white rounded-md shadow hover:bg-orange-200 transition duration-150 ease-in-out">Week 4 link
        </Link>
        <Link href="./week-5" className="px-6 py-2 text-lg font-semibold text-black-500 bg-white rounded-md shadow hover:bg-orange-200 transition duration-150 ease-in-out">Week 5 link
        </Link>
      </div>
    </main>
  )
}
