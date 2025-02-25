import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Card = () => {
  return (
    <Link href="/projects">
      <div className="bg-gray-800 rounded-lg flex px-4 py-6 mt-4">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="font-bold text-white text-2xl">Projects</div>
            <div className="text-gray-400">Explore my protfolio of apps</div>
          </div>
          <div className="flex items-center">
            <ArrowRight size={24} className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
};
