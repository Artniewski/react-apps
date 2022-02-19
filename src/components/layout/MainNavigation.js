import {Link} from "react-router-dom";

import cssClasses from './MainNavigation.module.css';
import FavoritesContext from "../../store/favorite-context";
import {useContext} from "react";

function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext)

    return (
        <header className={cssClasses.header}>
            <div className={cssClasses.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>Favorites</Link>
                        {favoriteCtx.totalFavorites !== 0 &&
                        <span className={cssClasses.badge}>{favoriteCtx.totalFavorites}</span>}
                    </li>
                </ul>
            </nav>
        </header>
    )

}

export default MainNavigation;