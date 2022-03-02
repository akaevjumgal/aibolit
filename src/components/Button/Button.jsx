import styles from './Button.module.css'

export default function CustomButton({ children }) {
  return (
    <button className={styles.Button}>{children}</button>
  )
}