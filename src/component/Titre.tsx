import React from 'react';
import './Titre.css'; // Importez le fichier CSS avec les styles personnalisés

export function Titre() {
  return (
    <div>
      <p>
      <div className="titre-container">
      <p className="disclaimer">
        <i>
          Un crédit vous engage et doit être remboursé. Vérifiez votre capacité de remboursement avant de vous engager.
        </i>
      </p>
      <p className="title">
        Les avantages du Prêt personnel Travaux
      </p>
      <div className="advantages">
        <div className="advantage">
          <i>Adaptabilité</i>
          <p>
            La Banque Postale s’engage et vous propose des solutions de financement et des mensualités adaptées à votre situation.
          </p>
        </div>
        <div className="advantage">
          <i>Accompagnement</i>
          <p>
            Vous bénéficierez d’un accompagnement durant toute la durée de votre prêt et d’un accord de principe rapide.
          </p>
        </div>
      </div>
    </div>
      </p>
    </div>
  );
}

export default Titre;
