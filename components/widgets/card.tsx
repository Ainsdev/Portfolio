import { motion } from 'framer-motion';

const CardWithGlow = () => {
    const cardVariants = {
        hover: {
            scale: 1.05,
        },
        initial: {
            scale: 1,
        },
    };

    const glowVariants = {
        hover: {
            opacity: 0.8,
        },
        initial: {
            scale: 1.05,
            opacity: 0,
        },
    };

    return (
        <motion.div className='relative h-[120px] w-[300px]' initial whileHover='hover'>
            <motion.div className='absolute left-0 top-0 h-full w-full rounded-xl bg-gradient-to-r from-pink-500 to-blue-500     blur-3xl'
                variants={glowVariants}
                transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                }}
            />
            <motion.div className='relative mb-0 h-full overflow-hidden rounded-xl bg-blue-500 px-36 py-24'
                variants={cardVariants}
                transition={{
                    ease: 'easeOut',
                    delay: 0.15,
                    duration: 0.5,
                }}
            >
                <div className='flex h-16 items-center justify-center'>✨ Hover me ✨</div>
            </motion.div>
        </motion.div>
    );
};

export default CardWithGlow;