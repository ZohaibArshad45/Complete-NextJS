'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  // const dynamicRoute = ()=>{
  //   router.push('/dynamic-routes')
  // }

  const navLink = (nav) => {
    router.push(nav)
  }


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

        <div className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/learnLinkNavigation">Learn Navigation</Link>
        </div>

        <div className="bg-cyan-700 hover:bg-cyan-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/urlData">Parmas, usePathname, searchParams, usesearchParams</Link>
        </div>

        <div className="bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          <Link href="/nested-routing">Nested Routing</Link>
        </div>

        {/* <div onClick={dynamicRoute} className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-md transition">
        Dynamic Routes
        </div> */}

        <div onClick={() => router.push('/dynamic-routes')} className="bg-red-500 hover:bg-red-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Dynamic Routes
        </div>

        <div onClick={() => router.push('/catch-all-routing')} className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Catch All Routing
        </div>

        <button onClick={() => router.push('/error-not-found-page')} className="bg-gray-600 hover:bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md transition">
          404 Error
        </button>


        <button onClick={() => router.push('/middleware')} className="bg-yellow-700 hover:bg-yellow-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          Middleware
        </button>

        <button onClick={() => router.push('/learn-ClientSideDataFetch')} className="bg-teal-500 hover:bg-teal-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Client-Side API Fetch
        </button>

        <button onClick={() => navLink('/learn-ServerSiderDataFetch')} className="bg-indigo-500 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Server-Side API Fetch
        </button>

        <button onClick={() => navLink('/project-1')} className="bg-black hover:bg-gray-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Project 1
        </button>

        <button onClick={() => navLink('/learn-image-Optimization')} className="bg-cyan-500 hover:bg-cyan-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Image Optimization
        </button>

        <button onClick={() => navLink('/learn-font-optomization')} className="bg-lime-500 hover:bg-lime-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Font Optimization
        </button>

        <button onClick={() => navLink('/development-production')} className="bg-rose-500 hover:bg-rose-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Development vs Production
        </button>

        <button onClick={() => navLink('/dynamic-metadata')} className="bg-violet-500 hover:bg-violet-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Dynamic Metadata
        </button>

        <button onClick={() => navLink('/script-components')} className="bg-emerald-700 hover:bg-emerald-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          Script Components
        </button>

        <button onClick={() => navLink('/loader-withAPI')} className="bg-blue-700 hover:bg-blue-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          Loader | Show loading
        </button>

        <button onClick={() => navLink('/Static-Assets')} className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Static-Assets
        </button>

        <button onClick={() => navLink('/static-html-page')} className="bg-yellow-800 hover:bg-yellow-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Static Html Page
        </button>

        <button onClick={() => navLink('/static-side-generation')} className="bg-red-800 hover:bg-red-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Static Side Generation SSG
        </button>

        <button onClick={() => navLink('/redirection')} className="bg-blue-400 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Learn About Redirection
        </button>

        <button onClick={() => navLink('/environment-variables')} className="bg-lime-700 hover:bg-lime-500 text-white py-3 px-6 rounded-lg shadow-md transition">
          Environment Variables
        </button>

        <button onClick={() => navLink('/learn-1firstroute')} className="bg-yellow-500 hover:bg-yellow-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Route API (Backend 1)
        </button>

        <button onClick={() => navLink('/learn-GET-API')} className="bg-orange-500 hover:bg-orange-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          GET API Static (Backend 2)
        </button>

        <button onClick={() => navLink('/learn-POST-API')} className="bg-pink-500 hover:bg-pink-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          POST API Static (Backend 3)
        </button>


        {/* <button onClick={() => navLink('/waiting')} className="bg-purple-500 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition">
          Integration Static POST API with FE (Backend 4)
        </button> */}

        {/* <button onClick={() => navLink('/learn-Delete-API')} className="bg-pink-800 hover:bg-pink-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          DELETE API Static (Backend 5)
        </button> */}

        {/* <button onClick={() => navLink('/waiting')} className="bg-cyan-800 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Integration Static DELETE API (Backend 6)
        </button> */}

        {/* <button onClick={() => navLink('/waiting')} className="bg-cyan-800 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Learn PUT API Static (Backend 7)
        </button> */}

        {/* <button onClick={() => navLink('/waiting')} className="bg-cyan-800 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Integration Static PUT API (Backend 8)
        </button> */}

        {/* <button onClick={() => navLink('/waiting')} className="bg-cyan-800 hover:bg-cyan-600 text-white py-3 px-6 rounded-lg shadow-md transition">
          Catch All API (Backend 9)
        </button> */}







      </div>
    </div>
  );
}
