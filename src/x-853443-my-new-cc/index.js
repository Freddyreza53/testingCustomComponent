import {createCustomElement} from '@servicenow/ui-core';
import snabbdom from '@servicenow/ui-renderer-snabbdom';

import styles from './styles.scss';

const view = (state, {updateState}) => {
	return (
		<div>test</div>
	);
};

createCustomElement('x-853443-my-new-cc', {
	renderer: {type: snabbdom},
	view,
	styles
});
