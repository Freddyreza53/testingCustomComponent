import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties: {text= '', color= ''}}) => {
	return (
		<div style={{color}}>{text}</div>
	);
};

createCustomElement('x-853443-my-new-cc', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties:{
		text: {},
		color: {}
	}
});
