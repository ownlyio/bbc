import './Footer.css'

import ownlyLogo from '../../img/ownly/ownly-2.png'

function Footer() {
    return (
        <div className="w-100 bg-white">
			<div className="container py-4">
				<div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end">
					<div className="d-flex me-3 mb-4 mb-md-0">
						<div className="text-center pe-3 pe-md-5">
							<img src={ownlyLogo} className="mb-3" width="120" alt="Ownly" />
							<div className="text-color-1 font-size-90">Ownly © 2021</div>
						</div>
						
						<div className="d-flex flex-column justify-content-between ps-3 py-1" style={{"borderLeft": "3px solid #000000"}}>
							<div className="d-flex text-color-1 mb-2">
								<div className="text-center me-3" style={{"minWidth": "20px"}}>
									<i className="fas fa-map-marker-alt font-size-120"></i>
								</div>
								<div className="font-size-90">
									<div>SILI DELI: DOST-BU TBI Office, Ground floor,</div>
									<div>Student Union Bldg., Bicol University Main Campus,</div>
									<div>Daraga, Albay Sagpon</div>
								</div>
							</div>
							
							<div className="d-flex text-color-1 mb-2">
								<div className="text-center me-3" style={{"minWidth": "20px"}}>
									<i className="fas fa-envelope font-size-120"></i>
								</div>
								<div className="font-size-90">support@ownly.io</div>
							</div>
							
							<div className="d-flex text-color-1">
								<div className="text-center me-3" style={{"minWidth": "20px"}}>
									<i className="fas fa-phone font-size-120"></i>
								</div>
								<div className="font-size-90">0956 152 5513</div>
							</div>
						</div>
					</div>
					
					<div className="px-2 px-md-0">
						<div className="text-color-1 font-size-140 font-size-sm-160 mb-2">Connect with us:</div>
						<div className="font-size-170 font-size-sm-200 font-size-lg-160 font-size-xl-240 font-size-xl-260 line-height-140">
							<a href="https://twitter.com/ownlyio" className="text-decoration-none">
								<i className="fab fa-twitter text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://t.me/ownlyio" className="text-decoration-none">
								<i className="fab fa-telegram text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://discord.gg/qAyCCMrjww" className="text-decoration-none">
								<i className="fab fa-discord text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://github.com/ownlyio" className="text-decoration-none">
								<i className="fab fa-github text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://www.linkedin.com/company/ownlyio/" className="text-decoration-none">
								<i className="fab fa-linkedin-in text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://web.facebook.com/ownly.io" className="text-decoration-none">
								<i className="fab fa-facebook text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://www.instagram.com/ownly.io/" className="text-decoration-none">
								<i className="fab fa-instagram text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://www.reddit.com/r/Ownly/" className="text-decoration-none">
								<i className="fab fa-reddit text-color-4  e-2 me-sm-3"></i>
							</a>
							<a href="https://www.youtube.com/channel/UCdIU937air1FOk88-IWMEgQ" className="text-decoration-none">
								<i className="fab fa-youtube text-color-4 me-2 me-sm-3"></i>
							</a>
							<a href="https://www.tiktok.com/@ownlyio" className="text-decoration-none">
								<i className="fab fa-tiktok text-color-4"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Footer