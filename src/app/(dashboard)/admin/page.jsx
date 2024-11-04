'use client'
import Announcements from "@/components/Annoucement";
import CountChart from "@/components/CountChart";
import FinanceChart from "@/components/FinanceChart";
import ReactCalendar from "@/components/ReactCalendar";
import Image from "next/image";
import Link from "next/link";
import ECommerceChart from "@/components/ECommerceChart";
import MetricCard from "@/components/MetricCard";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Adminpage = () => {
  const { user, loading } = useAuth();
const router = useRouter();
  useEffect(() => {
    if (!loading) {
      if (!user) {
      
        router.push("/");
      }
    }
  }, [user,loading]);
  
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* LEFT */}
      <div className="left md:w-2/3  flex flex-col  gap-4">
        <div className="flex flex-wrap gap-4">
          <MetricCard metric="Orders" value="1,234" />
          <MetricCard metric="Revenue" value="$10,234" />
          <MetricCard metric="Customers" value="4,567" />
          <MetricCard metric="Products Sold" value="789" />
        </div>
        <div className="flex flex-col md:flex-row  gap-2 justify-between h-[300px]">
          <div className="md:w-1/3 max-h-full rounded-2xl bg-white flex  ">
            <CountChart />
          </div>
          <div className="mt-4 md:w-2/3 bg-white rounded-2xl">
            <ECommerceChart />
          </div>
        </div>
        <div className="m-4">
          <FinanceChart />
        </div>
      </div>
      {/* RIGHT */}
      <div className="right flex flex-col  md:w-1/3 ">
        <ReactCalendar />
        <div>
          <div className="flex justify-between">
            Events
            <Image src="/more.png" width={20} height={20}></Image>
          </div>
          <div>
            <Announcements />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
