
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';


const AuthLayouts = () => {
    return (
        <div className='font-poppins'>
            <header className='py-3 w-11/12 mx-auto'>
                <Navbar></Navbar>
            </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;