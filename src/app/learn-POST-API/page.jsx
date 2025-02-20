import React from 'react'
import Link from 'next/link'

const LearnPOSTAPI = () => {
  const postroute = `
  import { NextResponse } from "next/server"
  export const POST = () => {
      return NextResponse.json([{ id: 2, name: 'Zohaib', city: 'bwp' }])
  }`
  return (
    <div>
      <h1 className="text-2xl font-bold text-blue-600">📡 Learn POST API in Next.js</h1>
      <p className="text-gray-700 mt-4">✅ This API receives data using a POST request.</p>

      {/* API Route Link */}
      <Link href="/api/post-route"
        className="inline-block px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition mt-4"
      > 🔗 Visit POST API Route
      </Link>

      <p className="text-gray-600 mt-2">📌 To test, copy the URL and paste it in **Postman** with a POST request.</p>
      <br />

      <pre className="bg-gray-800 text-white w-full rounded-lg p-2 overflow-x-auto">
        Code : 📋
        <code>{postroute}</code>
      </pre>
    </div>
  )
}

export default LearnPOSTAPI