import AsideBar from '@/components/dashboard-components/AsideBar'
import NavBar from '@/components/dashboard-components/NavBar'
import React, { ReactNode } from 'react'

function DashBoardLayout({ children }: { children: ReactNode }) {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <AsideBar />
            <div className="flex flex-col">
                <NavBar />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default DashBoardLayout