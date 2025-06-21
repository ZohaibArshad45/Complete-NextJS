import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '800',
  display: 'swap',
});

export default function Home() {
  return (
    <div className={`${poppins.className} min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8`}>
      {/* Heading */}
      <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
        👋 Hello, Next.js with Google Fonts
      </h1>

      {/* Benefits Section */}
      <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          🔥 Faiday of using <code className="bg-gray-100 px-2 py-0.5 rounded text-sm">next/font/google</code>
        </h2>
        <ul className="space-y-3 text-gray-700 text-base pl-5 list-disc">
          <li>✅ <strong>Automatic Optimization:</strong> Sirf wohi font styles load hongi jo zarurat ho</li>
          <li>✅ <strong>No FOUT:</strong> Flash of Unstyled Text nahi aayega (layout shift avoid)</li>
          <li>✅ <strong>Self-hosted:</strong> Google se direct link nahi, aapki site pe fonts load honge – zyada fast 🚀</li>
          <li>✅ <strong>Preloading:</strong> Fonts jaldi load ho jaate hain – performance better</li>
          <li>✅ <strong>Asaan Usage:</strong> Manually <code className="bg-gray-100 px-1 rounded">&lt;link&gt;</code> tag dena nahi padta</li>
        </ul>
      </div>

      {/* Code Example */}
      <div className="bg-gray-900 text-green-400 rounded-2xl shadow-lg p-6 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4 text-white">📌 Kaise Use Kare Google Fonts in Next.js</h2>
        <pre className="text-sm leading-relaxed">
<code>{`import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: '900',
  display: 'swap',
});

    <div className={$poppins.className min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 p-8}> </div >

`}</code>
        </pre>
      </div>
    </div>
  );
}
