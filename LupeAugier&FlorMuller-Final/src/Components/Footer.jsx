import React, { useContext } from 'react';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { DarkContext } from '../ModoContext/DarkContext';


const Footer = () => {

  const { isDarkMode } = useContext (DarkContext);
  
  return (
    <footer className={ isDarkMode ? "dark" : "app"}>

    {/* <div>
      <FacebookIcon className="imgperfil" alt="logo Faceboock" sx={{color: "white" }}  />

      <InstagramIcon className="imgperfil" alt="logo Instagram" sx={{color: "white" }} />
      <LinkedInIcon className="imgperfil" alt="linkedln" sx={{color: "white" }}/>
      <WhatsAppIcon className="imgperfil" alt="logo WhatsApp" sx={{color: "white" }} />
    </div> */}

        </footer>
    )
}

export default Footer


