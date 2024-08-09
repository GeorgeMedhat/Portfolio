
import Image from "next/image"

export default function PersonalInfo(){

    return(
    <div className="flex flex-col justify-center items-center ">
        <div className="flex flex-row justify-center items-center gap-20 m-auto ">
        <Image
          src="/assets/avatar.svg"
          alt="Avatar"
          width={300}
          height={300}
          className="object-contain p"
        />
        <div className="m-auto">
           <p>Software Developer</p>
           <h1 className="font-extrabold text-[50px] leading-tight">
            Hello I'm,<br/>
            <span className="text-[#4099FF]">
                George Medhat
            </span>
           </h1> 
           
        </div>
        </div>
        </div>
    )
}