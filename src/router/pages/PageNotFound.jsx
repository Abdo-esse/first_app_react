import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-1">404</h1>
      <p className="lead">Oups ! La page que vous cherchez n'existe pas.</p>
      <Link to="/" className="btn btn-primary mt-3">Retour à l'accueil</Link>
    </div>
  )
}

export default PageNotFound
