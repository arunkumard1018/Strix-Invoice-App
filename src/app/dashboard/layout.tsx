import AsideBar from '@/components/dashboard-components/layout/AsideBar'
import NavBar from '@/components/dashboard-components/layout/NavBar'
import React from 'react'

function Dashboardlayout({ children }: { children: React.ReactNode }) {
    return (
       
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <AsideBar className='w-[20vw] fixed h-screen' />
                <div className="flex flex-col">
                    <NavBar className='fixed w-screen md:ml-[20vw] md:w-[80vw] z-50' />
                    <main className="mt-14 md:ml-[20vw] md:w-[80vw] md:pr-4">
                        {children}
                    </main>
                </div>
            </div>
    )
}

export default Dashboardlayout