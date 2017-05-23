import S from 'styles/app';
import Field from 'components/Field';

export default class AppComponent extends React.PureComponent {
	render() {
		return (
			<div className={S.app}>
				Imma Application
				<Field />
			</div>
		);
	}
}