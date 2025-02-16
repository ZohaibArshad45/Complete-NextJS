import React from 'react';
import Image from 'next/image';

const ImageUse = () => {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold">📸 Learn How to Use Images in Next.js</h1>

            <ol className="list-decimal ml-6 mt-2 text-gray-700">
                <li>📌 Import Image from <code>next/image</code></li>
                <li>📌 Add images in the <code>public</code> folder</li>
                <li>📌 Use the correct path in the <code>src</code> attribute</li>
            </ol>

            {/* ✅ Local Image Example */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold">🖼️ Using a Local Image</h2>
                <Image
                    src="/man.png"  // Image inside the "public" folder
                    alt="Local Image Example"
                    width={300}
                    height={300}
                    priority={true} // Loads this image faster
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* ✅ Online Image Example */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold text-yellow-500">🌍 Using an Online Image</h2>
                <p className="text-gray-600">
                    Make sure to **add the image domain** in <code>next.config.js</code> under <code>images.domains</code>
                </p>
                <Image
                    src="https://images.pexels.com/photos/20259613/pexels-photo-20259613/free-photo-of-model-in-dress-sitting-on-chair.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                    alt="Online Image Example"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md"
                />
            </div>

            {/* ✅ Explanation Section */}
            <div className="mt-8 bg-gray-800 p-4 rounded-lg text-white">
                <h2 className="text-xl font-bold">🚀 Why Use <code>next/image</code> Instead of &lt;img&gt;?</h2>
                <ul className="list-disc ml-6 mt-2">
                    <li>✅ <strong>Automatic Image Optimization:</strong> Converts images to **WebP** (smaller size, better quality).</li>
                    <li>✅ <strong>Lazy Loading:</strong> Loads images **only when visible**, reducing initial page load time.</li>
                    <li>✅ <strong>Responsive Images:</strong> Automatically resizes based on screen size.</li>
                    <li>✅ <strong>Prevents Layout Shift:</strong> Avoids **CLS issues** by requiring width & height.</li>
                    <li>✅ <strong>Next.js Image CDN:</strong> Caches images for **better performance**.</li>
                </ul>
            </div>
        </div>
    );
};

export default ImageUse;