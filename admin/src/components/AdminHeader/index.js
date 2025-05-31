import joohi_logo from "../../assets/joohi_logo.png"
import logo_2 from "../../assets/logo_2.png"
import "./index.css"

const AdminHeader=()=>{
    return(
    <div className="admin-header">
        <img src={joohi_logo} alt="logo1" className="admin-header-logo-1"/>
        <img src={logo_2} alt="logo2" className="admin-header-logo-2"/>
    </div>
    )
}
export default AdminHeader