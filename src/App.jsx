import "./App.css";

const heroImages = [
  "/food1.jpg",
  "/food2.jpg",
  "/food3.jpg",
  "/food4.jpg",
  "/food5.jpg",
  "/food6.jpg",
];

const galleryImages = [
  "/food1.jpg",
  "/food2.jpg",
  "/food3.jpg",
  "/food4.jpg",
  "/food5.jpg",
  "/food6.jpg",
  "/food7.jpg",
  "/food8.jpg",
  "/food9.jpg",
  "/food10.jpg",
  "/food11.jpg",
];

const menuItems = [
  {
    name: "Paneer Tikka",
    desc: "Smoky grilled paneer with spices",
    price: "₹249",
    image: "/paneer-tikka.jpg",
  },
  {
    name: "Butter Chicken",
    desc: "Creamy rich chicken curry",
    price: "₹399",
    image: "/butter-chicken.jpg",
  },
  {
    name: "Veg Biryani",
    desc: "Aromatic rice with fresh vegetables",
    price: "₹299",
    image: "/veg-biryani.jpg",
  },
  {
    name: "Chocolate Lava Cake",
    desc: "Warm cake with melted chocolate",
    price: "₹199",
    image: "/lava-cake.jpg",
  },
];

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          Royal<span>Spice</span>
          <p>FINE DINING</p>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#gallery">Gallery</a>
          <a href="#reserve">Reserve</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <span className="badge">Premium Restaurant Experience</span>

          <h1>Luxury Dining Made Memorable</h1>

          <p>
            Enjoy handcrafted dishes, elegant ambience, and unforgettable taste
            crafted for your special moments.
          </p>

          <div className="hero-buttons">
            <a href="#menu" className="primary-btn">
              Explore Menu
            </a>

            <a href="#reserve" className="secondary-btn">
              Reserve Table
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-slider">
            {heroImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Restaurant Food"
                style={{ animationDelay: `${index * 3}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="about">
        <div className="section-title">
          <span>About Us</span>
          <h2>Where Taste Meets Elegance</h2>
        </div>

        <p>
          Royal Spice is a modern fine-dining restaurant offering delicious food,
          premium ambience, and a peaceful place for family dinners, meetings,
          birthdays, and special celebrations.
        </p>
      </section>

      <section className="menu" id="menu">
        <div className="section-title">
          <span>Our Menu</span>
          <h2>Chef’s Special</h2>
        </div>

        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.name} className="menu-image" />

              <h3>{item.name}</h3>

              <p>{item.desc}</p>

              <div className="menu-bottom">
                <span>{item.price}</span>
                <small>★★★★★</small>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="gallery" id="gallery">
        <div className="section-title">
          <span>Gallery</span>
          <h2>Our Ambience</h2>
        </div>

        <div className="gallery-slider">
          <div className="gallery-track">
            {[...galleryImages, ...galleryImages].map((img, index) => (
              <img key={index} src={img} alt="Restaurant Gallery" />
            ))}
          </div>
        </div>
      </section>

      <section className="reserve" id="reserve">
        <div className="reserve-box">
          <div>
            <span className="badge">Premium Feature</span>

            <h2>Reserve Your Table</h2>

            <p>
              This is a demo section. In the final website, customers can book
              tables directly through WhatsApp, email, or database system.
            </p>
          </div>

          <form>
            <input type="text" placeholder="Your Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="date" />
            <input type="time" />
            <input type="number" placeholder="Guests" />

            <button type="button">
              Booking Available in Premium Version
            </button>
          </form>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="section-title">
          <span>Contact</span>
          <h2>Visit Us Today</h2>
        </div>

        <div className="contact-box">
          <p>📍 Main Market, saharanpur, Uttar Pradesh</p>
          <p>📞 +91 98765 43210</p>
          <p>⏰ Open: 10:00 AM - 11:00 PM</p>
        </div>
      </section>

      <footer>
        <h3>
          Royal<span>Spice</span>
        </h3>
        <p>Designed by TechEspals — Make It Real</p>
      </footer>
    </div>
  );
}

export default App;