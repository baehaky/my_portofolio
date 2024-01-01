import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <section className="min-h-screen flex justify-center items-center align-middle">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="animate-border w-[450px] h-[450px] rounded-full  bg-[length:400%_400%] bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 blur-[95px]"
      ></motion.div>
      <motion.div  initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 6 }} className="absolute flex flex-col text-center justify-center z-30 gap-y-5">
        <h1 className="text-white font-serif text-4xl font-semibold">
          Muhamad Baehaky
        </h1>
        <h1 className="text-white font-serif text-4xl font-medium">
          <Typewriter
            options={{
              strings: ["Front End Developer", "Data Analysis", "Student"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </motion.div>
    </section>
  );
}
