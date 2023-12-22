/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";*/

const Footer = () => (
	<footer>
		<div className="row justify-content-center mt-5">
			<div className="col col-6">
				<div className="row">
					<div className="col mb-2">
						{/*<FontAwesomeIcon icon={faFacebook} className="footer-icon me-2" />
						<FontAwesomeIcon icon={faInstagram} className="footer-icon me-2" />
						<FontAwesomeIcon icon={faTwitter} className="footer-icon me-2" />
<FontAwesomeIcon icon={faYoutube} className="footer-icon" />*/}
					</div>
				</div>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg-4">
					<div className="col">
						<div className="row">
							<div className="col footer-links">
								<p>
									<a href="#audio" alt="footer link" className="text-secondary text-decoration-none">
										Audio and Subtitles
									</a>
								</p>
								<p>
									<a href="#media" alt="footer link" className="text-secondary text-decoration-none">
										Media Center
									</a>
								</p>
								<p>
									<a href="#privacy" alt="footer link" className="text-secondary text-decoration-none">
										Privacy
									</a>
								</p>
								<p>
									<a href="#contact-us" alt="footer link" className="text-secondary text-decoration-none">
										Contact us
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<div className="col footer-links">
								<p>
									<a href="#audio" alt="footer link" className="text-secondary text-decoration-none">
										Audio Description
									</a>
								</p>
								<p>
									<a href="#investor" alt="footer link" className="text-secondary text-decoration-none">
										Investor Relations
									</a>
								</p>
								<p>
									<a href="#legal" alt="footer link" className="text-secondary text-decoration-none">
										Legal Notices
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<div className="col footer-links text-secondary text-decoration-none">
								<p>
									<a href="#help" alt="footer link" className="text-secondary text-decoration-none">
										Help Center
									</a>
								</p>
								<p>
									<a href="#jobs" alt="footer link" className="text-secondary text-decoration-none">
										Jobs
									</a>
								</p>
								<p>
									<a href="#cookie" alt="footer link" className="text-secondary text-decoration-none">
										Cookie Preferences
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="row">
							<div className="col footer-links text-secondary text-decoration-none">
								<p>
									<a href="#gift" alt="footer link" className="text-secondary text-decoration-none">
										Gift Cards
									</a>
								</p>
								<p>
									<a href="#terms" alt="footer link" className="text-secondary text-decoration-none">
										Terms of Use
									</a>
								</p>
								<p>
									<a href="#corporate" alt="footer link" className="text-secondary text-decoration-none">
										Corporate Information
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col mb-2">
						<button type="button" className="btn btn-sm footer-button rounded-0 mt-3 text-secondary">
							Service Code
						</button>
					</div>
				</div>
				<div className="row">
					<div className="col mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;
