
import { Outlet } from 'react-router-dom';

const AuthLayouts = () => {
    return (
        <div>
            AuthLayout
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayouts;