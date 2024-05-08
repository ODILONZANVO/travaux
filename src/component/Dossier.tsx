import React from 'react';
import './Dossier.css'; // Importez le fichier CSS avec les styles personnalisés

export function Dossier() {
  return (
    <div>
      <p>
      <div className="dossier-container">
      <p className="title">Préparation du dossier pour un Prêt personnel Travaux</p>
      <div className="content">
        <p>
          <i>
            Pour constituer votre dossier, il est nécessaire de fournir les pièces justificatives mentionnées ci-dessous :
          </i>
        </p>
        <ul>
          <li>
            <a className='flex items-center'>
            <svg className="w-8 h-8 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>
              preuve de votre identité
              Copie recto-verso d'une pièce d'identité en cours de validité.
              </p>
            </a>
          </li>
          <li>
            <a className='flex items-center'>
            <svg className="w-8 h-8 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
             <p>
             justificatif de domicile
             </p>
            </a>
          </li>
          <li>
            <a className='flex items-center'>
            <svg className="w-8 h-8 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>
              justificatif de vos revenus
              </p>
            </a>
          </li>
          <li>
            <a>
              Dans le cadre de l'étude de votre dossier, La Banque Postale Consumer Finance pourra être amenée à vous demander d'autres pièces justificatives.
            </a>
          </li>
        </ul>
      </div>
    </div>
      </p>
    </div>
  );
}

export default Dossier;
