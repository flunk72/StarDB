import React from 'react';
import ItemDetails, { Record } from '../Person';
import { WithSwapiService } from '../HocHelper';

const PersonDetails = ({personId, swapiService}) => {
  const {getPerson, getPersonImage} = swapiService
  return (
    <ItemDetails personId={personId}
                  getData={getPerson}
                  getImageUrl={getPersonImage}>
      <Record field="gender" label="Gender" />
      <Record field="eyeColor" label="Eye Color" />
    </ItemDetails>
  );
};

// const mapMethodsToProps = (swapiService) => {
//   return {
//     getData: swapiService.getPerson,
//     getImageUrl: swapiService.getPersonImage
//   }
// };

export default WithSwapiService(PersonDetails);