// @flow

import {handleActions} from 'redux-actions';
import {AppSteps} from 'src/client/constants/AppConstants';

export const AppInitialState: AppStateT = {
	currentStep: AppSteps.start,
}

export default handleActions({}, AppInitialState);