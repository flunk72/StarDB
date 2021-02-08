import React from 'react';
import { SwapiServiceConsumer } from '../SwapiServiceDetails';

const WithSwapiService = (Wrapped) => {

  return (props) => {
    return (
      <SwapiServiceConsumer/>
      //   {
      //     (swapiService) => {
      //       const serviceProps = mapMethodsToProps(swapiService);

      //       return (
      //         <Wrapped {...props} {...serviceProps} />
      //       );
      //     }
      //   }
      // </SwapiServiceConsumer>
    );
  }
};

export default WithSwapiService;