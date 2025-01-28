import React, { useEffect } from 'react';
import image from '../assets/Thiran.jpg';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

function About() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [inView, controls]);

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', delay: 0.2 },
    },
  };

  const events = [
    {
      title: 'Internship Opportunities 🎓',
      details: [
        '🏆 Members of the top 3 teams are eligible for internship consideration.',
        '📅 Final selection is subject to the interview process.',
        '📝 Internship details will be communicated separately to qualified candidates.',
      ],
    },
    {
      title: 'Practizo Pro Subscription 🛠️',
      details: [
        '💰 One year subscription worth INR 8,999, provided to all members of the top 3 teams.',
        '🔒 Includes access to cybersecurity courses, premium webinars, future events, and contests.',
        '🤖 Qubira AI career chatbot tools such as AI Resume Builder, Cover Letter Generator, Research Paper Copilot, etc.',
      ],
    },
    // Add more events as needed
  ];
  

  return (
    <section id="about" className="about-section" ref={ref}>
      <motion.h2
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        About CTF Events
      </motion.h2>
      <div className="about-content">
        <div className="about-grid">
          {/* Timeline Cards */}
          <div className="timeline">
            {events.map((event, index) => (
              <motion.div
                key={index}
                className="timeline-card bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-xl hover:border-blue-500 transition-all duration-300"
                initial="hidden"
                animate={controls}
                variants={textVariants}
              >
                <h3 className="text-xl font-semibold text-blue-600">{event.title}</h3>
                <ul className="list-disc list-inside text-gray-600 mt-4">
                  {event.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Image Section */}
          <motion.div
            className="about-image"
            initial="hidden"
            animate={controls}
            variants={imageVariants}
          >
            <img src={image} alt="Cybersecurity" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
