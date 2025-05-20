"use client";

import {
  Sidebar,
  SidebarCollapse,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  SidebarLogo,
} from "flowbite-react";
import {
  BedIcon,
  Calendar,
  ChartAreaIcon,
  Gem,
  Home,
  LogOut,
  ReceiptText,
  TicketCheckIcon,
  User,
} from "lucide-react";
import { RiVipCrownLine } from "react-icons/ri";

export default function AdminDashboard() {
  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example" className="h-screen">
      <SidebarItems className="h-full flex flex-col justify-between">
        <SidebarItemGroup>
          <img src="/src/assets/logo/Rumsay.png" alt="Logo" className="size-20"/>
          <SidebarItem href="#" icon={ChartAreaIcon}  className="hover:bg-primary">
            Dashboard
          </SidebarItem>
          <SidebarCollapse icon={Home} label="Room">
            <SidebarItem href="#" icon={Home}>
              All Room
            </SidebarItem>
            <SidebarItem href="#" icon={RiVipCrownLine}>
              VIP
            </SidebarItem>
            <SidebarItem href="#" icon={BedIcon}>
              Regular
            </SidebarItem>
            <SidebarItem href="#">Shipping</SidebarItem>
          </SidebarCollapse>
          <SidebarItem href="#" icon={Calendar}>
            Booking
          </SidebarItem>
          <SidebarItem href="#" icon={User}>
            Users
          </SidebarItem>
          <SidebarItem href="#" icon={ReceiptText}>
            Invoices
          </SidebarItem>
        </SidebarItemGroup>
        <SidebarItemGroup>
          <SidebarItem href="#" icon={LogOut} className="text-red-500 font-bold">
            Log Out
          </SidebarItem>
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
