// import React from 'react';
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"
import Link from "@/scenes/navbar/Link.tsx";
import {SelectedPage} from "@/shared/types.ts";
import useMediaQuery from "@/hooks/useMediaQuery.ts";
import {Bars3Icon} from "@heroicons/react/24/solid";
import {useState} from "react";
import ActionButton from "@/shared/ActionButton.tsx";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({ selectedPage, setSelectedPage }:Props) => {
    const flexBetween = "flex items-center justify-between";
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    return <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        <img alt="logo" src={Logo} />

                        {isAboveMediumScreens ? (
                        <div className={`${flexBetween} w-full`}>
                            <div className={`${flexBetween} gap-8 text-sm`}>
                              <Link page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                              />
                              <Link page="Benefits"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                              />
                             <Link page="Our Classes"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                             />
                             <Link page="Contact Us"
                                   selectedPage={selectedPage}
                                   setSelectedPage={setSelectedPage}
                             />

                            </div>
                            <div className={`${flexBetween} gap-8`}>
                                <p>Sign In</p>
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Become a Member
                                </ActionButton>
                            </div>
                        </div>
                        )  : (
                            <button
                                className="rounded-full bg-secondary-500 p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                              <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                           )}
                    </div>
                </div>
            </div>
        </nav>
}

export default Navbar;