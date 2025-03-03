import { ContactCard } from "@/components/ContactCard";
import { Card } from "@/components/InfoCard";
import { getHomePageData } from "@/data/loaders";
import { HomePage } from "@/lib/types";
import { notFound } from "next/navigation";

const homePageDataLoader = async () => {
  const data = await getHomePageData();
  if (!data || data.error) {
    notFound();
  }

  return data.data;
};

export default async function Home() {
  const homePageData: HomePage = await homePageDataLoader();
  return (
    <div className="min-h-screen">
      <div className="px-8 pt-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <div className="text-5xl font-bold text-white">
              {homePageData.name}
            </div>
            <div className="text-xl text-gray-400">
              {homePageData.description}
            </div>
          </div>
          <ContactCard contactData={homePageData.contact} />
          {homePageData.infoCard &&
            homePageData.infoCard.map((info, index) => {
              return <Card key={index} infoCard={info} />;
            })}
        </div>
      </div>
    </div>
  );
}
