"use client"
import "./page.css"

const InternalServerError = () => {
    return (
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>Oops!</h1>
                </div>
                <h2>500 - Internal Server Error!!</h2>
                <p>Sorry, this is not working properly, We now know about this mistake and are working to fix it.</p>
                <p>
                    In the meantime, here is what you can do:
                </p>
                <div>
                    <ul>
                        <li>Refresh the page(sometimes this helps)</li>
                        <li>Try again in 5 mins.</li>
                        <li>Email us at <span className="text-blue-800"><a href="mailto:example@domain.com">example@domain.com</a></span> and tell us what happend.</li>
                    </ul>
                </div>
                <br />
                <a className="homepage-btn" href="/">Go To Homepage</a>
            </div>
        </div>
    )
}

export default InternalServerError;