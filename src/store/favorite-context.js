const {createContext, useState} = require("react");


const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favouriteMeetup) => {
    },
    removeFavorite: (meetupId) => {
    },
    isFavorite: (meetupId) => {
    },
})

export function FavoritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);


    function addFavoritesHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.concat(favouriteMeetup);
        })
    }

    function removeFavoritesHandler(meetupId) {
        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        })
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }


    const context = {
        favorites: userFavourites,
        totalFavorites: userFavourites.length,
        addFavorite: addFavoritesHandler,
        removeFavorite: removeFavoritesHandler,
        isFavorite: itemIsFavoriteHandler,
    };


    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;