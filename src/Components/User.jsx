import { Grid, Paper, Typography } from '@material-ui/core';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { useHistory } from 'react-router-dom';

const style = {
	padding: '10px',
	borderRadius: '20px',
	backgroundImage: 'radial-gradient(circle, #ffffff, #deddde, #bfbcbe, #a29c9d, #857d7d)',
};

export const User = ({ user, setUser }) => {
	const history = useHistory();
	return (
		<Paper
			style={{
				borderTop: '10px solid #84DCCF',
				padding: '10px',
				margin: '5px',
			}}
		>
			<Grid
				container ='flex'
				justifyContent='space-between'
				alignItems='center'
				onClick={() => {
					setUser(user);
					history.push('user/albums');
				}}
			>
				<Grid item>
					<PersonOutlineIcon style={style} />
				</Grid>
				<Grid item style={{ marginRight: 'auto' }}>
					<Typography>{user.name}</Typography>
				</Grid>
			</Grid>
		</Paper>
	);
};
