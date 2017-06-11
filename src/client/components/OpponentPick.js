import {AppSteps, OpponentTypes} from 'constants/AppConstants';
import ComputerIcon from 'react-icons/lib/md/computer';
import PersonIcon from 'react-icons/lib/md/person';
import worker from 'helpers/workerHelpers';
import S from 'styles/opponent';

export default class OpponentPickScreen extends React.PureComponent {
	static propTypes = {
		changeStep: PropTypes.func.isRequired,
		name: PropTypes.string.isRequired,
	}

	static OpponentNames = {
		[OpponentTypes.bot]: {icon: ComputerIcon, text: 'Computer'},
		[OpponentTypes.player]: {icon: PersonIcon, text: 'Other Person'},
	}

	handleOpponentPick = (event) => {
		const opponent = event.currentTarget.value;
		// this.props.changeStep(AppSteps.game);
		worker.postMessage({action: 'opponent_pick', payload: {value: opponent}});
	}


	render() {
		return (
			<div className={S.opponent_screen}>
				<div className={S.greeting}>{`Howdy, ${this.props.name}`}</div>
				<div className={S.greeting}>Pick opponent</div>
				{Object.values(OpponentTypes).map(type => {
					const {icon: Icon, text} = this.constructor.OpponentNames[type];

					return (
						<button
							value={type}
							className={`${S.button} ${false ? S.disabled : ''}`}
							onClick={this.handleOpponentPick}
						>

							<Icon size={30} />
							<span>{text}</span>
						</button>
					);
				})}
			</div>
		);
	}
}
