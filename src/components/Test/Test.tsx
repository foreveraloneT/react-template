import styles from './Test.module.scss'

export default function Test() {
  return (
    <div className={styles.Test}>
      <h1 className={styles['Test-topic']}>Test</h1>
    </div>
  )
}
