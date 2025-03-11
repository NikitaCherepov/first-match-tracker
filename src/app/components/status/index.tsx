import styles from './status.module.scss'

interface StatusProps {
    type: 'Finished' | 'Ongoing' | 'Scheduled';
}

export default function Status({type}: StatusProps) {
        return (
            <div className={`${styles.container} ${type === 'Finished' ? styles.container_finished : type === "Ongoing" ? styles.container_live : styles.container_preparing}`}>
                {type === 'Finished' ? 'Finished' : type === "Ongoing" ? 'Live' : 'Match preparing'}
            </div>
        )
}