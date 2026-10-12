import styles from './input.module.css';

const Input = (props) => {

    return (
            <input className={styles.input} value={props.value} placeholder={props.placeholder} onFocus={props.onFocus} onBlur={props.onBlur} onChange={props.changed} onKeyDown={props.keyDown} maxLength={props.max}/>
    );
}

export default Input;