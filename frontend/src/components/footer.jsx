"use-client"
import './footer.css';
import { Input } from '@/components/ui/input';

const Footer = () => {

    return(
        <div className="footer-main-div">
            <div className="container grid md:grid-cols-3 grid-cols-1 gap-4">
                <section className="footer-section text-white">
                    <h2 className='font-bold'>Quick Links</h2>
                    <hr />
                    <br />
                    <ul className='md:text-3lg text-lg flex flex-col flex-wrap quick-links-ul'>
                        <li><span>&gt;&gt;</span> Home</li>
                        <li><span>&gt;&gt;</span> Photo Gallery</li>
                        <li><span>&gt;&gt;</span> Blog</li>
                        <li><span>&gt;&gt;</span> Articles</li>
                        <li><span>&gt;&gt;</span> Biography</li>
                        <li><span>&gt;&gt;</span> Contact Us</li>
                    </ul>
                </section>
                <section className="footer-section">
                    <h2 className='font-bold'>Subscribe Newsletter</h2>
                    <hr />
                    <br /> 
                    <div className="flex items-center">
                        <Input id="email" placeholder="Enter your Email" type="email" name="email" className="h-10" />
                        <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 h-10 text-sm flex justify-center items-center">Subscribe</button>
                    </div>
                </section>
                <section className="footer-section">
                    <h2 className='font-bold'>Contact</h2>
                    <hr />
                    <br />
                    <div className='h-40 contact-section'>
                        <div className='h-24'>
                            <p><span className='font-semibold'>Office: </span><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, quam?</span></p>
                            <p>Email: <u><a href="mailto:example@gmail.com">example@gmail.com</a></u></p>
                            <p>Tel.- <u><a href="tel:1234567890">1234567890</a></u></p>
                        </div>
                        <div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Footer;