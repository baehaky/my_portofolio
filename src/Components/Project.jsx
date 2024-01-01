import React from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";

export default function Project() {
  function projet1() {
    window.location.href = "https://egsys.netlify.app/";
  }
  function projet2() {
    window.location.href = "https://main--alivefinal.netlify.app/";
  }
  return (
    <section className="min-h-screen flex flex-col justify-center gap-x-5 items-center">
      <h1 className="text-3xl underline underline-offset-3 font-serif font-semibold hover:decoration-sky-500 mt-20">
        My Project
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-x-5">
        <Card className="mt-6 w-[80%] md:w-[30%] animate-border bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-2">
          <CardBody className="bg-white rounded-t-lg">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Seminar EggSys
            </Typography>
            <Typography>
              This project is a website project to introduce a seminar event
              that we have created. This seminar is part of the Seminars
              Information System course.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 bg-white rounded-b-lg">
            <Button onClick={projet1}>See Website</Button>
          </CardFooter>
        </Card>
        <Card className="mt-6 w-[80%] md:w-[30%] animate-border bg-white bg-gradient-to-r from-cyan-500 via-light-blue-800 to-indigo-800 bg-[length:400%_400%] p-2 ">
          <CardBody className="bg-white rounded-t-lg">
            <Typography variant="h5" color="blue-gray" className="mb-2">
              ALIVE
            </Typography>
            <Typography>
              This project is a website project to introduce a seminar event
              originating from an organisation at Universitas Multimedia
              Nusantara, Alive.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0 bg-white rounded-b-lg">
            <Button onClick={projet2}>SEE WEBSITE</Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
