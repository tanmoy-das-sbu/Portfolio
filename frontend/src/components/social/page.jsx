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
} from "lucide-react";
import XIcon from "@mui/icons-material/X";

const socialLinks = [
  {
    name: "X",
    icon: XIcon,
    color: "text-slate-600 group-hover:text-black-500",
    bgColor: "group-hover:bg-black-50",
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
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <Youtube className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  प्रधानमंत्री नरेन्द्र मोदी के 11 वर्षों के कार्यकाल एवं
                  नेतृत्व में बदलता भारत।  #11YearsOfGaribKalyan
                </p>
                <p className="text-sm text-slate-500">18th June 2025</p>
              </div>
            </div>
            <Play className="w-5 h-5 text-slate-400" />
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="500"
              className="rounded-lg"
              src="https://www.youtube.com/embed/MsDO6N1ExmU"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
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
            <button className="flex items-center gap-2 text-slate-500 hover:text-slate-700 transition-colors">
              <Share2 className="w-4 h-4" />

              <a
                href="https://www.youtube.com/watch?v=MsDO6N1ExmU"
                target="_blank"
                rel="noopener noreferrer">
                {" "}
                <span className="text-sm">Share</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    ),
  },
  //   {
  //     type: "tweet",
  //     timestamp: "2 hours ago",
  //     content: (
  //       <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300">
  //         <div className="p-6">
  //           <div className="flex items-center gap-3 mb-4">
  //             <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
  //               <XIcon className="w-5 h-5 text-black-500" />
  //             </div>
  //             <div>
  //               <p className="font-semibold text-slate-800">@PKVarmaRanchi</p>
  //               <p className="text-sm text-slate-500">Twitter Post</p>
  //             </div>
  //           </div>
  //           <blockquote
  //             class="twitter-tweet"
  //             data-media-max-width="1080"
  //             data-media-min-width="1080"
  //             data-cards="hidden"
  //             hide_media="true">
  //             <p lang="en" dir="ltr">
  //               Share your ideas and suggestions for PM Shri Narendra Modi&#39;s
  //               <a href="https://twitter.com/hashtag/MannKiBaat?src=hash&amp;ref_src=twsrc%5Etfw">
  //                 #MannKiBaat
  //               </a>{" "}
  //               programme airing on 29th June 2025.
  //               <br />
  //               <br />
  //               Call 1800-11-7800 or visit{" "}
  //               <a href="https://t.co/lpcjOuEBjY">https://t.co/lpcjOuEBjY</a>
  //               <br />
  //               <br />
  //               Phone lines shall remain open till 27th June 2025.
  //               <a href="https://twitter.com/BJP4India?ref_src=twsrc%5Etfw">
  //                 @BJP4India
  //               </a>{" "}
  //               <a href="https://twitter.com/BJP4Jharkhand?ref_src=twsrc%5Etfw">
  //                 @BJP4Jharkhand
  //               </a>{" "}
  //               <a href="https://twitter.com/narendramodi?ref_src=twsrc%5Etfw">
  //                 @narendramodi
  //               </a>{" "}
  //               <a href="https://twitter.com/blsanthosh?ref_src=twsrc%5Etfw">
  //                 @blsanthosh
  //               </a>{" "}
  //               <a href="https://t.co/ekKbeWlQcs">pic.twitter.com/ekKbeWlQcs</a>
  //             </p>{" "}
  //             &mdash; Pradip Kumar Varma (@PKVarmaRanchi){" "}
  //             <a href="https://twitter.com/PKVarmaRanchi/status/1935610061239566507?ref_src=twsrc%5Etfw">
  //               June 19, 2025
  //             </a>
  //           </blockquote>
  //           <script
  //             async
  //             src="https://platform.twitter.com/widgets.js"
  //             charset="utf-8"></script>
  //         </div>
  //       </div>
  //     ),
  //   },
  //   {
  //     type: "article",
  //     timestamp: "1 day ago",
  //     content: (
  //       <div className="bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-md transition-all duration-300 group">
  //         <div className="p-6">
  //           <div className="flex items-center gap-3 mb-4">
  //             <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
  //               <FileText className="w-5 h-5 text-emerald-600" />
  //             </div>
  //             <div>
  //               <p className="font-semibold text-slate-800">Blog Article</p>
  //               <p className="text-sm text-slate-500">1 day ago</p>
  //             </div>
  //           </div>
  //           <div className="space-y-3">
  //             <h3 className="text-xl font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">
  //               How Community Shapes Us
  //             </h3>
  //             <p className="text-slate-600 leading-relaxed">
  //               An inspiring look into how our local outreach impacts real lives.
  //               Discover the transformative power of community engagement and
  //               social responsibility.
  //             </p>
  //             <div className="flex items-center justify-between pt-4">
  //               <div className="flex items-center gap-4 text-sm text-slate-500">
  //                 <span className="flex items-center gap-1">
  //                   <Calendar className="w-4 h-4" />
  //                   Jan 15, 2025
  //                 </span>
  //                 <span>5 min read</span>
  //               </div>
  //               <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors">
  //                 Read More
  //                 <ExternalLink className="w-4 h-4" />
  //               </button>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     ),
  //   },
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
    <div className="min-h-screen mt-[150px] bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="container mx-auto flex pt-24 pb-16 gap-8 px-4 ">
        {/* Refined Sidebar */}
        <aside className="w-80 sticky top-48 self-start">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#F47621] to-[#f58a42] p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Socials</h2>
                <p className="text-white text-sm">Connect & Follow</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="p-6">
              <div className="space-y-2">
                {socialLinks.map(
                  ({ name, icon: Icon, color, bgColor, url, mediatags }) => (
                    <a
                      key={name}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-slate-100 transition-all duration-300 border border-transparent hover:border-slate-200 ${bgColor}`}>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                          <Icon
                            className={`w-5 h-5 ${color} transition-colors`}
                          />
                        </div>
                        <div>
                          <span className="text-slate-800 font-semibold text-sm">
                            {name}
                          </span>
                          <p className="text-slate-500 text-xs">
                           {mediatags} 
                          </p>
                        </div>
                      </div>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-slate-600 transition-colors" />
                    </a>
                  )
                )}
              </div>

              {/* Stats */}
              {/* <div className="mt-8 p-4 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-800 mb-3 text-sm">
                  Quick Stats
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">39.4K</p>
                    <p className="text-xs text-slate-500">Total mediatags</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-slate-800">1.2K</p>
                    <p className="text-xs text-slate-500">This Month</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </aside>

        {/* Refined Timeline */}
        <main className="flex-1 max-w-5xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-800 mb-2">
              Social Feed
            </h1>
            <p className="text-slate-600">Latest updates from all platforms</p>
          </div>

          <div className="space-y-6">
            {feedItems.map((item, idx) => (
              <div
                key={idx}
                className="transform hover:scale-[1.01] transition-transform duration-200">
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
