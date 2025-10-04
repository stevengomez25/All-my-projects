import help from '../assets/help.png';
import { Link } from 'react-router-dom';

const Footer = () =>{
    return(
        <div className="fixed w-full text-center bottom-0">© 2025 Developed by SDG Associated. All Rights Reserved. <Link to="/Help" className="mx-2 fixed bottom-0 right-0 transition duration-150 hover:scale-150 hover:bottom-2 hover:right-2"><img className="h-10" src={help} alt="" /></Link> </div>
    );
};

export default Footer;