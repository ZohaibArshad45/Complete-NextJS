import { Poppins } from 'next/font/google';

const poppins = Poppins({
    subsets: ['latin'],
    weight: '800',
    display: 'swap'
});

export default function Home() {
    return (
        <div className={`${poppins.className} p-6 bg-gray-100 min-h-screen`}>
            <h1 className="text-3xl font-bold text-blue-600 mb-4">
                Hello, Next.js with Google Font! 👋
            </h1>

            {/* Benefits Section */}
            <h2 className="text-2xl font-semibold text-gray-800">🔥 Benefits of Using next/font/google:</h2>
            <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>✅ <strong>Automatic Optimization</strong> – Loads only required font styles.</li>
                <li>✅ <strong>No Flash of Unstyled Text (FOUT)</strong> – Reduces layout shift.</li>
                <li>✅ <strong>Self-hosted Fonts</strong> – Improves performance (No external request to Google).</li>
                <li>✅ <strong>Preloading Enabled</strong> – Fonts are loaded faster.</li>
                <li>✅ <strong>Easier to Use</strong> – No need to manually add <code>&lt;link&gt;</code> tags.</li>
            </ul>

            <br />

            {/* Usage Instructions */}
            <h2 className="text-2xl font-semibold text-gray-800">📌 How to Use Google Fonts in Next.js</h2>
            <pre className="bg-gray-900 text-white p-4 rounded-lg mt-2">
                <code>
                    {`import { Poppins } from 'next/font/google';

const poppins = Poppins({ 
    subsets: ['latin'],
    weight: '900',
    display: 'swap'
});`}
                </code>
            </pre>
        </div>
    );
}