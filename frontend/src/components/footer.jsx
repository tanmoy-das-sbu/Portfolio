"use-client"
import './footer.css'

const Footer = () => {
    return(
        <div className="footer-main-div">
            <div className="container grid grid-cols-3 gap-4">
                <section className="footer-section text-white">
                    <h2>Quick Links</h2>
                    <hr />
                    <ul className='md:text-3lg text-lg flex flex-col flex-wrap quick-links-ul'>
                        <li><span>🔵</span> Home</li>
                        <li><span>🔵</span> Photo Gallery</li>
                        <li><span>🔵</span> Blog</li>
                        <li><span>🔵</span> Articles</li>
                        <li><span>🔵</span> Biography</li>
                        <li><span>🔵</span> Contact Us</li>
                    </ul>
                </section>
                <section className="footer-section">
                <h2>Subscribe Newsletter</h2>
                    <hr />
                </section>
                <section className="footer-section">
                <h2>Contact</h2>
                    <hr />
                </section>
            </div>
        </div>
    )
}

export default Footer;