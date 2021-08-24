import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu } from 'antd';

import { setIsLoggedIn, setUserId } from '../../store/userSlice';

import { LogoIcon } from '../Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const reduxDispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState<string>('');
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') {
      setSelectedKey('search');
    } else {
      setSelectedKey('favorites');
    }
  }, [history.location.pathname]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.menuWrapper}>
        <div className={styles.menuLogoWrapper}>
          <div className={styles.logoWrapper}>
            <LogoIcon
              width={44}
              height={44}
            />
          </div>
          <Menu
            mode='horizontal'
            selectedKeys={[selectedKey]}
            style={{ borderColor: 'transparent' }}
            onClick={(e) => setSelectedKey(e.key)}
          >
            <Menu.Item key='search'>
              <NavLink
                to={'/'}
                className={styles.navlink}
              >
                Поиск
              </NavLink>
            </Menu.Item>
            <Menu.Item key='favorites'>
              <NavLink
                to={'/favorites'}
                className={styles.navlink}
              >
                Избранное
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
        <div>
          <Menu
            mode='horizontal'
            style={{ borderColor: 'transparent' }}
          >
            <Menu.Item key='logout'>
              <NavLink
                className={styles.navlink}
                to={'/login'}
                onClick={() => {
                  localStorage.removeItem('authToken');
                  reduxDispatch(setIsLoggedIn(false));
                  reduxDispatch(setUserId(''));
                }}>
                  Выйти
              </NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
