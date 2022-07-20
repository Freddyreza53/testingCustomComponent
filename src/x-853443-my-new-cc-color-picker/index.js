import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = (state, {dispatch}) => {
	return (
		<div>
			<div>
				<input type="radio" id="red" name="color" value="red"/>
				<label for="red" >Red</label>
			</div>
			<div>
				<input type="radio" id="green" name="color" value="green"/>
				<label for="green" >Green</label>
			</div>
			<div>
				<input type="radio" id="blue" name="color" value="blue"/>
				<label for="blue" >Blue</label>
			</div>
		</div>
	);
};

createCustomElement('x-853443-my-new-cc-color-picker', {
	renderer: {type: snabbdom},
	view,
	styles,
	eventHandlers: [{
		events: ['input'],
		effect({dispatch, action: {payload: {event}}}) { 
			const {value} = event.path[0];
			console.log(event);
			dispatch('CC_COLOR_PICKER#VALUE_SET', {value});
		}
	}]
});
