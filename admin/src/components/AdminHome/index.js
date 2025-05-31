import { Link } from "react-router-dom"; 
import AdminHeader from "../AdminHeader"
import "./index.css"
const AdminHome=()=>{
    return(
        <div className="admin-home-container">
            <AdminHeader/> 
            <ul className="admin-home-list-container">
                <li className="admin-home-list-item">
                    <Link to="/appointments" className="admin-home-list-link">
                       Appointments
                    </Link>
                </li>
                <li className="admin-home-list-item">
                    <Link to="/contactus" className="admin-home-list-link">
                       Contacts
                    </Link>
                </li>
                <li className="admin-home-list-item">
                    <Link to="/faqs" className="admin-home-list-link">
                       FAQS
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default AdminHome