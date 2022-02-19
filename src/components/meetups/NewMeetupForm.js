import Card from "../ui/Card";
import css from './NewMeetupForm.module.css'

function NewMeetupForm() {

    function submitHandler(event) {

    }

    return (
        <Card>
            <form className={css.form} onSubmit={submitHandler}>
                <div className={css.control}>
                    <label htmlFor="title">
                        Meetup Title
                    </label>
                    <input type="text" required id="title"/>
                </div>

                <div className={css.control}>
                    <label htmlFor="image">
                        Meetup Image
                    </label>
                    <input type="text" required id="image"/>
                </div>

                <div className={css.control}>
                    <label htmlFor="address">
                        Meetup Address
                    </label>
                    <input type="text" required id="address"/>
                </div>

                <div className={css.control}>
                    <label htmlFor="description">
                        Meetup Description
                    </label>
                    <textarea rows='5' required id="description"/>
                </div>

                <div className={css.actions}>
                    <button>Add Meetup</button>
                </div>

            </form>
        </Card>
    )
}

export default NewMeetupForm;