import React from 'react';
import PropTypes from 'prop-types';


import { Context } from '../../context/context';
import styles from './Select.module.css';


const Select = ({ sortDataUSA, sortDataYears, id, selectValue }) => {
   const { getValueSelect, refSelectYear } = React.useContext(Context);
   const selectCurrentDefaultValue = id === 1 ? 'Select State' : 'Select Year';
   return (
      <select
         defaultValue={selectCurrentDefaultValue}
         data-id={id}
         onChange={(event) => getValueSelect(event, selectValue)}
         className={styles.select}
         ref={refSelectYear}
      >
         <option disabled>{selectCurrentDefaultValue}</option>
         {
            sortDataUSA &&
            sortDataUSA.map((dataUSA, index) => {
               return (
                  <option
                     key={index}
                     value={dataUSA.State}
                     data-id={dataUSA['ID State']}
                  >
                     {dataUSA.State}
                  </option>
               );
            })
         }
         {
            sortDataYears && sortDataYears.map((year, index) => {
               return (
                  <option
                     key={index}
                     value={year}
                  >
                     {year}
                  </option>
               )
            })
         }
      </select >
   )
}

Select.propTypes = {
   sortDataUSA: PropTypes.array,
   sortDataYears: PropTypes.array,
   id: PropTypes.number,
   selectValue: PropTypes.string
}


export default Select;