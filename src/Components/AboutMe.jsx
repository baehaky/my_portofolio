import { CardHeader, cardBody, Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import profile from "../assets/profile.png";

export function AboutMe() {
  return (
    <div id="aboutme" className="min-h-screen flex flex-col lg:flex-row justify-center items-center">
      <motion.CardHeader
    
        animate={{ x: -200 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
        shadow={true}
        floated={false}
        className="rounded-full w-[50%] sm:w-[25%] lg:w-[20%] animate-border bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] flex justify-center items-center p-1"
      >
        <img
          src={profile}
          alt="Profile Picture"
          className="bg-white rounded-full"
        />
      </motion.CardHeader>
      <motion.cardBody
        animate={{ x: 200 }}
        className="mt-5 w-[90%] sm:w-[80%] lg:w-[50%] text-left lg:text-left sm:text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, x: 20 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2 underline font-bold"
        >
          Muhamad Baehaky
        </Typography>
        <Typography
          color="gray"
          className="mb-4 font-normal w-[90%] lg:w-[90%]"
        >
          I am an Information System student at Multimedia Nusantara University,
          actively combining academic learning with practical expertise.
          Certified in Python programming and data visualization, I excel in
          Laravel, React.js, and Bootstrap. My skills span data analysis,
          spreadsheets, JavaScript, and front-end development. Eager to apply my
          dynamic skill set and ongoing education to contribute effectively to
          innovative projects.
        </Typography>
        <div className="flex flex-wrap w-[90%] gap-2">
          <span className="animate-border inline-block rounded-full bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              HTML
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              JavaScript
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              CSS
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              Python
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              React JS
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              MySQL
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              Laravel
            </span>
          </span>
          <span className="animate-border inline-block rounded-full bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-1">
            <span className="block rounded-full bg-slate-900 px-5 py-2 font-bold text-black bg-white">
              Tailwind
            </span>
          </span>
        </div>
      </motion.cardBody>
    </div>
  );
}
