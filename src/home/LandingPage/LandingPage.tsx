import Banner from '../Banner/Banner';
import ContactForm from '../Contact/Contact';
import Portfolio from '../Portfolio/Portfolio';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const LandingPage = () => {
	return (
		<>
			<Banner />
			<Services />
			<Portfolio />
			<Testimonials />
			<ContactForm />
		</>
	);
};
export default LandingPage;
