import "./index.css"
import testimonial_1 from "../../assets/testimonial_1.png"
import testimonial_2 from "../../assets/testimonial_2.png"
import testimonial_3 from "../../assets/testimonial_3.png"
const testimonials = [
  {
    name: "Aisha Khan",
    role: "Bride",
    message:
      "The Mehndi design was absolutely stunning! The patterns were so intricate and elegant. I received so many compliments at the wedding.",
    image: testimonial_1, 
  },
  {
    name: "Sana Patel",
    role: "Bride",
    message:
      "I was amazed by the creativity and neatness of the Mehndi work. It made my special day even more beautiful. Truly a talented artist!",
    image: testimonial_2, 
  },
  {
    name: "Nadia Sharma",
    role: "Bride",
    message:
      "The Mehndi design exceeded all my expectations! It was elegant, detailed, and exactly what I had dreamed of for my wedding.",
    image: testimonial_3,
  }
];

const Testimonial = () => {
  return (
    <div className="testimonial-section">
      <h2 className="section-title">Words from Our Clients</h2>
      <p className="section-subtitle">
      Our work speaks for itself through happy clients.
      </p>
      <div className="testimonial-container">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="quote-icon">“</div>
            <h3 className="name">{item.name}</h3>
            <p className="role">{item.role}</p>
            <p className="message">{item.message}</p>
            <div className="image-wrapper">
              <img src={item.image} alt={item.name} className="profile-img" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
