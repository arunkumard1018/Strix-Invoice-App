import React from 'react'

function FooterComponent() {
  return (
    <div>
        {/* Footer Section */}
        <footer className="bg-blue-900 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h2 className="text-xl font-bold">Strix Invoice</h2>
              <p className="mt-2">Invoicing for small business owners. Focus on running your business, not your accounting.</p>
              <div className="flex mt-4 space-x-2">
                <img src="/path/to/appstore-logo.png" alt="App Store" className="w-24" />
                <img src="/path/to/googleplay-logo.png" alt="Google Play" className="w-24" />
              </div>
            </div>
            {/* Other columns for Features, Support, Explore */}
            <div>
              <h3 className="font-bold">Features</h3>
              <ul className="mt-2 space-y-1">
                <li>Invoices</li>
                <li>Estimates</li>
                <li>Statements</li>
                {/* Add more features */}
              </ul>
            </div>

            <div>
              <h3 className="font-bold">Support</h3>
              <ul className="mt-2 space-y-1">
                <li>Pricing</li>
                <li>About Us</li>
                <li>Blog</li>
                {/* Add more support links */}
              </ul>
            </div>
          </div>
        </footer>
    </div>
  )
}


export default FooterComponent