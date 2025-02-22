'use client'
import { usePathname, useSearchParams } from 'next/navigation'

const ClientSideParams = () => {
  const pathname = usePathname();
  const search = useSearchParams();

  console.log("Pathname:", pathname);
  console.log("Search Params:", search.toString()); 
  console.log("Name:", search.get('name'));

  const pathnamecode = `'use client'
import { usePathname } from 'next/navigation'

const ClientSideParams = () => {
    const pathname = usePathname();
    console.log(pathname);

    return (
      <div>
        <h1>Client Side</h1>
      </div>
    );
}
export default ClientSideParams;`;

  const SerachParamcode = `const search = useSearchParams();
console.log(search.toString()); // Converts to a string
console.log(search.get('name')); // Gets value of 'name' param`;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-blue-600">📍 Client Side URL Handling</h1>

      {/* Pathname */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-green-600">🔹 Pathname: {pathname}</h2>
        <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto">
          <code>{pathnamecode}</code>
        </pre>
      </div>

      {/* Search Params */}
      <div className="mt-4">
        <h2 className="text-lg font-semibold text-purple-600">🔹 Search Params: {search.toString()}</h2>
        <p>🔍 Name Param: {search.get('name') || "No name found"}</p>
        <pre className="bg-gray-800 text-white p-3 rounded-lg overflow-x-auto">
          <code>{SerachParamcode}</code>
        </pre>
      </div>
    </div>
  );
};

export default ClientSideParams;
