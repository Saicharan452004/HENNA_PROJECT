import { Component } from "react";
import AdminHeader from "../AdminHeader";
import "./index.css";

class ContactUsPage extends Component {
  state = {
    contacts: []
  };

  componentDidMount() {
    this.setState({
      contacts: [...this.props.contacts]
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.contacts !== this.props.contacts) {
      this.setState({
        contacts: [...this.props.contacts]
      });
    }
  }

  handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact message?");
    if (!confirmDelete) return;

    fetch(`https://henna-project.onrender.com/api/contact/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("Contact message deleted successfully");
          const updated = this.state.contacts.filter((c) => c._id !== id);
          this.setState({ contacts: updated });
        } else {
          alert("Failed to delete contact message");
        }
      })
      .catch((err) => {
        console.error("Error deleting contact:", err);
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
    const { contacts, loading } = this.state;

    return (
      <div className="admin-home-container">
        <AdminHeader />
        <h2 className="admin-appointment-heading">Contact Messages</h2>
          <div className="appointments-container">
            {contacts.length === 0 ? (
              <p>No contact messages found.</p>
            ) : (
              contacts.map((c, index) => (
                <div key={c._id || index} className="appointment-card">
                  <p><strong>Name:</strong> {c.name}</p>
                  <p><strong>Email:</strong> {c.email}</p>
                  <p><strong>Subject:</strong> {c.subject}</p>
                  <p><strong>Message:</strong> {c.message}</p>
                  <p><strong>Date Submitted:</strong> {this.formatDate(c.dateSubmitted)}</p>
                  <div className="delete-button-container">
                    <button
                      onClick={() => this.handleDelete(c._id)}
                      className="delete-button"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
      </div>
    );
  }
}

export default ContactUsPage;
