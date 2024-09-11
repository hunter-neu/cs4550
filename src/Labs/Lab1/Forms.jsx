export default function Forms() {
    return (
        <div id="wd-forms">
            <h4>Form Elements</h4>
            <form id="wd-text-fields">
                <h5>Text Fields</h5>
                <label htmlFor="wd-text-fields-username">Username:</label>
                <input
                    name="username"
                    id="wd-text-fields-username"
                    placeholder="jdoe"
                /><br/>
                <label htmlFor="wd-text-fields-password">Password:</label>
                <input
                    name="password"
                    id="wd-text-fields-password"
                    type="password"
                    value="123@#$asd"
                /><br/>
                <label htmlFor="wd-text-fields-first-name">First name:</label>
                <input
                    name="first-name"
                    id="wd-text-fields-first-name"
                    title="John"
                /><br/>
                <label htmlFor="wd-text-fields-last-name">Last name:</label>
                <input
                    name="last-name"
                    id="wd-text-fields-last-name"
                    placeholder="wonderland"
                    title="Last name"
                /><br/>
                <button type="button">Submit</button>
            </form>
        </div>
    )
}