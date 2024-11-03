import React from 'react'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/ui/app-sidebar"
import Navbar from '@/components/Navbar'
const Dashboardlayout = ({children}) => {
  return (
    <div>
       <SidebarProvider>
      <AppSidebar />
     
        <SidebarTrigger />
      <div className="content w-full bg-gray-100">
        <Navbar/>
      {children}
      </div>
    </SidebarProvider>
        </div>
  )
}

export default Dashboardlayout