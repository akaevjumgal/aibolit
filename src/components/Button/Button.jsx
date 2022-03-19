import styles from './Button.module.css'

export default function CustomButton({ children, ...props }) {
  return (
    <button className={styles.Button} {...props}>{children}</button>
  )
}