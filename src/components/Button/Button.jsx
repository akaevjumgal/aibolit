import styles from './Button.module.css';

export default function CustomButton({ children }) {
  return (
    <button type="submit" className={styles.Button}>{children}</button>
  );
}
