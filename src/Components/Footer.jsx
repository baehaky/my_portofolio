import { Typography } from "@material-tailwind/react";
export default function Footer() {
  return (
    <footer className="w-full bg-white p-5">
      <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center">
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              href="#about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Me
            </Typography>
          </li>
          <li>
            <Typography
              href="#project"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Project
            </Typography>
          </li>
          {/* <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Social Media
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact
            </Typography>
          </li> */}
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 Muhamad Baehaky
      </Typography>
    </footer>
  );
}
