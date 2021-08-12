import React from "react";
import { Bar } from 'react-chartjs-2';

import { useSelector, useDispatch } from 'react-redux';
import { getRepose } from '../../../store/actions/actions'
import { ChartConfig } from "../../../services/chartsConfig";
import { API_URL_MAIN } from './../../../constants/root';


const ChartHome = () => {
   const dispatch = useDispatch()
   const { datausa } = useSelector(state => state.reposReducer)
   const transfromDataUSA = datausa.map(x => x).reverse().slice(0, 6);

   const {
      height,
      data,
      options
   } = ChartConfig(transfromDataUSA, 'Statistic USA')

   React.useEffect(() => {
      dispatch(getRepose(API_URL_MAIN))
   }, [])

   return (
      <div className="chart">
         <h2>Statistic USA</h2>
         <Bar
            height={height}
            data={data}
            options={options}
         />
      </div>

   )
}




export default ChartHome
