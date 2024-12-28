import { Helmet } from "react-helmet-async";
import Banner from "../Component/Banner/Banner";
import { NavLink, Outlet, useLocation } from "react-router-dom";


const Dashboard = () => {
   const location = useLocation() 

   
    // const [addItem, setAddItem] = useState([])

    // useEffect(() =>{
    //     const localData = getAllData()
    //     setAddItem(localData)
    // },[])
    
    return (
        <div>
            <Helmet>
              <title>Dashboard</title>
            </Helmet>
             <Banner
             title={"Dashboard"}
             subtitle={
               "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
             }
             btn1 = {<NavLink to='/dashboard'>Cart</NavLink>}
             btn2 = {<NavLink to='wishlist'>Wishlist</NavLink>}
           ></Banner>
           <div>
           <div className="grid gap-4">
           </div>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;