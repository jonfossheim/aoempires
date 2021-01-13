import React from 'react';
import CivilizationBonus from './CivilizationBonus';

const Civilization = (props) => {
   console.log(props);

   const { name, expansion, army_type, civilization_bonus } = props;

   return (
      <div className={'civWrapper'}>
         <h2>{name}</h2>
         <h3>Expansion: {expansion}</h3>
         <h4>Army Type: {army_type}</h4>
         {civilization_bonus?.length > 0 ? (
            <>
               <h4>Bonuses:</h4>
               <div className={'bonusWrapper'}>
                  {civilization_bonus.map((bonus, idx) => (
                     <CivilizationBonus key={idx} bonus={bonus} />
                  ))}
               </div>
            </>
         ) : null}
      </div>
   );
};

export default Civilization;
