import css from './MeetupList.module.css';
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
    return (
        <ul className={css.list}>
            {props.meetups.map(meetup => <MeetupItem meetup={meetup}/>)}
        </ul>
    )
}

export default MeetupList;