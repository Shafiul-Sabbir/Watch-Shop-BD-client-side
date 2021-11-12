import React  from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import "./Dashboard.css";
import './DeshBoard.css'
import AddService from "../../../Pages/AddService/AddService";
import Reviwe from "../../../Pages/Reviwe/Reviwe";

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth()
    // const [isAdmi, setIsAdmin] = useState(false);
    return (
        <div>
        <div className="dashboard-container ">
          <div className="row">
            <div className="col-md-3 ">
              <div className="dashboard">
                <h5>Dashboard</h5>
                <Link to={`${url}`}>
                  <li className="dashboard-menu mt-5">M</li>
                </Link>
  
                <Link to={`${url}/BookingList`}>
                  <li className="dashboard-menu mt-5">Booking list</li>
                </Link>
  
                <Link to={`${url}/reviwe`}>
                  <li className="dashboard-menu mt-5">Review</li>
                </Link>
                <div className="admin-dashboard">
                  <li className="dashboard-menu mt-5">Orders</li>
  
                   
                    <Link to={`${url}/addservice`}>
                      <li className="dashboard-menu">Add Product</li>
                    </Link>
                  
                  
                    <li className="dashboard-menu">Make Admin</li>
                  
                 
                    {/* <li className="dashboard-menu">Manage Service</li> */}
                 
                </div>
              </div>
            </div>
            <div className="col-md-9">
             <Switch>
                <Route path={`${path}/addservice`}>
              <AddService></AddService>
              </Route>
                <Route path={`${path}/reviwe`}>
                <Reviwe></Reviwe>
              </Route>
              </Switch>
            


{/*<Route exact path={path}>
                  <MyBookings></MyBookings>
                </Route>
                <Route exact path={`${path}/review`}>
                  <Review></Review>
                </Route>
                <Route exact path={`${path}/BookingList`}>
                  <MyBookings></MyBookings>
                </Route>
                <Route exact path={`${path}/makeAdmin`}>
                  <MakeAdmin></MakeAdmin>
                </Route>
                <Route exact path={`${path}/addService`}>
                  <AddServices></AddServices>
                </Route>
                <Route exact path={`${path}/manageServices`}>
                  <ManageServices></ManageServices>
                </Route> */}
              {/* </Switch> } */}
            </div>
          </div>
        </div>
      </div>
    );
};

export default DashBoard;