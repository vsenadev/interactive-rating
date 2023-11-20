import styles from './Home.module.sass'

import {useState} from "react";
import Rating from "./Rating";
import Finish from "./Finish";

export default function Home(){
    const [selected, setSelected] = useState(0)
    const [finish, setFinish] = useState(false)

    return(
        <section className={styles.container}>
            {
                !finish ?
                    <Rating
                        selected={selected}
                        setSelected={setSelected}
                        setFinish={setFinish}
                    />
                    :
                    <Finish
                        selected={selected}
                    />
            }

        </section>
    )
}