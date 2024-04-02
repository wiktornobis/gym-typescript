import {SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const ContactUs = ({ setSelectedPage }: Props) => {
    return (
        <section id="contactus" className="mx-auto w-5/6 pt-24 pb-24">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
            >
                {/*HEADER*/}
                <motion.div
                    className="md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>

                </motion.div>

            </motion.div>
        </section>
    );
};

export default ContactUs;