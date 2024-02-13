import '../styles/pages.css'

export function ContactForm() {
    return (
        <div>
            <form>
                <label htmlFor="title">Name: </label>
                <input id="title" name="title" type="text" /><br/><br/>
                <label htmlFor="content">Email: </label>
                <textarea id="content" name="content"></textarea><br/>
                <button type="submit">Contact</button>
            </form>
        </div>
    )
}