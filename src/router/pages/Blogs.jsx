import React from 'react';

function Blogs() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">Nos derniers articles</h2>

      <div className="row">
        {/* Blog 1 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Titre de l'article 1</h5>
              <p className="card-text">Ceci est un petit aperçu du contenu de l'article numéro 1.</p>
              <a href="#" className="btn btn-primary">Lire plus</a>
            </div>
          </div>
        </div>

        {/* Blog 2 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Titre de l'article 2</h5>
              <p className="card-text">Un autre extrait rapide pour illustrer un second article de blog.</p>
              <a href="#" className="btn btn-primary">Lire plus</a>
            </div>
          </div>
        </div>

        {/* Blog 3 */}
        <div className="col-md-4 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h5 className="card-title">Titre de l'article 3</h5>
              <p className="card-text">Dernier exemple d'article avec une présentation simple en carte Bootstrap.</p>
              <a href="#" className="btn btn-primary">Lire plus</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
