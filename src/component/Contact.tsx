// Contact.tsx
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import './Contact.css'; // Importez le fichier CSS avec les styles

interface FormData {
  name: string;
  email: string;
  montant: number;
  duree: number;
  besoinFinancement: string;
  typeCredit: string;
  montantProjet: string;
  civilite: string;
  nom: string;
  prenom: string;
  dateNaissance: string; // Utilisation d'une seule propriété pour la date de naissance
  adresse: string;
  codePostal: string;
  ville: string;
  confirmationEmail: string;
  numeroTelephone: string;
  deuxiemeNumero: string;
}

export function Contact() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    emailjs.send('service_g3u4w5z', 'template_medn92n', {
      name: data.name,
      email: data.email,
      montant: data.montant,
      duree: data.duree,
      besoinFinancement: data.besoinFinancement,
      typeCredit: data.typeCredit,
      montantProjet: data.montantProjet,
      civilite: data.civilite,
      nom: data.nom,
      prenom: data.prenom,
      dateNaissance: data.dateNaissance,
      adresse: data.adresse,
      codePostal: data.codePostal,
      ville: data.ville,
      confirmationEmail: data.confirmationEmail,
      numeroTelephone: data.numeroTelephone,
      deuxiemeNumero: data.deuxiemeNumero,
    }, 'ZSUAPJQuZtR5BsvjX')
      .then((response) => {
        console.log('Email envoyé avec succès!', response.status, response.text);
        alert('Votre demande de prêt a été envoyée avec succès!');
        reset(); // Réinitialiser les champs du formulaire après envoi
      }, (error) => {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        alert('Une erreur est survenue lors de l\'envoi de votre demande de prêt. Veuillez réessayer plus tard.');
      });
  };

  return (
    <div>
      <p>
        <div className="contact-container">
          <div className="contact-form">
            <h2 className='title'>Contactez-nous</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* VOTRE BESOIN DE FINANCEMENT */}
              <label htmlFor="besoin-financement">VOTRE BESOIN DE FINANCEMENT</label>
              <select id="besoin-financement" {...register("besoinFinancement")}>
                <option value="Prêt personnel">Prêt personnel</option>
                <option value="Travaux">Travaux</option>
              </select><br />

              {/* MONTANT DU PROJET */}
              <label htmlFor="montant-projet">MONTANT DU PROJET *</label>
              <input type="text" id="montant-projet" {...register("montantProjet")} /><br />

              {/* VOS INFORMATIONS */}
              {/* CIVILITÉ */}
              <div className='mb-2'>
                <label className='mb-1'>CIVILITÉ *</label><br />
                <div className='flex between items-center mb-1 mt-4 '>
                  <label htmlFor="civilite-mme">Madame</label>
                  <input type="radio" id="civilite-mme" value="Madame" {...register("civilite")} />
                </div>
                <div className='flex between items-center mb-4 '>
                  <label htmlFor="civilite-m">Monsieur</label>
                  <input type="radio" id="civilite-m" value="Monsieur" {...register("civilite")} />
                </div>
              </div>

              {/* NOM */}
              <label htmlFor="nom">NOM *</label>
              <input type="text" id="nom" {...register("nom", { required: true })} /><br />
              {errors.nom && <span className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* PRÉNOM */}
              <label htmlFor="prenom">PRÉNOM *</label>
              <input type="text" id="prenom" {...register("prenom", { required: true })} /><br />
              {errors.prenom && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* DATE DE NAISSANCE */}
              <label htmlFor="date-naissance">DATE DE NAISSANCE *</label><br />
              <input type="text" id="date-naissance" placeholder="Votre date de naissance : JJ/MM/AAAA" {...register("dateNaissance", { required: true })} /><br />
              {errors.dateNaissance && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* ADRESSE */}
              <label htmlFor="adresse">ADRESSE *</label>
              <input type="text" id="adresse" {...register("adresse", { required: true })} /><br />
              {errors.adresse && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* CODE POSTAL */}
              <label htmlFor="code-postal">CODE POSTAL *</label>
              <input type="text" id="code-postal" {...register("codePostal", { required: true })} /><br />
              {errors.codePostal && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* VILLE */}
              <label htmlFor="ville">VILLE *</label>
              <input type="text" id="ville" {...register("ville", { required: true })} /><br />
              {errors.ville && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* EMAIL */}
              <label htmlFor="email">EMAIL *</label>
              <input type="email" id="email" {...register("email", { required: true })} /><br />
              {errors.email && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* CONFIRMATION DE L'EMAIL */}
              <label htmlFor="confirmation-email">CONFIRMATION DE L'EMAIL *</label>
              <input type="email" id="confirmation-email" {...register("confirmationEmail", { required: true })} /><br />
              {errors.confirmationEmail && <span  className='text-[red]'>Ce champ est requis.</span>}<br />

              {/* NUMÉRO DE TÉLÉPHONE À PRIVILÉGIER */}
              <label htmlFor="numero-telephone">NUMÉRO DE TÉLÉPHONE À PRIVILÉGIER *</label>
              <input type="text" id="numero-telephone" {...register("numeroTelephone", { required: true })} /><br />
              {errors.numeroTelephone && <span>Ce champ est requis.</span>}<br />

              {/* DEUXIÈME NUMÉRO */}
              <label htmlFor="deuxieme-numero">DEUXIÈME NUMÉRO</label>
              <input type="text" id="deuxieme-numero" {...register("deuxiemeNumero")} /><br />

              <input type="submit" value="Soumettre la demande" />
            </form>
          </div>
        </div>
      </p>
    </div>
  );
}

export default Contact;
