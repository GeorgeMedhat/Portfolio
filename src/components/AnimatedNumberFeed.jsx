'use client';
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
ssr: false,
});


export default function AnimatedNumberFeed(props){

    return (
        <div className=" flex justify-between p-10 max-lg:flex-col items-center">
            <AnimatedNumbers
            animateToNumber={props.number}
            fontStyle={
                {
                    fontSize:"55px",
                    fontWeight:"900"
                }
            }
            transitions={(index) => ({
                type: "spring",
                duration: index + 0.3,
              })}
            />
            <p className=" info-text max-w-22 text-xl px-3 ">
                {props.text}
            </p>
        </div>
    )
}