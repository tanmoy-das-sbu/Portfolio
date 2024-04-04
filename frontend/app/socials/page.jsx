"use client";
import "./page.css";
import FacebookIcon from "../../public/images/icons/facebook.svg";
import InstagramIcon from "../../public/images/icons/instagram.svg";
import TwitterIcon from "../../public/images/icons/twitter.svg";
import YoutubeIcon from "../../public/images/icons/youtube.svg";
import Image from "next/image";

const Socials = () => {
    return (
        <div className="mt-[250px]">
            <section className='container social-body mx-auto mt-8'>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                    <div className="social-innerdiv">
                        <div className="flex items-center gap-3 pb-6">
                            <Image src={TwitterIcon} className="h-10 w-10 shadow-2xl rounded-full" />
                            <h4 className="text-3xl font-semibold">Twitter</h4>
                        </div>
                        <div className="md:row-start-1 md:row-end-2">
                            <a className="twitter-timeline" data-width="500" data-height="500" data-theme="dark" href="https://twitter.com/PKVarmaRanchi?ref_src=twsrc%5Etfw">Tweets by PKVarmaRanchi</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                        </div>
                    </div>
                    <div className="social-innerdiv">
                        <div className="flex items-center gap-3 pb-6">
                            <Image src={FacebookIcon} className="h-10 w-10 shadow-2xl rounded-full" />
                            <h4 className="text-3xl font-semibold" style={{ color: "#097EEB" }}>Facebook</h4>
                        </div>
                        <div className="md:row-start-1 md:row-end-2">
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fpkvarmaranchi&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="500px" scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
                            </iframe>
                        </div>
                    </div>
                    <div className="social-innerdiv">
                        <div className="flex items-center gap-3 pb-6">
                            <Image src={InstagramIcon} className="h-10 w-10 shadow-2xl rounded-full" />
                            <h4 className="text-3xl font-semibold" style={{ color: "#E4405F" }}>Instagram</h4>
                        </div>
                        <div className="md:row-start-2 md:row-end-3">
                            <iframe
                                src="https://www.instagram.com/pkvarmaranchi/embed"
                                width="500px"
                                height="500px"
                                frameBorder="0"
                                scrolling="yes"
                                allowtransparency="true">
                            </iframe>
                        </div>
                    </div>
                    <div className="social-innerdiv">
                        <div className="flex items-center gap-3 pb-6">
                            <Image src={YoutubeIcon} className="h-10 w-10 shadow-2xl rounded-full" />
                            <h4 className="text-3xl font-semibold" style={{ color: "#BA202E" }}>Youtube</h4>
                        </div>
                        <div className="md:row-start-2 md:row-end-3">
                            <iframe
                                src="https://www.youtube.com/embed"
                                width="500px"
                                height="500px"
                                frameBorder="0"
                                scrolling="yes"
                                allowtransparency="true"
                                className="rounded-xl p-2.5 shadow-xl">
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Socials;