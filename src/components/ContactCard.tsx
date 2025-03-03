import { getStrapiMedia } from "@/app/util/strapi-media";
import { Contact } from "@/lib/types";
import { Mail } from "lucide-react";

export const ContactCard = ({ contactData }: { contactData: Contact }) => {
  return (
    <div className="bg-gray-800 text-white rounded-lg flex flex-col px-8 py-4">
      <div className="font-bold text-2xl">Personal Information</div>
      {/*Email Card*/}
      <div className="bg-gray-700 rounded-lg flex px-4 py-3 mt-4">
        <div className="flex items-center">
          <Mail className="text-blue-400" />
        </div>
        <div className="ml-4">
          <div className="text-sm text-gray-400">Email</div>
          <div className="text-white">{contactData.email}</div>
        </div>
      </div>

      {/*Resume Card*/}
      <div className="bg-gray-700 rounded-lg px-4 py-3 mt-4">
        <div>
          <div className="text-sm text-gray-400">Resume</div>
          <div>Download or view my CV</div>
          <div className="flex gap-3 mt-2">
            <a
              href={getStrapiMedia(contactData.resume.url) || undefined}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm"
            >
              <span>View</span>
            </a>
            <a
              href={getStrapiMedia(contactData.resume.url) || undefined}
              download="resume.pdf"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 transition-colors text-sm"
            >
              <span>Download</span>
            </a>
          </div>
        </div>
      </div>

      {/*Social Card*/}
      <div className="py-2 mt-4 mb-4">
        <div className="flex gap-4">
          {contactData.social.map((socialData) => {
            return (
              <a
                href={getStrapiMedia(socialData.href) || undefined}
                target="_blank"
                className="bg-gray-700 p-4 rounded-lg text-gray-400 flex flex-1 justify-center"
                key={socialData.id}
              >
                <img
                  className="text-gray-400"
                  src={getStrapiMedia(socialData.name?.url) || undefined}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
