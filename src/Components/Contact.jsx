import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // const response = await fetch('http://localhost:5000/send-email', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      const response = await axios.post(
        'https://script.google.com/macros/s/AKfycbz6g8PJRzaUFVs2PhI8Uwb9mUvJR_r1UyfyW7kZdcPYE6Kya25wJOsVYLcXP-sqizbq/exec',
        JSON.stringify(formData), // Ensure you stringify the data
        {
          headers: { 'Content-Type': 'application/json' } // Correct Content-Type
        }
      );
      
      // const response = await fetch('https://script.google.com/macros/s/AKfycbz6g8PJRzaUFVs2PhI8Uwb9mUvJR_r1UyfyW7kZdcPYE6Kya25wJOsVYLcXP-sqizbq/exec', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      //   body: JSON.stringify(formData),
      // });
      

      const result = await response.json();

      if (response.ok) {
        setSuccess('Thank you for your message! We will get back to you soon.');
      } else {
        setError('Something went wrong, please try again later.');
      }
    } catch (err) {
      setError('Something went wrong, please try again later.');
    } finally {
      setLoading(false);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {success && <p style={{ color: 'green' }}>{success}</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </motion.form>
    </section>
  );
}

export default Contact;
