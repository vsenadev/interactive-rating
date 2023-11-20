import styles from './Finish.module.sass'
import { ReactComponent as Telephone } from '../../../assets/img/illustration-thank-you.svg';
import grade from '../../../data/grade.json';

interface IFinish {
    selected: number
}

export default function Finish(props: IFinish){
    return(
        <div className={styles.container__box}>
            <Telephone/>
            <div className={styles.container__box__div}>
                <p>You selected {props.selected} out of {grade.length}</p>
            </div>
            <h1>Thank you!</h1>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
        </div>
    )
}