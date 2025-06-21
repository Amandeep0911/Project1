import React from 'react'

const Contact = () => {
  return (
    <div>
      <div className="flex h-screen">
        <div className="w-1/2 bg-blue-100 p-10 flex flex-col justify-center items-start">
          <h2 className="text-3xl font-bold mb-4">Get in Touch with KyaBaat Farms</h2>
          <p className="mb-6 text-gray-600">Feel free to reach out for collaborations or just a friendly hello 👋</p>
          <div className="space-y-2">
            <p>📧 email@example.com</p>
            <p>📞 +91-9876543210</p>
          </div>
        </div>
        <div className="w-1/2 bg-white p-10 flex items-center">
          <form className="w-full max-w-md space-y-4">
            <input type="text" placeholder="Name" className="w-full border p-2 rounded" />
            <input type="mobile no." placeholder="Mobile No." className="w-full border p-2 rounded" />
            <input type="email" placeholder="Email" className="w-full border p-2 rounded" />
            <textarea placeholder="Message" rows="4" className="w-full border p-2 rounded" />
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
