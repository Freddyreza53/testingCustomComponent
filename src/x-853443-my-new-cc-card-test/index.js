import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties: {text1= '', text2= '', text3= '', logo= ''}}, dispatch) => {
	return (
		<div on-click={() => dispatch('CARD_TESTER#CLICKED_CARD', {sysId: text1})}>
			<img src={logo} width="50" height="50"/>
			<div><span style={{fontWeight: 'bold'}}>sysId: </span>{text1}</div>
			<div><span style={{fontWeight: 'bold'}}>username: </span>{text2}</div>
			<div><span style={{fontWeight: 'bold'}}>company: </span>{text3}</div>
		</div>
	);
};

createCustomElement('x-853443-my-new-cc-card-test', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties:{
		text1: {},
		text2: {},
		text3: {},
		logo: {}
	},
	actionHandlers:{
		"CARD_TESTER#CLICKED_CARD": ({action}) => {
			console.log(action.payload);
		}
	}
});
