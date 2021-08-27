import { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';

import { setIsLoggedIn, setUserId } from '../../store/userSlice';

import { LogoIcon } from '../Logo';

import styles from './Header.module.css';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const reduxDispatch = useDispatch();
  const [selectedKey, setSelectedKey] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (history.location.pathname === '/') {
      setSelectedKey('search');
    } else {
      setSelectedKey('favorites');
    }
  }, [history.location.pathname]);

  return (
    <Row align="middle" >
      <Col flex='none'>
        <div className={styles.logoWrapper}>
          <LogoIcon
            width={44}
            height={44}
          />
        </div>
      </Col>
      <Col flex='auto'>
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
      </Col>
      <Col flex='none'>
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
      </Col>
    </Row>
  );
};

export default Header;
