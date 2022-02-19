import MeetupList from "../components/meetups/MeetupList";
import {useEffect, useState} from "react";


function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(
            'https://react-course-93438-default-rtdb.europe-west1.firebasedatabase.app/meetups.json'
        ).then(res => {
            return res.json();
        }).then(data => {
            const meetups = [];
            for (const key in data) {
                const meetup = {
                    id: key,
                    ...data[key]
                }
                meetups.push(meetup);
            }
            setIsLoading(false);
            setLoadedMeetups(meetups);
        });
    }, []);

    if (isLoading) {
        return <section>
            <p>Loading...</p>
        </section>
    }

    return (
        <section>
            <h1>All Meetups Page</h1>
            <MeetupList meetups={loadedMeetups}/>
        </section>
    )
}

export default AllMeetupsPage;