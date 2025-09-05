import { Benefits } from "./benefits";
import style from "./style.module.css";
import { Testimonial } from "./testimonial";


export const Main = () => {
    return(
        <main className={style.container}>
         <Benefits />
         <Testimonial />
        </main >
    )
}