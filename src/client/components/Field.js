import S from 'styles/field';
import FieldCell from 'components/FieldCell';

export default class Field extends React.PureComponent {
	render() {
		const {cells, handleCellClick} = this.props;

		return <div className={S['field-wrapper']}>
			<div className={S.field}>
				{[0, 1, 2].map(row => (<div className={S['field-row']} key={row}>
					{cells.slice(row*3, row*3+3).map(cell =>
						<FieldCell cell={cell} key={cell.id} onClick={handleCellClick}/>)}
				</div>))}
			</div>
		</div>
	}
}
