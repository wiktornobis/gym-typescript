
import { SelectedPage } from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import ActionButton from "@/shared/ActionButton.tsx";
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");

    return (
        <section
            id="home"
            className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
        >
        {/* IMAGE MAIN HEADER */}
        <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
            <div className="z-10 mt-32 md:basis-3/5">
                <div className="md:-mt-20">
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img src={HomePageText} alt="home-page-text" />
                        </div>
                    </div>
                    <p className="mt-8 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Accusantium aliquam atque blanditiis culpa enim
                        esse eum, fugiat illum laboriosam molestias numquam quam quia, quibusdam reprehenderit voluptatum? Adipisci culpa odio quisquam!
                    </p>
                </div>
                <div className="mt-8 flex items-center gap-8 md:justify-start">
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join now
                    </ActionButton>
                    <AnchorLink
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                        href={`#${SelectedPage.ContactUs}`}
                    >
                        <p>Learn More</p>
                    </AnchorLink>
                </div>
            </div>
            <div className="flex basis-3/5 justify-center md:z-10
                    md:ml-40 md:mt-16 md:justify-items-end">
                <img src={HomePageGraphic} alt="home-pageGraphic" />
            </div>
        </div>
            {isAboveMediumScreen && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Home;

