import React from 'react';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png"

type Props = {

}

function Navbar(props) {
    const flexBetween = "flex items-center justify-between";
    return <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>

                    </div>
                </div>
            </div>
        </nav>
}

export default Navbar;