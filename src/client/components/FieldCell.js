import CircleIcon from 'react-icons/lib/md/panorama-fish-eye';
import CloseIcon from 'react-icons/lib/md/close';
import S from 'styles/cell.scss';

export default class FieldCell extends React.PureComponent {
	static propTypes = {
		cell: PropTypes.shape({
			value: PropTypes.oneOf(['x', 'o', null]),
			id: PropTypes.number,
		}).isRequired,
		onClick: PropTypes.func.isRequired,
	}

	static defaultProps = {
		cell: {
			id: null,
			value: null,
		},
	}

	static renderCellIcon = (value) => {
		switch (value) {
			case 'x':
				return <CircleIcon />;
			case 'o':
				return <CloseIcon />;
			default:
				return null;
		}
	}

	handleClick = () => {
		const {cell: {id}, onClick} = this.props;

		if (typeof onClick === 'function') {
			onClick(id);
		}
	}

	render() {
		const {cell} = this.props;

		return (
			<div className={S.cell} onClick={this.handleClick}>
				{this.constructor.renderCellIcon(cell.value)}
			</div>);
	} 
}
