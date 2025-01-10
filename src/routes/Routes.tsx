import React from 'react'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routes: React.FC = () => {
    let fake_auth = JSON.parse(import.meta.env.VITE_FAKE_AUTH);
    console.log(typeof fake_auth);
    console.log(fake_auth);
    
    return fake_auth ? <PrivateRoutes /> : <PublicRoutes />
}
export default Routes