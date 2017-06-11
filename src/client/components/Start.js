import {AppSteps} from 'constants/AppConstants';
import S from 'styles/start';

export default class StartScreen extends React.PureComponent {
	static propTypes = {
		changeStep: PropTypes.func.isRequired,
	}

	state = {
		name: 'Yoba',
	}

	componentDidMount() {
		if (this.inputRef !== null) {
			this.inputRef.focus();
		}
	}

	setInputRef = el => this.inputRef = el

	handleKeyPress = (event) => {
		if (event.charCode === 13) {
			this.props.changeStep(AppSteps.opponentPick);
		}		
	}

	handleNameChange = (event) => {
		this.setState({name: event.target.value});
	}

	render() {
		return (
			<div className={S.start}>
				<input
					placeholder={'Your name...'}
					className={S.name_input}
				 	ref={this.setInputRef}
					type="text"
					onKeyPress={this.handleKeyPress}
					onChange={this.handleNameChange}
					value={this.state.name}
				/>
			</div>
		);
	}
}
