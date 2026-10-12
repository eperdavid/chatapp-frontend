import styles from './button.module.css';

const Button = (props) => (
    <button style={{backgroundColor: props.theme, opacity: props.disabled ? '0.5' : '1'}} className={styles.button} onClick={props.clicked} disabled={props.disabled}>{props.children}</button>
)

export default Button;