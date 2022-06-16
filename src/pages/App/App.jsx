import './App.css';
import {useState} from "react";
// import NewOrderPage from "../NewOrderPage/NewOrderPage";
import AuthPage from "../AuthPage/AuthPage";
import About from "../About/About";
import Restaurant from "../Restaurant/Restaurant";
import RestaurantDetails from "../RestaurantDetails/RestaurantDetails";
// import Profile from "../Profile/Profile";
import {Route, Switch, Redirect} from "react-router-dom";
import { getUser } from '../../utilities/users-service';
// import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../components/NavBar/NavBar";

export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Switch>
                    <Route path="/about">
                        <About user={user}/>
                    </Route>
                    <Route path="/details/:id">
                        <RestaurantDetails/>
                    </Route>
                    <Route path="/restaurant">
                        
                        <Restaurant />
                    </Route>
                    <Redirect to="/restaurant"/>
                </Switch>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}