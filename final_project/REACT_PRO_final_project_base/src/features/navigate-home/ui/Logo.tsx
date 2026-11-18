import { Link } from 'react-router-dom';
import { ReactComponent as LogoIcon } from '../../../shared/assets/icons/logo.svg';
import s from './Logo.module.css';

export function Logo() {
  return (
    <Link to='/'>
      <LogoIcon className={s['logo__pic']} aria-label='Логотип компании' />
    </Link>
  );
}
