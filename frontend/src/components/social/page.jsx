"use client";
import { useEffect } from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  FileText,
  Video,
  ExternalLink,
  Calendar,
  Heart,
  MessageCircle,
  Share2,
  Play,
  Image,
} from "lucide-react";

// Using a simple X icon since we can't import from MUI
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: "X",
    icon: XIcon,
    color: "text-slate-600 group-hover:text-black",
    bgColor: "group-hover:bg-slate-50",
    url: "https://twitter.com/PKVarmaRanchi",
    mediatags: "@PKVarmaRanchi",
  },
  {
    name: "Facebook",
    icon: Facebook,
    color: "text-slate-600 group-hover:text-blue-600",
    bgColor: "group-hover:bg-blue-50",
    url: "https://facebook.com/pkvarmaranchi",
    mediatags: "@pkvarmaranchi",
  },
  {
    name: "Instagram",
    icon: Instagram,
    color: "text-slate-600 group-hover:text-pink-500",
    bgColor: "group-hover:bg-pink-50",
    url: "https://instagram.com/pkvarmaranchi",
    mediatags: "@pkvarmaranchi",
  },
  {
    name: "YouTube",
    icon: Youtube,
    color: "text-slate-600 group-hover:text-red-500",
    bgColor: "group-hover:bg-red-50",
    url: "https://youtube.com/@pkvbjp",
    mediatags: "@pkvbjp",
  },
];

const feedItems = [
  {
    type: "youtube",
    timestamp: "18th June 2025",
    content: (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
        <div className="p-4 md:p-6">
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Youtube className="w-5 h-5 text-red-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm md:text-base leading-tight">
                  प्रधानमंत्री नरेन्द्र मोदी के 11 वर्षों के कार्यकाल एवं
                  नेतृत्व में बदलता भारत। #11YearsOfGaribKalyan
                </p>
                <p className="text-sm text-slate-500 mt-1">18th June 2025</p>
              </div>
            </div>
            <Play className="w-5 h-5 text-slate-400 flex-shrink-0" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                className="rounded-lg"
                src="https://www.youtube.com/embed/MsDO6N1ExmU"
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 text-slate-500 hover:text-red-500 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
            <a
              href="https://www.youtube.com/watch?v=MsDO6N1ExmU"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span className="text-sm hidden sm:inline">Share</span>
            </a>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "article",
    timestamp: "1 day ago",
    content: (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
        <div className="p-4 md:p-6">
          <div className="flex items-start justify-between mb-4 gap-3">
            <div className="flex items-start gap-3 flex-1">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm md:text-base leading-tight">
                  संकल्प से सिद्धि तक 11 बेमिसाल वर्ष
                </p>
                <p className="text-sm text-slate-500 mt-1">Dr. Pradip Varma</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden mb-4">
            <div className="aspect-[16/9] w-full flex items-center justify-center">
              <div className="text-center">
                <img src="/images/Socials/Articles/Article-1.jpeg" alt="Article" className="w-full h-auto rounded-lg object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const Socials = () => {
  useEffect(() => {
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    document.body.appendChild(twitterScript);
    return () => {
      if (document.body.contains(twitterScript))
        document.body.removeChild(twitterScript);
    };
  }, []);

  return (
    <div className="min-h-screen mt-48 md:mt-[150px] bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row pt-8 md:pt-24 pb-16 gap-6 lg:gap-8 px-4">
        {/* Responsive Sidebar */}
        <aside className="w-full lg:w-80 lg:sticky lg:top-48 lg:self-start order-2 lg:order-1">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#F47621] to-[#f58a42] p-6 md:p-8">
              <div className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <Share2 className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  Socials
                </h2>
                <p className="text-white text-sm">Connect & Follow</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 md:gap-3 lg:gap-2">
                {socialLinks.map(
                  ({ name, icon: Icon, color, bgColor, url, mediatags }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-3 md:p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-slate-200 ${bgColor}`}>
                      <div className="flex items-center gap-2 md:gap-4 flex-1 min-w-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow flex-shrink-0">
                          <Icon
                            className={`w-4 h-4 md:w-5 md:h-5 ${color} transition-colors`}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <span className="text-slate-800 font-semibold text-xs md:text-sm block truncate">
                            {name}
                          </span>
                          <p className="text-slate-500 text-xs truncate lg:block hidden">
                            {mediatags}
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-3 h-3 md:w-4 md:h-4 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0" />
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Responsive Timeline */}
        <main className="flex-1 max-w-none lg:max-w-5xl order-1 lg:order-2">
          <div className="mb-6 md:mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">
              Social Feed
            </h1>
            <p className="text-slate-600 text-sm md:text-base">
              Latest updates from all platforms
            </p>
          </div>

          <div className="space-y-4 md:space-y-6">
            {feedItems.map((item, idx) => (
              <div
                key={idx}
                className="transform hover:scale-[1.005] lg:hover:scale-[1.01] transition-transform duration-200">
                {item.content}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Socials;
