import css from './MeetupItem.module.css';
import Card from "../ui/Card";
import {useContext} from "react";
import FavoritesContext from "../../store/favorite-context";

function MeetupItem(props) {
    const {id, image, title, description, address} = props.meetup;
    const favoriteCtx = useContext(FavoritesContext);

    const isFavorite = favoriteCtx.isFavorite(id);

    function toggleFavoriteStatusHandler() {
        if (isFavorite) {
            favoriteCtx.removeFavorite(id);
        } else {
            favoriteCtx.addFavorite({id, image, title, description, address})
        }
    }

    return (
        <li className={css.item}>
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
                    <button
                        onClick={toggleFavoriteStatusHandler}>{isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem;