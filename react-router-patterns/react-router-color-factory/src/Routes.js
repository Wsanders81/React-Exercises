import { Route, Switch, Redirect } from 'react-router-dom';
import { useState } from 'react';

import Colors from './Colors';
import ColorsNew from './ColorsNew';
import ColorsColor from './ColorsColor';
const Routes = ({defaultVals}) => {
    const [colors, setColors]=useState(defaultVals)
    console.log(colors)
    const handleColorAdd = (newColor) => {
        console.log(newColor)
        console.log(colors)
        setColors(colors => ([...colors, {...newColor}]))
        
    }

	return (
    <Switch>
		<Route exact path="/colors">
			<Colors colors={colors}/>
		</Route>
		<Route exact path="/colors/new">
            <ColorsNew  handleColorAdd={handleColorAdd}/>
            </Route>
		<Route exact path="/colors/:color">
            <ColorsColor colors={colors}/>
            </Route>
		<Redirect to="/colors"/>
	</Switch>
)
};

export default Routes;
