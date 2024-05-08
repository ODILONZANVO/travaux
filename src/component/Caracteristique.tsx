import React from 'react';
import './Caracteristique.css'; // Importez le fichier CSS avec les styles personnalisés

export function Caracteristique () {
  return (
    <div>
      <p>
      <div className="caracteristique-container">
      <p className="intro">
        <i className='title mb-2'>
          Les caractéristiques du Prêt personnel Travaux.
        </i>
        <p className='mt-2  bg-blue-200 p-9 rounded-md'>Vous souhaitez créer une nouvelle chambre d’enfant ?  Ouvrir votre cuisine à votre espace de vie ? Aménager votre terrasse pour profiter des belles journées ? La Banque Postale vous propose le financement adapté à votre besoin  : le Prêt personnel Travaux.</p>
      </p>
      <div>
        <div className='flex between items-center bg-red-200 p-9 rounded-md mt-5 py-10 px-5 '>
          <i>
            <p className='underline'>Aucun apport personnel exigé.</p>
            <p className="flex items-center"> {/* Ajoutez la classe flex et items-center pour aligner le texte avec la flèche */}
              <svg className="w-6 h-6 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>Un prêt accessible dès 1 500 €.</p>
            </p>
            <p className="flex items-center"> {/* Ajoutez la classe flex et items-center pour aligner le texte avec la flèche */}
              <svg className="w-12 h-12 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
              </svg>
              <p>Des assurances facultatives mais recommandées, qui s'adaptent au mieux à votre situation.</p>
            </p>
          </i>
          <p><img src="logo/LBP-logement-travaux-professionnel.jpg-rend-cq5dam.web.375.375.jpg" alt="logo de travaux" style={{ width: '100%', maxWidth: '400px', height: 'auto' }} /></p> {/* Ajoutez un style pour ajuster la taille de l'image */}
        </div>
      </div>
      <p className="example">
        <i>
        Exemple : pour un Prêt personnel Travaux de 15 000 € sur 72 mois au taux débiteur fixe de 6,50 %, soit un TAEG fixe de 7,07 %, le remboursement s’effectue en 72 mensualités de 254,66 €. Montant total dû : 18 335,52 €, dont 150 € de frais de dossier. Assurance Décès Invalidité facultative(2) : TAEA de 1,75 %, soit 11,88€/mois (non inclus dans la mensualité), soit un montant total dû sur la durée totale du prêt de 855,36€. 
        </i>
      </p>
      <p className="disclaimer">
        <i>
          Un crédit vous engage et doit être remboursé. Vérifiez vos capacités de remboursement avant de vous engager.
        </i>
      </p>
    </div>
      </p>
    </div>
  );
}

export default Caracteristique;
