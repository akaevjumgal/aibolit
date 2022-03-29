import styles from './Button.module.css';

export default function CustomButton({ onClick, children, ...props }) {
  return (
    <button onClick={onClick} className={styles.Button} {...props}>{children}</button>
  );
}
