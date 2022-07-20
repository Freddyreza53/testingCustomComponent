import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';
import styles from './styles.scss';

const view = ({properties: {text= ''}}) => {
	return (
		<div>{text}</div>
	);
};

createCustomElement('x-853443-my-new-cc-card-test', {
	renderer: {type: snabbdom},
	view,
	styles,
	properties:{
		text: {}
	}
});
