import styles from './card.module.css';

const Card = (props) => {


    let classes = [styles.card];
    let dotColor = "";
    let selectedCardColor = "";

    if(props.selected)
    {
        classes.push(styles.active);
        selectedCardColor = props.theme;
    }

    if(props.new)
    {
        classes.push(styles.new);
        dotColor = props.theme;
    }

    if(props.offline)
    {
        classes.push(styles.offline)
    }

    return(
        <div className={classes.join(' ')} style={{gap: props.children ? "1.5rem" : "0rem", backgroundColor: selectedCardColor}} onClick={props.clicked}>
            <div className={styles.flex}><span className={styles.name}>{props.name}</span>{(props.new || props.offline) ? <div style={{backgroundColor: dotColor}} className={styles.dot}></div> : ''}</div>
            <span className={styles.message}>{props.children}</span>
        </div>
    );
}

export default Card;