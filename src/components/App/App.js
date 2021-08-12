import React from 'react';
import PropTypes from 'prop-types'
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { RouterConfig } from "../../routes/RoutesConfig";
import Header from "../Header";
import { Context } from '../../context/context';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentDataUSA } from '../../store/actions/actions';
import styles from './App.module.css';
import Preloader from '../Preloader';

const App = () => {
  const dispatch = useDispatch();
  const { datausa, isFetching } = useSelector(state => state.reposReducer);
  const [selectValueState, setSelectValueState] = React.useState('');
  const [selectValueYear, setSelectValueYear] = React.useState('');
  const [currentSelectState, setCurrentSelectState] = React.useState('')
  const refSelectYear = React.useRef();

  const getValueSelect = (event, selectValue, id) => {
    const select = event.target;
    
    const currentIndexOption = select.selectedIndex;

    const currentOption = select.options[currentIndexOption];

    const dataIdSetOption = currentOption.dataset.id;
    
    
    if (selectValue === "state") {
      
      if (id === 2) {
        
        const selectDisabled = refSelectYear.current.options[0];

        setCurrentSelectState(dataIdSetOption);

        refSelectYear.current.value = selectDisabled.value;
      }

      setCurrentSelectState(dataIdSetOption);

      setSelectValueState(event.target.value);

    }
    else if (selectValue === "year") {
      const filterDataUSA = datausa.filter(currentState =>

        currentState.Year === select.value

        && currentState['ID State'] === currentSelectState)

      console.log(filterDataUSA)

      dispatch(setCurrentDataUSA(filterDataUSA))
    }
  }

  return (
    <Context.Provider value={{
      selectValueState,
      setSelectValueState,
      selectValueYear,
      setSelectValueYear,
      refSelectYear,
      getValueSelect
    }}>
      < Router >
        <Header />
        {/* <Preloader /> */}
        {isFetching && <Preloader />}
        <div className={styles.app}>
          <Switch>
            {RouterConfig.map(({ exact, path, component }, index) => {
              return <Route key={index} exact={exact} path={path} component={component} />
            })}
          </Switch>

        </div>
      </Router>
    </ Context.Provider >

  );
}




export default App;
