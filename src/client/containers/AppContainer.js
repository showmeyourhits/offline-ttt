// @flow

import {connect} from 'react-redux';
import {getCurrentStep} from 'client/selectors/BasicSelectors';
import AppComponent from 'client/components/AppComponent';

const mapStateToProps = (state: AppStateT) => ({
	currentStep: getCurrentStep(state),
});

export default connect(mapStateToProps, null)(AppComponent);