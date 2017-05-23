import S from 'styles/field';
import FieldCell from 'components/FieldCell';
import {getStartField} from 'helpers';

export default class Field extends React.PureComponent {
	state = {
		cells: getStartField(),
	}

	handleCellClick = (id) => {
		console.log({id});
	}

	render() {
		const {cells} = this.state;

		return <div className={S['field-wrapper']}>
			<div className={S.field}>
				{cells.map(cell =>
					<FieldCell cell={cell} key={cell.id} onClick={this.handleCellClick}/>)}
			</div>
		</div>
	}
}
