import { Button, Icon } from "@mui/material";
import Image from "next/image";
import IconButton from "./IconButton";

export default function PersonalInfo() {
  return (
    <div className="flex flex-col justify-center items-center mt-20 ml-40 max-lg:m-auto">
      <div className="flex flex-row justify-center items-center gap-28 m-auto max-lg:flex-col ">
        <Image
          src="/assets/avatar.svg"
          alt="Avatar"
          width={300}
          height={300}
          className="object-contain"
        />
        <div className="m-auto">
          <p>Software Developer</p>
          <h1 className="font-extrabold text-[50px] leading-tight">
            Hello I'm,
            <br />
            <span className="text-[#4099FF]">George Medhat</span>
          </h1>
          <div className="mt-5 max-w-[500px]">
            <span className="info-text">
              i am a software developer with the motive to build a great
              interactive and responsive websites using my experience and skills
              in various programming languages.
            </span>
          </div>
          <div className="mt-6 flex justify-between gap-2 max-lg:flex-col">
                <Button variant="outlined" sx={{
                    color:'#4099FF',
                        }}className="rounded-3xl py-4 px-6">
                    <span className="flex justify-between gap-2">Download CV 
                        <Image
                        src='/assets/download.svg'
                        width={22}
                        height={22}/>
                    </span>
                </Button>
                <IconButton
                src='/assets/github.svg'
                />
                <IconButton
                src='/assets/linkedin.svg'
                />
                <IconButton
                src='/assets/email.svg'
                />
                <IconButton
                src='/assets/x.svg'
                width={25}
                height={25}
                />
          </div>
        </div>
      </div>
    </div>
  );
}
