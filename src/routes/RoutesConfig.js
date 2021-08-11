import ChartHome from "../components/Charts/ChartHome";
import ChartStates from './../components/Charts/ChartStates';
import ChartStateYear from './../components/Charts/ChartStateYear';


export const RouterConfig = [
   {
      path: "/",
      exact: true,
      component: ChartHome
   },
   {
      path: "/states",
      exact: true,
      component: ChartStates
   },
   {
      path: "/statesyears",
      exact: true,
      component: ChartStateYear
   },
   {
      path: "*",
      exact: true,
      component: ChartHome
   }
];
