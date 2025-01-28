import React from 'react';
import { motion } from 'framer-motion';

const ctfEvents = [
  {
    title: "Web Exploitation",
    difficulty: "Intermediate",
    description: "Test your web security skills with real-world challenges.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    title: "Cryptography",
    difficulty: "Advanced",
    description: "Solve complex cryptographic puzzles and secure communication challenges.",
    image: "https://cdn.pixabay.com/photo/2020/01/22/16/31/cyber-security-4785679_1280.png"
  },
  {
    title: "Digital Forensic",
    difficulty: "Beginner",
    description: "Perfect for newcomers to learn the basics of cybersecurity.",
    image: "https://img.freepik.com/free-photo/eye-futuristic-robot_53876-95096.jpg?t=st=1737995959~exp=1737999559~hmac=e075d1d2aacc42e156598d98d0f97f578183e63efa2e03b358fb3778587723a9&w=1380"
  },
  {
    title: "Reverse Engineering",
    difficulty: "Beginner",
    description: "Perfect for newcomers to learn the basics of cybersecurity.",
    image: "https://img.freepik.com/free-photo/double-exposure-caucasian-man-virtual-reality-vr-headset-is-presumably-gamer-hacker-cracking-code-into-secure-network-server-with-lines-code-green_146671-18931.jpg?t=st=1737996930~exp=1738000530~hmac=dce697aafa1f4f7bb15083344a6363569d1fc9ea1f6ce6b28009e86db93a94df&w=996"
  }
];

function Events() {
  return (
    <section id="events" className="events-section">
      <h2>Challenges</h2>
      <div className="events-grid">
        {ctfEvents.map((event, index) => (
          <motion.div
            key={index}
            className="event-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="event-image" style={{ backgroundImage: `url(${event.image})` }}></div>
            <div className="event-content">
              <h3>{event.title}</h3>
              <p><strong>Difficulty:</strong> {event.difficulty}</p>
              <p>{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Events;