import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import instagram_icon from '../../assests/instagram_icon.png';
import whatsapp_icon from '../../assests/whatsapp_icon.png';
import facebook_icon from '../../assests/facebook_icon.png';
import linkdin_icon from '../../assests/linkdin_icon.png'
const Footer = () => {
  return (
    <div className='footer'>

      <div className='footer-social-icon'>
      <Link 
  className='footer-icons-container' 
  to='https://www.linkedin.com/in/samah-layouni-557284312/' // Remplace par le lien de ton profil LinkedIn
  target='_blank'
  rel='noopener noreferrer'
>
  <img 
    src={linkdin_icon} 
    alt='linkedin' 
    style={{ filter: 'brightness(0) saturate(100%)' }} 
  />
</Link>
      <Link 
         className='footer-icons-container' 
         to='https://www.facebook.com/profile.php?id=100009525062576' // Remplace ton_nom_utilisateur par ton nom d'utilisateur Instagram
         target='_blank' // Ouvre le lien dans un nouvel onglet
         rel='noopener noreferrer' // Ajoute des attributs de sécurité
      >
       <img src={facebook_icon} alt='facebook' style={{ filter: 'brightness(0) saturate(100%)' }} />
     </Link>
      <Link 
         className='footer-icons-container' 
         to='https://www.instagram.com/samahlayounii/' // Remplace ton_nom_utilisateur par ton nom d'utilisateur Instagram
         target='_blank' // Ouvre le lien dans un nouvel onglet
         rel='noopener noreferrer' // Ajoute des attributs de sécurité
      >
  <img src={instagram_icon} alt='instagram' style={{ filter: 'brightness(0) saturate(100%)' }} />
     </Link>
        <Link 
  className='footer-icons-container'
  to='https://wa.me/+21696506627' // Remplace 1234567890 par ton numéro
  target='_blank' // Ouvre le lien dans un nouvel onglet
  rel='noopener noreferrer' // Ajoute des attributs de sécurité
>
  <img src={whatsapp_icon} alt='whatsapp' style={{ filter: 'brightness(0) saturate(100%)' }} />
</Link>
      </div>
      <div className='footer-copyright'>
        <hr />
        <p>Copyright @ 2024 - All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer