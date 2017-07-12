// @flow

import React from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import {AppSteps, transitionAppSlide} from 'client/constants/AppConstants';
import S from 'styles/app';
import Start from 'client/components/Start';
import OpponentPick from 'client/components/OpponentPick';
import GameStats from 'client/components/GameStats';
import Field from 'client/components/Field';
import {getStartField} from 'client/helpers/helpers';
import worker from 'client/helpers/workerHelpers';

export default class AppComponent extends React.PureComponent {
	

	state = {
		cells: getStartField(),
		step: AppSteps.start,
	}

	handleCellClick = (id) => {
		this.setState(prevState => ({
			cells: prevState.cells.map(cell =>
				cell.id === id
				? {...cell, value: 'x'}
				: cell)
		}));
		worker.postMessage({standing: 'in the rain'});
	}

	renderStep = () => {
		const {step} = this.state;

		switch (step) {
			case (AppSteps.start):
				return <Start
					key={AppSteps.start}
					changeStep={this.changeStep}
				/>
			case (AppSteps.game):
				return <div key={AppSteps.game}>
					<GameStats />
					<Field
						handleCellClick={this.handleCellClick}
						cells={this.state.cells}
					/>
				</div>
			case (AppSteps.opponentPick):
				return <OpponentPick />
			default:
				throw Error(`Wrong step: ${step}`);
		}
	}

	changeStep = (step) => {
		if (Object.values(AppSteps).includes(step)) {
			this.setState({step});
		}
	}

	render() {
		return (
			<CSSTransitionGroup
				transitionName={transitionAppSlide}
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
				component="div"
				className={S.app}
			>
				{this.renderStep()}
			</CSSTransitionGroup>
		);
	}
}