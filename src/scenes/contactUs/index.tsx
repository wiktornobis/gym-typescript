import {SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";
import HText from "@/shared/HText.tsx";
import {useForm} from "react-hook-form";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};


const ContactUs = ({ setSelectedPage }: Props) => {
    const inputStyles = `w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

    const {
        register,
        trigger,
        formState: { errors }
    } = useForm();
    const onSubmit = async(e: any)=> {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }


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
                    <form
                        target="_blank"
                        onSubmit={onSubmit}
                        action="https://formsubmit.co/nobis171@wp.pl"
                        method="POST"
                    >
                        <input
                            className={inputStyles}
                            type="text"
                            placeholder="NAME"
                            {...register("name", {
                                required: true,
                                maxLength: 100,
                            })}
                        />
                        {errors.name && (
                            <p className="mt-1 text-primary-500">
                                {errors.name.type === "required" && "This field is required"}
                                {errors.name.type === "maxLength" && "This field is required"}
                            </p>
                        )}

                    </form>
                    <HText>
                        <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
                    </HText>

                </motion.div>

            </motion.div>
        </section>
    );
};

export default ContactUs;