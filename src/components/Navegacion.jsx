import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import imgContacto from '../assets/img/contacto.png';
import imgHome from '../assets/img/home.png';
import imgPastel from '../assets/img/pastel.png';

const Navegacion = () => {
  return (
    <Navbar className='navbar-color '>
      <Container className='justify-content-between'>
        <div className='d-flex justify-content-start'>
          <Link
            to='/'
            className='text-white text-decoration-none d-flex align-items-center'
          >
            <img
              className='navegacion-img'
              src={imgHome}
              alt='imagen de home para link de home'
            />
            Home
          </Link>
          <Link
            to='/contacto'
            className='text-white ms-3 text-decoration-none d-flex align-items-center'
          >
            <img
              className='navegacion-img'
              src={imgContacto}
              alt='imagen de contacto para link de contacto'
            />
            Contacto
          </Link>
        </div>
        <div className=' d-flex align-items-center'>
          <Navbar.Brand className='text-white me-0'>Happy Cake</Navbar.Brand>
          <img
            className='navegacion-img ms-2 '
            src={imgPastel}
            alt='imagen de pastel para brand'
          />
        </div>
      </Container>
    </Navbar>
  );
};
export default Navegacion;
