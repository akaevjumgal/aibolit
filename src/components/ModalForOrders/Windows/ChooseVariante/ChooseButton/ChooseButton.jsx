import styles from './ChooseButton.module.css';

export default function ChooseButton({ children, ...props }) {
  return (
    <button type="button" className={styles.Button} {...props}>{children}</button>
  );
}
