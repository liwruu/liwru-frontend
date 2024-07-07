import Footer from '../../components/Footer/Footer';
import './aboutPage.css';

export default function ErrorPage() {
    return (
        <>
            <div className="about-us">
                <h1 className='head-about'>About Us</h1>
                <div className="about-us-content">
                    <p className='message-about'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero,
                        a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod.
                    </p>
                    <p className='message-about'>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.
                    </p>
                </div>
            </div>
            <Footer/>
        </>
    );
}