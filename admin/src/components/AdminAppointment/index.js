import { Component } from "react";
import AdminHeader from "../AdminHeader";
import {ThreeCircles} from 'react-loader-spinner'
import "./index.css";

class AppointmentsPage extends Component {
  state = {
    appointments: [],
    loading: true,
  };

  componentDidMount() {
    this.setState({
      appointments: [...this.props.appointments],
      loading: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.appointments !== this.props.appointments) {
      this.setState({
        appointments: [...this.props.appointments],
        loading: false,
      });
    }
  }

  handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?"
    );
    if (!confirmDelete) return;

    fetch(`https://henna-project.onrender.com/api/appointment/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Appointment deleted successfully");
          const updated = this.state.appointments.filter((a) => a._id !== id);
          this.setState({ appointments: updated });
        } else {
          alert("Failed to delete appointment");
        }
      })
      .catch((err) => {
        console.error("Error deleting appointment:", err);
      });
  };

  formatDate(dateString) {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  }

  render() {
    const { appointments, loading } = this.state;

    return (
      <div className="admin-home-container">
        <AdminHeader />
        <h2 className="admin-appointment-heading">Appointments</h2>

        {loading ? (
          <div className="spinner-container">
            <ThreeCircles color="#ffffff" height="50" width="50" />
          </div>
        ) : (
          <div className="appointments-container">
            {appointments.length === 0 ? (
              <p>No appointments found.</p>
            ) : (
              appointments.map((a, index) => (
                <div key={a._id || index} className="appointment-card">
                  <p><strong>Name:</strong> {a.name}</p>
                  <p><strong>Email:</strong> {a.email}</p>
                  <p><strong>Phone:</strong> {a.phone}</p>
                  <p><strong>Date:</strong> {this.formatDate(a.date)}</p>
                  <p><strong>Message:</strong> {a.message}</p>
                  <div className="delete-button-container">
                    <button
                      onClick={() => this.handleDelete(a._id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    );
  }
}

export default AppointmentsPage;


