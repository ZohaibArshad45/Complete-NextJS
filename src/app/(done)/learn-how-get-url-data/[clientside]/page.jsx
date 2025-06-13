'use client';
import { useParams, usePathname, useSearchParams } from 'next/navigation';

const ClientSideParams = () => {
  const pathname = usePathname();
  const search = useSearchParams();
  const uParams = useParams ()

  console.log('Pathname:', pathname);
  console.log('Search Params:', search.toString());
  console.log('Name:', search.get('name'));


  const useParamCode = `  import { useParamsrams } from 'next/navigation';
  const uParams = useParams ()
  <p>{uParams.clientside}</p>
`
  const pathnameCode = `'use client'
import { usePathname } from 'next/navigation';

const Component = () => {
  const pathname = usePathname();
  console.log(pathname);
  return <div>{pathname}</div>;
};
`;

  const searchParamCode = `import { useSearchParams } from 'next/navigation';

const search = useSearchParams();
console.log(search.toString()); // Converts to a string
console.log(search.get('name')); // Get specific query param

const name = search.get('name');
`;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10 space-y-10">
      <h1 className="text-3xl font-bold text-blue-700 text-center">
        📍 Client Side URL Handling in Next.js
      </h1>

      {/* Pathname Section */}
      <section className="space-y-3 max-w-3xl mx-auto bg-green-50 border border-green-200 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-green-700">
         🔹 You can also get url with useParams on client side
        </h2>
        <p>using useParams Url = {uParams.clientside}</p>
        <pre className="bg-gray-800 text-white p-4 rounded-xl overflow-x-auto text-sm whitespace-pre-wrap">
          <code>{useParamCode}</code>
        </pre>
        <h2 className="text-xl font-semibold text-green-700">
          🔹 Pathname: <span className="font-mono">{pathname}</span>
        </h2>
        <p className="text-gray-700">
          Use <code className="bg-gray-200 px-1 rounded">usePathname()</code> to get the current route path.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-xl overflow-x-auto text-sm whitespace-pre-wrap">
          <code>{pathnameCode}</code>
        </pre>
      </section>

      {/* Search Params Section */}
      <section className="space-y-3 max-w-3xl mx-auto bg-purple-50 border border-purple-200 p-6 rounded-xl shadow">
        <h2 className="text-xl font-semibold text-purple-700">
          🔹 Search Params: <span className="font-mono">{search.toString()}</span>
        </h2>
        <p className="text-gray-700">
          Name Param: <strong>{search.get('name') || 'No name found'}</strong>
        </p>
        <p className="text-gray-700">
          <code className="bg-gray-200 px-1 rounded">useSearchParams()</code> is used to read query strings on the client side.
        </p>
        <pre className="bg-gray-800 text-white p-4 rounded-xl overflow-x-auto text-sm whitespace-pre-wrap">
          <code>{searchParamCode}</code>
        </pre>
      </section>
    </div>
  );
};

export default ClientSideParams;
