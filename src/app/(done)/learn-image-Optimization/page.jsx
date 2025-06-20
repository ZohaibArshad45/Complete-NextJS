import React from 'react';
import Image from 'next/image';

const ImageUse = () => {
    const codeExample = `
import Image from 'next/image';

export default function Example() {
    return (
        <Image 
            src="/man.png" 
            alt="Example" 
            width={300} 
            height={300} 
            priority 
        />
    );
}`.trim();

    const nextConfigExample = `
module.exports = {
    images: {
        domains: ['images.pexels.com'],
    },
};`.trim();

    return (
        <div className="p-8 max-w-6xl mx-auto">
            {/* Header */}
            <h1 className="text-3xl font-bold text-blue-600 mb-6">📸 How to Use Images in Next.js</h1>

            {/* Instruction Steps */}
            <div className="bg-white shadow-md rounded-xl p-6 mb-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">🧠 Steps:</h2>
                <ol className="list-decimal ml-6 text-gray-700 space-y-1">
                    <li>Import <code className="bg-gray-100 px-1 py-0.5 rounded">Image</code> from <code>next/image</code></li>
                    <li>Add image files inside the <code className="bg-gray-100 px-1 py-0.5 rounded">public</code> folder</li>
                    <li>Use the correct path in <code className="bg-gray-100 px-1 py-0.5 rounded">src</code> attribute</li>
                </ol>
            </div>

            {/* Image Examples */}
            <div className="grid md:grid-cols-2 gap-8">
                {/* Local Image */}
                <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center">
                    <h2 className="text-lg font-semibold mb-4">🖼️ Local Image</h2>
                    <Image
                        src="/man.png"
                        alt="Man Illustration"
                        width={300}
                        height={300}
                        priority
                        className="mx-auto rounded-lg shadow-md"
                    />
                </div>

                {/* Online Image */}
                <div className="bg-gray-50 shadow-md rounded-xl p-6 text-center">
                    <h2 className="text-lg font-semibold text-yellow-600 mb-4">🌍 Online Image</h2>
                    <p className="text-gray-600 text-sm mb-2">
                        Make sure to <strong>add the image domain</strong> in <code className="bg-gray-100 px-1 py-0.5 rounded">next.config.js</code> under <code className="bg-gray-100 px-1 py-0.5 rounded">images.domains</code>
                    </p>
                    <Image
                        src="https://images.pexels.com/photos/20259613/pexels-photo-20259613/free-photo-of-model-in-dress-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="Model on Chair"
                        width={300}
                        height={300}
                        className="mx-auto rounded-lg shadow-md"
                    />
                </div>
            </div>

            {/* Explanation */}
            <div className="mt-10 bg-gray-900 p-6 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4">🚀 Why Use <code className="bg-gray-700 px-1 py-0.5 rounded">next/image</code>?</h2>
                <ul className="list-disc ml-6 space-y-2 text-sm">
                    <li><strong>Automatic Optimization:</strong> Converts images to WebP.</li>
                    <li><strong>Lazy Loading:</strong> Loads only when visible.</li>
                    <li><strong>Responsive:</strong> Resizes based on screen size.</li>
                    <li><strong>Prevents Layout Shift:</strong> Width/height avoids CLS.</li>
                    <li><strong>Next.js CDN:</strong> Faster image caching and delivery.</li>
                </ul>
            </div>

            {/* Code Section */}
            <div className="mt-10">
                <h2 className="text-xl font-bold text-purple-600 mb-2">🧾 Example Code</h2>

                <div className="mb-6">
                    <h3 className="font-semibold text-gray-700 mb-1">📁 Image Component Example:</h3>
                    <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
                        <code>{codeExample}</code>
                    </pre>
                </div>

                <div>
                    <h3 className="font-semibold text-gray-700 mb-1">⚙️ next.config.js Domain Setup:</h3>
                    <pre className="bg-gray-800 text-green-300 text-sm p-4 rounded-lg overflow-x-auto">
                        <code>{nextConfigExample}</code>
                    </pre>
                </div>
            </div>
        </div>
    );
};

export default ImageUse;
