import React from 'react'

function Features() {
    return (
        <div>
            <section className="bg-white py-8">
                {/* Header Section */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl font-bold">Try EasyInvoice for free, no credit card required.</h1>
                    <p className="text-gray-600 mt-2">No obligation. No gimmicks. Just 14 days of full access to all features.</p>
                    <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600">
                        Try EasyInvoice for FREE
                    </button>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    <FeatureCard
                        title="Look like a PRO"
                        description="Customise your invoices from the start. We never add watermarks or our logo to your invoices."
                        icon="/path/to/icon.svg"
                    />
                    <FeatureCard
                        title="All access APP"
                        description="Access our most sophisticated features like stock tracking and financial reports from day one."
                        icon="/path/to/icon.svg"
                    />
                    <FeatureCard
                        title="Run your business from any country"
                        description="Choose among 150+ currencies."
                        icon="/path/to/icon.svg"
                    />
                    <FeatureCard
                        title="Work on any device"
                        description="Give both our mobile and browser versions a try. Figure out which one's best for you."
                        icon="/path/to/icon.svg"
                    />
                </div>
            </section>
        </div>
    )
}


function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
    return (
        <div className="bg-gray-100 p-6 rounded-lg text-center">
            <img src={icon} alt="" className="mx-auto w-12 h-12 mb-4" />
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="text-gray-600 mt-2">{description}</p>
        </div>
    );
}

export default Features