'use client';
import { useParams } from 'next/navigation';

const Page = ({ params }) => {
    const clientParams = useParams();

    const code = `'use client'
import { useParams } from "next/navigation";

export default function Page({ params }) {
  const pn = useParams();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-700">Employee Detail Page</h1>
      <p>Server Side (params): {params.details}</p>
      <p>Client Side (useParams): {pn.details}</p>
    </div>
  );
}`

    return (
        <div className="p-6 space-y-4">
            <h1 className="text-2xl font-bold text-blue-700">👤 Employee Detail Page</h1>

            {/* ✅ Dynamic Parameter from Server Side */}
            <p className="text-green-700">
                <strong>Server Side (params):</strong> {params.details}
            </p>

            {/* ✅ Dynamic Parameter from Client Side */}
            <p className="text-purple-700">
                <strong>Client Side (useParams):</strong> {clientParams.details}
            </p>

            {/* Code Preview */}
            <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">📄 Code Example</h2>
                <pre className="bg-gray-900 text-white p-4 rounded-xl text-sm overflow-x-auto whitespace-pre-wrap">
                    <code>{code}</code>
                </pre>
            </div>
        </div>
    );
};

export default Page;
