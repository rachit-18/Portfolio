import { animate, motion } from "framer-motion"
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
}

const reverseindex = (index) => {
    const totalsteps = 6;
    return totalsteps - index - 1;
}
const stairs = () => {
    return (
        <>
    {[...Array(6)].map((_, index) => {
        return (
            <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    delay: reverseindex(index) * 0.1,
                }}
                className="w-full h-full bg-white relative"
            />
        );
    })}
        </>
    );
};

export default stairs