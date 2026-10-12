import styles from './message.module.css';

const Message = (props) => {

    const styleClass = styles[props.type];
    const msgColor = props.type === "sent" ? {backgroundColor: props.theme} : null;

    return(
        <div className={styles.message} id={styleClass}>
            <div>
                <p style={msgColor} className={styles.content}>{props.children}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
    );
}

export default Message;