import S from 'styles/app';
import Field from 'components/Field';
import GameStats from 'components/GameStats';
import {getStartField} from 'helpers/helpers';
import worker from 'helpers/workerHelpers';

export default class AppComponent extends React.PureComponent {
	state = {
		cells: getStartField(),
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

	render() {
		return (
			<div className={S.app}>
				<GameStats />
				<Field
					handleCellClick={this.handleCellClick}
					cells={this.state.cells}
				/>
			</div>
		);
	}
}