import React from 'react'

const Contact = () => (
  <div>
    <h2>Contact Us</h2>
    <p>Email: contact@techycrewinnovations.com</p>
    <p>Phone: +91 1234567890</p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </div>
)

export default Contact
