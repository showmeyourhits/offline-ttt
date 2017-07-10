// @flow

import {connect} from 'react-redux';
import {getCurrentStep} from 'src/client/selectors/BasicSelectors';
import AppComponent from 'src/client/components/AppComponent';

const mapStateToProps = (state: AppStateT) => ({
	currentStep: getCurrentStep(state),
});

export default connect(mapStateToProps, null)(AppComponent);