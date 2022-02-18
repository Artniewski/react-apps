import css from './MeetupItem.module.css';

function MeetupItem(props) {
    const {id, image, title, description, address} = props.meetup;
    return (
        <li className={css.item} key={id}>
            <div className={css.image}>
                <img src={image} alt={title}/>
            </div>
            <div className={css.content}>
                <h3>{title}</h3>
                <address>{address}</address>
                <p>{description}</p>
            </div>
            <div className={css.actions}>
                <button>To Favorites</button>
            </div>
        </li>
    )
}

export default MeetupItem;