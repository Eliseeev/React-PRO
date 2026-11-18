import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackSvg } from '../../../shared/assets/icons/back.svg';
import { IconButton } from '../../../shared/ui/IconButton/IconButton';
export function BackButton() {
	const navigate = useNavigate();

	return (
		<IconButton icon={<BackSvg />} label='Назад' onClick={() => navigate(-1)} />
	);
}
