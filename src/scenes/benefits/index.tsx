import { BenefitType, SelectedPage } from "@/shared/types.ts";
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon
} from "@heroicons/react/24/solid";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import Benefit from "@/scenes/benefits/Benefit.tsx";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/shared/ActionButton.tsx";

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dignissimos eos in natus quidem repellat repellendus sit. Natus, ratione?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dignissimos eos in natus quidem repellat repellendus sit. Natus, ratione?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi autem dignissimos eos in natus quidem repellat repellendus sit. Natus, ratione?"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.2 }
    }
}

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id="benefits"
            className="mx-auto min-h-full w-5/6 py-20"
        >
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <motion.div
                    className="md: my-5 md:w-3/5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x:-50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                   <HText>MORE THAN JUST GYM.</HText>
                    <p className="my-5 text-sm">
                        We provide world class fitness equipment, trainers and classes to
                        get you to your ultimate fitness goals with ease. We provide true
                        care into each and every member.
                    </p>
                </motion.div>
                {/*BENEFITS*/}
                <motion.div
                    className="mt-5 items-center justify-between gap-8 md:flex"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5}}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage}
                        />
                    ))}
                </motion.div>

                {/*GRAPHIC AND DESCRIPTION*/}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    <img
                        className="mx-auto"
                        src={BenefitsPageGraphic}
                        alt="benefits-page-grapgic"
                    />

                    {/*DESCRIPTION*/}
                    <div>
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                                <motion.div
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
                                        MILLIONS OF HAPPY MEMBERS GETTING{" "}
                                        <span className="text-primary-500">FIT</span>
                                    </HText>
                                </motion.div>
                            </div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            variants={{
                                hidden: { opacity: 0, x:50 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad alias, aperiam assumenda
                                debitis dolore ducimus et excepturi exercitationem, fuga fugiat fugit hic laudantium minima nihil
                                nostrum officiis quaerat quia quidem ratione recusandae reprehenderit sapiente tempora ut veniam
                                voluptas voluptatum.
                            </p>
                            <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus at debitis dicta esse incidunt
                                labore nihil obcaecati, ratione similique sit!
                            </p>
                            <div className="relative mt-16">
                                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[1] before:content-sparkles">
                                    <ActionButton setSelectedPage={setSelectedPage}>
                                        Join Now
                                    </ActionButton>

                                </div>

                            </div>
                        </motion.div>

                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Benefits;