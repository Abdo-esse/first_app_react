import React from 'react';

function Contact() {
  return (
    <div className="container mt-5">
      <h2>Contactez-nous</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input type="text" className="form-control" id="name" placeholder="Votre nom" />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Adresse Email</label>
          <input type="email" className="form-control" id="email" placeholder="nom@exemple.com" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea className="form-control" id="message" rows="4" placeholder="Votre message"></textarea>
        </div>

        <button type="submit" className="btn btn-primary">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
