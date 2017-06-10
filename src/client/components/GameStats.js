import S from 'styles/game_stats';

export default class GameStats extends React.PureComponent {
	static propTypes = {
		playerX: {
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		},
		playerO: {
			id: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
		},
		turn: PropTypes.oneOf(['o', 'x']),
		score: {
			x: PropTypes.number.isRequired,
			o: PropTypes.number.isRequired,
		}
	}

	static defaultProps = {
		turn: 'o',
		playerX: {
			id: 'x',
			name: 'Notorius B.I.G.'
		},
		playerO: {
			id: 'o',
			name: 'Beasty Boy'
		},
		score: {
			o: 0,
			x: 1,
		}
	}

	render() {
		const {turn, playerO, playerX, score} = this.props;

		return <div className={S.game_stats}>
			<div className={S.names}>
				<div className={S.name_x}>{playerX.name}</div>
				<div className={S.vs}>vs.</div>
				<div className={S.name_o}>{playerO.name}</div>
			</div>
			<div></div>
		</div>;
	}
}
