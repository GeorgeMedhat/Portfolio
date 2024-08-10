import { Button, Icon } from "@mui/material";
import Image from "next/image";
export default function IconButton(props){
    return (
        <Button variant="outlined" className=" rounded-full py-1">
                    <Image
                        src={props.src}
                        width={props.width|25}
                        height={props.height|25}
                        className="object-contain"
                    />
                </Button>
    )
}