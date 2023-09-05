import { Helmet } from 'react-helmet-async';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
             <Helmet>
        <title>Shopping-Cart | Home</title>
       
      </Helmet>
            <h1 className='text-center font-semibold text-2xl text-green-600 my-8'>Welcome to the Shopping World</h1>
            <Services></Services>
        </div>
    );
};

export default Home;