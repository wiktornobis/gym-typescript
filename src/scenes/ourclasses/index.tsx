import {ClassType, SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";

const classes: Array<ClassType> = [
    {
        name: "Weight Training Classes",
        image: image1,
    },
    {
        name: "Yoga Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque dolores eaque enim exercitationem impedit iure laboriosam, nostrum quas tempora!",
        image: image2,
    },
    {
        name: "Ab CoreClasses",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque dolores eaque enim exercitationem impedit iure laboriosam, nostrum quas tempora!",
        image: image3,
    },
    {
        name: "Adventure Classes",
        image: image4,
    },
    {
        name: "Fitnes Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque dolores eaque enim exercitationem impedit iure laboriosam, nostrum quas tempora!",
        image: image5,
    },
    {
        name: "Training Classes",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur doloremque dolores eaque enim exercitationem impedit iure laboriosam, nostrum quas tempora!",
        image: image6,
    }
]

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
    return (
        <section id="ourclasses" className="w-full bg-primary-100 py-40">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>OUR CLASSES</HText>
                        <p className="py-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur cumque dicta eaque labore natus repudiandae sapiente tempora ut velit.</p>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {OurClasses.map((ite, index) => (
                            <Class />
                        ))}

                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default OurClasses;