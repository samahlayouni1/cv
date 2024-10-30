import React, { useState } from "react";
import PageHeaderContent from "../../components/headerContent/PageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from 'emailjs-com';
import "./styles.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '', 
    from_email: '', 
    message: '' 
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Envoyer les données du formulaire via EmailJS
    emailjs.send('service_3e0axjp', 'template_wex3vvy', formData, 'p9-x024hXb9BSQ1sB')
      .then((response) => {
        console.log('SUCCESS:', response);
        setIsSubmitted(true);
        setErrorMessage('');  // Efface les erreurs précédentes
        setFormData({ from_name: '', from_email: '', message: '' }); // Vider le formulaire après succès
      }, (err) => {
        console.error('FAILED:', err);
        // Améliore le message d'erreur en fonction des détails de l'erreur
        let message = 'Failed to send the message. Please try again later.';
        if (err.text) {
          message = `Error: ${err.text}`;
        }
        setErrorMessage(message);
      });
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="My Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <form onSubmit={handleSubmit}>
              <div className="contact__content__form__controlswrapper">
                <div>
                  <input
                    required
                    name="from_name"
                    className="inputName"
                    type="text"
                    value={formData.from_name}
                    onChange={handleChange}
                  />
                  <label htmlFor="from_name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    required
                    name="from_email"
                    className="inputEmail"
                    type="email"
                    value={formData.from_email}
                    onChange={handleChange}
                  />
                  <label htmlFor="from_email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <textarea
                    required
                    name="message"
                    className="inputDescription"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  />
                  <label htmlFor="message" className="descriptionLabel">
                    Description
                  </label>
                </div>
              </div>
              <button type="submit">Submit</button>
            </form>
            {isSubmitted && <p>Thank you for contacting us!</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
