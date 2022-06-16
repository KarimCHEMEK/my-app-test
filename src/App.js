import { Toolbar } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { Sidebar } from './Components/Sidebar';
import { Users } from './Components/Users';
import { UserAlbums } from './Components/UserAlbums';

function App() {
	const [user, setUser] = useState(null);

	return (
		<Router basename={process.env.REACT_APP_ROUTER_BASE_NAME}>
			<Navbar setUser={setUser} />
			<Toolbar />
			{!!user ? <Sidebar user={user} /> : null}
			<Toolbar />

			<Route
				exact
				path='/'
				render={(props) => <Users {...props} setUser={(user) => setUser(user)} />}
			/>
			<Route exact path='/user/albums' render={(props) => <UserAlbums user={user} />} />
		</Router>
	);
}

export default App;
