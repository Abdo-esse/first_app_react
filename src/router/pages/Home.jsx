import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5 text-center">
      <h1 className="mb-4">Bienvenue sur notre site !</h1>
      <p className="lead">
        Découvrez nos articles de blog, contactez-nous pour plus d’informations,
        et explorez les différentes sections.
      </p>
      <Link to="/blogs" className="btn btn-primary btn-lg mt-3">Voir les articles</Link>
    </div>
  );
}

export default Home;
