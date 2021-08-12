import React from "react";

import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getRepose, setCurrentDataUSA } from '../../../store/actions/actions'
import { API_URL_MAIN, API_STATE_VALUE } from './../../../constants/root';
import { Context } from "../../../context/context";
import { sortDataUSA } from "../../../services/sortDataUSA";
import { ChartConfig } from './../../../services/chartsConfig';

import Select from "../../Select";

const ChartStateYear = () => {
   const dispatch = useDispatch();
   const { datausa, currentDataUsa } = useSelector(state => state.reposReducer);
   const { selectValueState } = React.useContext(Context);

   const getYears = [...new Set(datausa.map(data => data.Year))].reverse().splice(0, 6);

   const {
      height,
      data,
      options
   } = ChartConfig(currentDataUsa, selectValueState)

   React.useEffect(() => {
      dispatch(getRepose(API_URL_MAIN, API_STATE_VALUE))
   }, [])


   React.useEffect(() => {
      dispatch(setCurrentDataUSA(sortDataUSA(datausa, selectValueState, 'State')))
   }, [datausa, selectValueState])

   return (
      <div>
         <div className="selects">
            <Select
               id={1}
               sortDataUSA={datausa}
               selectValue='state'
               dataUSA={datausa}
            />
            <Select
               id={2}
               sortDataYears={getYears}
               currentState={currentDataUsa}
               dataUSA={datausa}
               selectValue='year'
            />
         </div>
         <div className="chart">
            <h2>{selectValueState}</h2>
            <Bar
               height={height}
               data={data}
               options={options}
            />
         </div>

      </div>


   )
}




export default ChartStateYear
