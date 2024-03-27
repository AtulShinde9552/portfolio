import {FaWhatsapp, FaInstagram, FaGithub,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className=' bg-dark-subtle py-4'>
        <div className="d-flex flex-column">
            <span className='mx-auto fw-bold my-2'>Atul Shinde</span>
            <div className="d-flex justify-content-around mx-auto my-2">
                <a href="https://www.linkedin.com/in/atul-shinde-5a9549204/" target="_blank" rel="noopener noreferrer"><FaLinkedin  role='button' className='mx-3' color='#0072b1' size={25}/></a>
                <a href="https://wa.link/bp1mtz" target="_blank" rel="noopener noreferrer"><FaWhatsapp role='button' color='#13e02b' size={25}/></a>
                <a href="https://github.com/AtulShinde9552" target="_blank" rel="noopener noreferrer"><FaGithub role='button' className='mx-3' color='#4078c0' size={25}/></a>
                <a href="https://www.instagram.com/atulshinde129?igsh=bmtmZGN5MzI4Z3pp&utm_source=qr" target="_blank" rel="noopener noreferrer"> <FaInstagram role='button' color='#d62976'  size={25}/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer