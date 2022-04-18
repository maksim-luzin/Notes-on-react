import styles from './styles.module.scss';

const HeadNotes = () => (
  <div className={styles.rowHead}>
    <div className={styles.icon}></div>
    <div className={styles.name}>Name</div>
    <div className={styles.created}>Created</div>
    <div className={styles.category}>Category</div>
    <div className={styles.content}>Content</div>
    <div className={styles.dates}>Dates</div>
    <div className={styles.edit}></div>
    <div className={styles.archive}></div>
    < div className={styles.delete}></div>
  </div >
)

export { HeadNotes };
