 import NotificationComponent from './NotificationComponent';
import { ReactComponent as ProfileSVG } from '../SVGs/profile.svg';
import {ReactComponent as LogoSVG} from '../SVGs/tiger-filled.svg';

function NavbarComponent( {setPage, isLoggedin, setIsLoggedin} ) {   
	function goToProfile() {
		if(isLoggedin) {
			setPage("profile");
		}
		else {
			setPage("login");
		}
	}
    return( 
		<div className="flex justify-center items-center w-full h-16 bg-white fixed top-0">
			{/* flexbox to split the navbar into 3 sections */}
			<div className="flex max-w-7xl w-full items-center justify-between">
				{/* logo div */}
				<div className='w-[150px]'>
					<LogoSVG className="w-24"/>
				</div>
				{/* Donations, Volunteering, Organisations, also a flexbox */}
				<div className="flex font-medium text-center gap-24">
					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("donations")}
					>
						<h1>Donations</h1>
					</button>
					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("volunteering")}
					>
						<h1>Volunteering</h1>
					</button>

					<button
						className="cursor-pointer nav-item"
						onClick={() => setPage("organizations")}
					>
						<h1>Organizations</h1>
					</button>
					{/* Notifications, Profile, Logout, also a flexbox */}
				</div>
				<div className="flex font-medium items-center justify-end gap-4 w-[150px]">
						<NotificationComponent isLoggedin={isLoggedin} />
						<ProfileSVG className="h-7 w-7 cursor-pointer" onClick={goToProfile}/>
						{isLoggedin ? 
							<button 
							className="cursor-pointer nav-item"
							onClick={() => setIsLoggedin(false)}>
								<h1>Log Out</h1>
							</button>
						: 
							<button 
							className="cursor-pointer nav-item"
							onClick={() => setPage("login")}>
								<h1>Log in</h1>
							</button>
						}
					</div>
			</div>
		</div>
    );
}
export default NavbarComponent;