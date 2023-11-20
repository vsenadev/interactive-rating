import styles from "./Rating.module.sass";
import grades from "../../../data/grade.json";
import React from "react";
import { ReactComponent as Star } from '../../../assets/img/icon-star.svg'

interface IRating{
    selected: number
    setSelected: React.Dispatch<React.SetStateAction<number>>
    setFinish: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Rating(props: IRating){
    return(
        <div className={styles.container__box}>
            <div className={styles.container__box_img}>
                <Star/>
            </div>
            <h1 className={styles.container__box_title}>How did we do?</h1>
            <p className={styles.container__box_text}>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <div className={styles.container__box_div}>
                {
                    grades.map((element: number) => (
                        <button key={element} style={props.selected === element ? {backgroundColor: "hsl(216, 12%, 54%)"} : {}} onClick={() => props.setSelected(element)}>{element}</button>
                    ))
                }
            </div>
            <button className={styles.container__box_button} disabled={props.selected === 0} onClick={() => props.setFinish(true)}>SUBMIT</button>
        </div>
    )
}