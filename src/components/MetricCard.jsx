import Image from "next/image";

const MetricCard = ({ metric, value }) => {
  return (
    <div className="rounded-2xl odd:bg-blue-100 even:bg-orange-100 p-4 flex-1 min-w-[130px] shadow-md">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600">
          2024/25
        </span>
        <Image src="/more.png" alt="More options" width={20} height={20} />
      </div>

      <h1 className="text-2xl font-semibold my-4">{value}</h1>

      <h2 className="capitalize text-sm font-medium text-gray-500">{metric}</h2>
    </div>
  );
};

export default MetricCard;
