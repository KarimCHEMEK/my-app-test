import {
	AppBar,
	Toolbar,
	IconButton,
	Typography,
	styled,
	Hidden,
	Drawer,
	Box,
} from '@mui/material';
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Gap = styled(`div`)({
	flex: 1,
});

const Menu = styled(Typography)({
	menu: {
		padding: '10px',
	},
});

const TAppBar = styled(AppBar)(({ theme }) => ({
	zIndex: theme.zIndex.drawer + 1,
}));

const menuItems = [
	{
		component: 'Users',
		path: '/',
	}
];

const NavItems = ({ setUser }) => {
	return menuItems.map((item) => (
		<Link
			to={item.path}
			style={{ textDecoration: 'none', margin: '10px', color: '#1976d2' }}
			onClick={() => setUser(null)}
		>
			<Menu variant='h6'>{item.component}</Menu>
		</Link>
	));
};
export const Navbar = ({ setUser }) => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<TAppBar color='default'>
				<Toolbar>
					<Menu variant='h6'>REACT JS TEST QENVI</Menu>
					<Gap />
					<Hidden smDown>
						<NavItems setUser={setUser} />
					</Hidden>
					<Hidden mdUp>
						<Gap />
						<IconButton onClick={() => setOpen(true)}>
							<MenuIcon></MenuIcon>
						</IconButton>
					</Hidden>
				</Toolbar>
			</TAppBar>

			<Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
				<Box style={{ padding: '10px', margin: '10px' }}>
					<NavItems setUser={setUser} />
				</Box>
			</Drawer>
		</>
	);
};
