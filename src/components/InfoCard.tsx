import { InfoCard } from "@/lib/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Card = ({
  infoCard,
  cardId,
}: {
  infoCard: InfoCard;
  cardId: number;
}) => {
  return (
    <Link
      key={cardId}
      href={infoCard.href}
      prefetch={false}
      target={infoCard.href === "/blog" ? "_blank" : "_self"}
    >
      <div className="bg-gray-800 rounded-lg flex px-4 py-6 mt-4">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <div className="font-bold text-white text-2xl">
              {infoCard.title}
            </div>
            <div className="text-gray-400">{infoCard.description}</div>
          </div>
          <div className="flex items-center">
            <ArrowRight size={24} className="text-white" />
          </div>
        </div>
      </div>
    </Link>
  );
};
