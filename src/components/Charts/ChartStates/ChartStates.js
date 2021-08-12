import React from "react";
import { Bar } from 'react-chartjs-2';
import { useSelector, useDispatch } from 'react-redux';
import { getRepose } from '../../../store/actions/actions'
import { API_URL_MAIN, API_STATE_VALUE } from './../../../constants/root';
import { Context } from "../../../context/context";
import { sortDataUSA } from "../../../services/sortDataUSA";
import { setCurrentDataUSA } from "../../../store/actions/actions";
import { ChartConfig } from "../../../services/chartsConfig";
import Select from "../../Select";


const ChartStates = () => {
   const dispatch = useDispatch();
   const { datausa, currentDataUsa } = useSelector(state => state.reposReducer);
   const { selectValueState } = React.useContext(Context);
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

   console.log(currentDataUsa)
   return (
      <div>
         <Select
            id={1}
            sortDataUSA={datausa}
            selectValue='state'
         />
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




export default ChartStates
