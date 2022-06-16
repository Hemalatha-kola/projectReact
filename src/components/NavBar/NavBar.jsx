import {Link} from "react-router-dom";
import * as userService from '../../utilities/users-service';

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (<nav>
        <Link to="/About">About</Link>
        &nbsp; | &nbsp;
        <Link to="/restaurant">Restaurants</Link>
        &nbsp; | &nbsp;
        <span>Welcome {props.user.name}</span>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Logout</Link>
    </nav>);
}