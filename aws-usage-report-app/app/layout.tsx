import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ThemeProvider} from '@/components/ThemeProvider'
import Navbar from '@/components/dashboard/navbar'
import SidebarNav from '@/components/dashboard/sidebar'
import React from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Cloud Resources Monitoring',
    description: 'Cloud Resources Monitoring',
}

const sidebarNavItems = [
    {
        title: "Home",
        href: "/",
        icon: "/icons8-dashboard-30.png"
    },
    {
        title: "EC2",
        href: "/ec2",
        icon: '/Resource-Icons_10232023/Res_Compute/Res_Amazon-EC2_Instance_48.svg'
    },
    {
        title: "S3",
        href: "/s3",
        icon: '/Resource-Icons_10232023/Res_Storage/Res_Amazon-Simple-Storage-Service_Bucket_48.svg'
    },
    {
        title: "DynamoDB",
        href: "/dynamodb",
        icon: '/Resource-Icons_10232023/Res_Database/Res_Amazon-DynamoDB_Amazon-DynamoDB-Accelerator_48.png'
    }
]

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={inter.className}>
            <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
            >
                <div className="border-b">
                    <div className="flex h-16 items-center px-4">
                        {/*<TeamSwitcher />*/}
                        <Navbar className='mx-6' />
                        <div className="ml-auto flex items-center space-x-4">
                            {/*<Search />*/}
                            {/*<UserNav />*/}
                        </div>
                    </div>
                </div>
                <div className="hidden space-y-6 p-10 pb-16 md:block">
                    <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                        <aside className="-mx-4 lg:w-1/6">
                            <SidebarNav items={sidebarNavItems} />
                        </aside>
                        <div className="flex-1 lg:max-w-2xl">{children}</div>
                    </div>
                </div>
            </ThemeProvider>
        </body>
        </html>
    )
}
