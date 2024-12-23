import React from 'react'

type IRenderIfProps = {
    condition: React.ReactNode;
    children: React.ReactNode;
    renderElse?: React.ReactNode;
}

const RenderIf:React.FC<IRenderIfProps> = ({condition, children, renderElse}) => {
  return (
        condition
        ?<>{children}</>
        :<>{renderElse}</>
  )
}

export default RenderIf