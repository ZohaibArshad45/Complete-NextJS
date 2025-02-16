'use client'
import Link from "next/link";
// import { useRouter } from "next/navigation";


export default function Home() {

  // const router = useRouter();

  // const navLink = (nav)=>{
  //   router.push(nav)
  // }


  return (
    <div className=" flex flex-col items-center bg-gray-100 p-6 pb-14">
      <h1 className="font-extrabold text-blue-700 text-4xl mb-8 drop-shadow-md">
        🚀 Home Page
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-3xl">
        <div className="bg-blue-500 hover:bg-blue-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/react-vs-next">React vs Next JS</Link>
        </div>

        <div className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/how-we-start">How we Start</Link>
        </div>

        <div className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/learnEventFunctionStates">Learn Event & State</Link>
        </div>


      </div>
    </div>
  );
}
