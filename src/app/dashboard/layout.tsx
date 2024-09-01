import AsideBar from '@/components/dashboard-components/layout/AsideBar'
import NavBar from '@/components/dashboard-components/layout/NavBar'
import { ThemeProvider } from '@/components/providers/ThemeProvider'
import { ReactNode } from 'react'

function DashBoardLayout({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
                <AsideBar className='w-[20vw] fixed h-screen'/>
                <div className="flex flex-col">
                    <NavBar className='fixed w-screen md:ml-[20vw] md:w-[80vw]'/>
                    <main className="mt-14 md:ml-[20vw] md:w-[80vw] -z-50 md:pr-4">
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    )
}

export default DashBoardLayout