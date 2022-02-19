import css from './MeetupItem.module.css';
import Card from "../ui/Card";

function MeetupItem(props) {
    const {image, title, description, address} = props.meetup;
    return (
        <li className={css.item} >
            <Card>
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
            </Card>
        </li>
    )
}

export default MeetupItem;