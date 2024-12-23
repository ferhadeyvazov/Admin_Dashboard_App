import React from 'react'
import RenderIf from '../../utils/RenderIf'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routes: React.FC = () => {
    let fake_auth = import.meta.env.VITE_FAKE_AUTH;
    console.log(fake_auth);
    <RenderIf condition={fake_auth} renderElse={<PrivateRoutes/>}>
        <PublicRoutes />
    </RenderIf>
}
export default Routes