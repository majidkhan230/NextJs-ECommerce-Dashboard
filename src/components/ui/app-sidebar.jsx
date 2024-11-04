"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import logoutAlert from "../logoutAlert";

import {
  Calendar,
  DollarSign,
  Home,
  ListOrderedIcon,
  LogOut,
  LogOutIcon,
  LucideShoppingBag,
  Search,
  Settings,
  User2,
} from "lucide-react";
import Link from "next/link";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebaseConfig";

export function AppSidebar() {
  const HandleLogout = () => {
    signOut(auth)
      .then(() => {
        toast.success("you have sucessfully logout!");
        Router.push("/");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);

        // An  happened.
      });
  };

  const items = [
    {
      title: "Dashboard",
      url: "/admin",
      icon: Home,
    },
    {
      title: "Products",
      url: "/products",
      icon: LucideShoppingBag,
    },
    {
      title: "Payments",
      url: "/payments",
      icon: Calendar,
    },
    {
      title: "Orders",
      url: "/orders",
      icon: ListOrderedIcon,
    },
    {
      title: "Enquiry",
      url: "/enquiry",
      icon: Search,
    },
    {
      title: "Marketing",
      url: "/marketing",
      icon: DollarSign,
    },
    {
      title: "Setting",
      url: "/setting",
      icon: Settings,
    },
    {
      title: "User",
      url: "/user",
      icon: User2,
    },
    // {
    //   title: "Logout",
    //   url: "/logout",
    //   icon: LogOut,
    // },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
            <SidebarMenuButton onClick={HandleLogout}>
              <LogOutIcon />
              <span>LogOut</span>
            </SidebarMenuButton>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
