import React from 'react'
import AdminSidebar from './AdminSidebar'
import DashboardHeader from './DashboardHeader'
const AdminLayout = ({ children }) => {
  return (
    <div className="">
       <div className="">
      {/* Sidebar */}
      <DashboardHeader />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-rows bg-customgreen  w-full">
        {/* Header */}
        <AdminSidebar />
    
        {/* Page Content */}
        <main className="p-6  flex-1 overflow-hidden  mt-[4rem] ">
          {children}
        </main>
      </div>
    </div>
    </div>
  )
}

export default AdminLayout
