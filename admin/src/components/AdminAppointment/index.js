import { Component } from "react";
import "./index.css"


class AppointmentsPage extends Component {
  state = {
    appointments: [...this.props.appointments],
  };
  componentDidUpdate(prevProps) {
    if (prevProps.appointments !== this.props.appointments) {
      this.setState({ appointments: [...this.props.appointments] });
    }
  }
  handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this appointment?');
    if (!confirmDelete) return;

    fetch(`https://henna-project.onrender.com/api/appointment/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          alert('Appointment deleted successfully');
          const updated = this.state.appointments.filter((a) => a._id !== id);
          this.setState({ appointments: updated });
        } else {
          alert('Failed to delete appointment');
        }
      })
      .catch((err) => {
        console.error('Error deleting appointment:', err);
      });
  };

  render() {
     console.log('Appointments in state:', this.state.appointments);
    return (
      <div className="appointments-page">
        <h2>Appointments</h2>
        <div className="appointments-container">
          {this.state.appointments.map((a, index) => (
            <div key={a._id || index} className="appointment-card">
              <p><strong>Name:</strong> {a.name}</p>
              <p><strong>Email:</strong> {a.email}</p>
              <p><strong>Phone:</strong> {a.phone}</p>
              <p><strong>Date:</strong> {a.date}</p>
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
          ))}
        </div>
      </div>
    );
  }
}

export default AppointmentsPage;
