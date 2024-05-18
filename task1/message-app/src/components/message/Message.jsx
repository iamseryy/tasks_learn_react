import styles from './message.module.scss'

export default function Message({message}) {
    return (
        <div>
            <h2 className={styles.message}>{message}</h2>
        </div>
    )
}