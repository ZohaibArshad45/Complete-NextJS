import { Rocket, Globe, Clock, Loader, Server } from "lucide-react";

const renderInfo = [
    {
        title: "Rendering",
        icon: <Rocket className="w-6 h-6 text-purple-600" />,
        description:
            "Rendering ka matlab hai HTML ko user ke liye show karna. Ye browser ya server dono pe ho sakta hai.",
        details:
            "Rendering ek process hai jisme React component ka output browser ko HTML form mein milta hai. Ye base hai har web app ka.",
    },
    {
        title: "Pre-rendering",
        icon: <Globe className="w-6 h-6 text-green-600" />,
        description:
            "Pre-rendering ka matlab hai ke HTML pehlay se generate kar ke ready rakhna, taake user jab aaye to instantly page load ho.",
        details:
            "Ye do tarah ka hota hai: SSG (Static Site Generation) aur SSR (Server Side Rendering). SEO aur speed dono ke liye best.",
    },
    {
        title: "Client-Side Rendering (CSR)",
        icon: <Loader className="w-6 h-6 text-blue-600 animate-spin" />,
        description:
            "CSR mein page blank load hota hai aur baad mein JavaScript se data aata hai. React apps ya SPA apps mein yeh use hota hai.",
        details:
            "Yeh fast hota hai jab app load ho jaye, lekin pehla load slow hota hai. SEO friendly nahi hota unless aap extra setup karo.",
    },
    {
        title: "Server-Side Rendering (SSR)",
        icon: <Server className="w-6 h-6 text-red-600" />,
        description:
            "SSR mein har user request pe server HTML generate karta hai. Yeh dynamic data ke liye aur SEO ke liye perfect hota hai.",
        details:
            "Next.js mein `getServerSideProps()` use hota hai. Jab bhi user page visit karta hai, fresh HTML server se milta hai.",
    },
    {
        title: "Static Site Generation (SSG)",
        icon: <Clock className="w-6 h-6 text-yellow-500" />,
        description:
            "SSG mein HTML build time pe generate hoti hai. Ye sab se fast aur SEO-friendly method hai.",
        details:
            "Next.js mein `getStaticProps()` use hota hai. Page sirf build time pe banta hai. ISR use karo agar data time-to-time update hota ho.",
    },
];

export default function RenderingInfoPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 py-12 px-4 md:px-20">
            <h1 className="text-4xl font-bold mb-10 text-center">
                🧠 Rendering Types in Next.js
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {renderInfo.map((item, idx) => (
                    <div
                        key={idx}
                        className="bg-gray-100 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-4">
                            {item.icon}
                            <h2 className="text-xl font-semibold">{item.title}</h2>
                        </div>
                        <p className="text-sm text-gray-800 mb-2">{item.description}</p>
                        <p className="text-xs text-gray-600">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
