import React from 'react'
import RenderIf from '../../utils/RenderIf'
import PrivateRoutes from './PrivateRoutes'
import PublicRoutes from './PublicRoutes'

const Routes: React.FC = () => {
    let fake_auth = JSON.parse(import.meta.env.VITE_FAKE_AUTH);
    console.log(typeof fake_auth);
    console.log(fake_auth);
    return (
        <RenderIf condition={fake_auth} renderElse={<PublicRoutes />}>
            <PrivateRoutes />
        </RenderIf>
    )
}
export default Routes