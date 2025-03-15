import React from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Title from '../../../layouts/Title'
import Accordions from './Accordions'

const Faq:React.FC = () => {
  return (
    <MainLayout>
      <Title 
      title="FAQ"
      subtitle='Frequently Asked Questions Page'
      />

      <Accordions question='An Important Questions'>
        Lorem ipsum, dolor sit amet consectetur elit. 
        Fugit nulla reiciendis consequuntur, porro
        nostrum ratione laborum maiores
      </Accordions>
      <Accordions question='Another Important Questions'>
        Lorem ipsum, dolor sit amet consectetur elit. 
        Fugit nulla reiciendis consequuntur, porro
        nostrum ratione laborum maiores
      </Accordions>
      <Accordions question='Your Favourite Questions'>
        Lorem ipsum, dolor sit amet consectetur elit. 
        Fugit nulla reiciendis consequuntur, porro
        nostrum ratione laborum maiores
      </Accordions>
      <Accordions question='Your Favourite Questions'>
        Lorem ipsum, dolor sit amet consectetur elit. 
        Fugit nulla reiciendis consequuntur, porro
        nostrum ratione laborum maiores
      </Accordions>
    </MainLayout>
  )
}

export default Faq