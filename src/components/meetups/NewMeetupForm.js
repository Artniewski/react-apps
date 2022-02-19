import Card from "../ui/Card";
import css from './NewMeetupForm.module.css'
import {useRef} from "react";

function NewMeetupForm(props) {
    const titleInputRef = useRef(null);
    const imageInputRef = useRef(null);
    const addressInputRef = useRef(null);
    const descriptionInputRef = useRef(null);

    function submitHandler(event) {
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;
        const enteredImage = imageInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            image: enteredImage,
            address: enteredAddress,
            description: enteredDescription
        }

        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.control}>
                    <label htmlFor="title">
                        Meetup Title
                    </label>
                    <input type="text" required id="title" ref={titleInputRef}/>
                </div>

                <div className={css.control}>
                    <label htmlFor="image">
                        Meetup Image
                    </label>
                    <input type="text" required id="image" ref={imageInputRef}/>
                </div>

                <div className={css.control}>
                    <label htmlFor="address">
                        Meetup Address
                    </label>
                    <input type="text" required id="address" ref={addressInputRef}/>
                </div>

                <div className={css.control}>
                    <label htmlFor="description">
                        Meetup Description
                    </label>
                    <textarea rows='5' required id="description" ref={descriptionInputRef}/>
                </div>

                <div className={css.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm;