import { Component } from "react";
import AdminHeader from "../AdminHeader";
import { Circles } from "react-loader-spinner";
import "./index.css";

class AdminFaqs extends Component {
  state = {
    faqs: []
  };

  componentDidMount() {
    this.setState({
      faqs: [...this.props.faqs]
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.faqs !== this.props.faqs) {
      this.setState({
        faqs: [...this.props.faqs]
      });
    }
  }

  handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this FAQ?");
    if (!confirmDelete) return;

    fetch(`https://henna-project.onrender.com/api/faq/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          alert("FAQ deleted successfully");
          const updated = this.state.faqs.filter((faq) => faq._id !== id);
          this.setState({ faqs: updated });
        } else {
          alert("Failed to delete FAQ");
        }
      })
      .catch((err) => {
        console.error("Error deleting FAQ:", err);
      });
  };

  render() {
    const { faqs, loading } = this.state;

    return (
      <div className="admin-home-container">
        <AdminHeader />
        <h2 className="admin-appointment-heading">FAQs</h2>
          <div className="appointments-container">
            {faqs.length === 0 ? (
              <p>No FAQs found.</p>
            ) : (
              faqs.map((faq, index) => (
                <div key={faq._id || index} className="appointment-card">
                  <p><strong>Name:</strong> {faq.name}</p>
                  <p><strong>Email:</strong> {faq.email}</p>
                  <p><strong>Subject:</strong> {faq.subject}</p>
                  <p><strong>Message:</strong> {faq.message}</p>
                  <div className="delete-button-container">
                    <button
                      onClick={() => this.handleDelete(faq._id)}
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

export default AdminFaqs;
