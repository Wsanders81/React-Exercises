import { Link } from 'react-router-dom';

import './VendingMachine.css';

const VendingMachine = () => {
	return (
		<div class="VendingMachine" >
			<h1>Vending Machine</h1>
			<h3>What would you like to eat today?</h3>
			<div className="link-container">
                <div >
				<Link exact to="/chips">
					Chips
				</Link>
                </div>
                <div>
				<Link exact to="/soda">
					Soda
				</Link>
                </div>
                <div>
				<Link exact to="/girlscoutcookies">
					Girl Scout Cookies
				</Link>
                </div>
			</div>
		</div>
	);
};

export default VendingMachine;
