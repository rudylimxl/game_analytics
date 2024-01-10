import {Link} from 'react-router-dom'
import Button from '@mui/material/Button';
import { Paper, Typo } from '@mui/material';

const Login = () => {
    return ( 
        <div>
            <Paper className="login-menu-wrapper" elevation="6">
            <h1 className="login-text">Who are you?</h1>
            <div className='login-button-wrapper'>
            {/* <Link to={'/game'}><Button variant="contained">Player</Button></Link> */}
            <Link to={'/company'}><Button variant="contained">Retail Analytics Portal</Button></Link>
            </div>
            </Paper>
        </div>
     );
}
 
export default Login;