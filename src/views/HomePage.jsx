import { Container } from 'react-bootstrap';
import pngegg from '../assets/img/pngegg.png';

const HomePage = () => {
  return (
    <Container className='text-center'>
      <h1 className='pt-5'>
        Bienvenido a <span className='fw-bold'>Happy Cake</span>
      </h1>
      <figure>
        <img className='homepage-img' src={pngegg} alt='Happy Cake' />
      </figure>
      <h6>El lugar de los pasteles felices </h6>
    </Container>
  );
};
export default HomePage;
