import styles from './MailButton.module.css';

export default function MailButton({
  isDisabled, onClick, children, ...props
}) {
  return (
    <button onClick={onClick} disabled={isDisabled} type="button" className={isDisabled === true ? styles.DisabledButton : styles.Button} {...props}>{children}</button>
  );
}
