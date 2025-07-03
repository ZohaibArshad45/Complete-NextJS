'use client'
import Link from "next/link";

const PageLinks = [
  { name: "Learn before React & Nextjs", links: "learn-before-nextjs" },
  { name: "Different b/w React vs Next JS", links: "react-vs-next" },
  { name: "Learn how we start project", links: "how-we-start" },
  { name: "Learn Event - Function & States", links: "learnEventFunctionStates" },
  { name: "Learn Sever-Side vs Client-Side", links: "learn-sever-&-client" },
  { name: "Learn Routing (App Router)", links: "learn-about-routing" },
  { name: "learn Link Navigation Router", links: "learn-link-navigation" },
  { name: "Parmas, useParams, usePathname, searchParams, usesearchParams", links: "learn-how-get-url-data" },
  { name: "Nested Routing and layout ", links: "learn-nested-routing-&-layout" },
  { name: "Nested  dynamic routes", links: "learn-dynamic-routes" },
  { name: "Learn Catch All Routing", links: "learn-catch-all-routing" },
  { name: "Error 404 Page not found", links: "error-not-found-page" },
  { name: "Learn Middleware", links: "middleware" },
  { name: "Learn About Rendering", links: "rendering-overview" },
  { name: "Server-Side API Fetch", links: "learn-ServerSiderDataFetch" },
  { name: "Client-Side API Fetch", links: "learn-ClientSideDataFetch" },
  { name: "Development vs Production", links: "development-production" },
  { name: "Project 1", links: "project-1" },
  { name: "Learn Image Optimization", links: "learn-image-Optimization" },
  { name: "Learn Font Optimization", links: "learn-font-optomization" },
  { name: "Dynamic Metadata", links: "dynamic-metadata" },
  { name: "Loader | Show loading with API", links: "loader-withAPI" },
  { name: "Script Components", links: "script-components" },
  { name: "Learn About Static Assets", links: "learn-static-assets" },
  { name: "Static HTML Page", links: "static-html-page" },
  { name: "Static Side Generation (SSG)", links: "static-side-generation" },
  { name: "Learn About Redirection", links: "redirection" },
  { name: "Environment Variables", links: "environment-variables" },

  { name: "Route API (Backend 1)", links: "learn-1firstroute" },
  { name: "GET API => Static (Backend 2)", links: "learn-GET-API" },
  { name: "POST API => Static (Backend 3)", links: "learn-POST-API" },
  // { name: "POST API with FE (Backend 4)", links: "learn-POST-API-Fb" },
  // { name: "DELETE API Static (Backend 5)", links: "learn-Delete-API" },
  // { name: "DELETE API with FE (Backend 6)", links: "learn-Delete-API-Fb" },
  // { name: "PUT API Static (Backend 7)", links: "learn-PUT-API" },
  // { name: "PUT API with FE (Backend 8)", links: "learn-PUT-API-Fb" },
  // { name: "Catch All API (Backend 9)", links: "learn-catch-all-API" },

  { name: "How mongodb connect", links: "learn-mongodb-connect" },
  { name: "MongoDB POST Method", links: "mongodb-POST" },
  { name: "MongoDB POST Method FI", links: "mongodb-post-FE" },
  // { name: "MongoDB GET Method Frontend integration", links: "mongodb-GET-FE" },

]

export default function Home() {

  return (
    <div className=" flex flex-col items-center p-6 pb-14">
      <h1 className="font-extrabold text-4xl mb-8 drop-shadow-md">
        🚀 Home Page
      </h1>

      <div className=" text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-4xl">
        {
          PageLinks.map((L, i) => (
            <Link key={i} href={L.links} className="bg-white rounded-xl shadow-md p-5 border hover:shadow-lg transition">
              {L.name}
            </Link>
          ))
        }
      </div>
    </div>
  );
}