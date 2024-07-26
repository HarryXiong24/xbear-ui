import { Outlet, useNavigate } from 'react-router-dom';
import Menu from './components/Menus/menu';
import Logo from './assets/logo.svg';
import { sider } from './routes';
import MenuItem from './components/Menus/menuItem';
import './App.scss';

const App = () => {
  const navigate = useNavigate();

  const findRoutePath = (selectedIndex: string) => {
    return sider.filter((item) => selectedIndex === String(item.id))[0];
  };

  return (
    <div className='App'>
      <header className='header'>
        <img src={Logo} className='icon' alt='logo' />
        <p className='title'>
          <span>X</span>bear<span>UI</span>
        </p>
      </header>

      <div className='sideBar'>
        <Menu
          mode='vertical'
          onSelect={(selectedIndex: string) => {
            const route = findRoutePath(selectedIndex);
            navigate(route.path);
          }}
        >
          {sider.map((item) => {
            return (
              <MenuItem key={item.id} index={String(item.id)}>
                {item.name}
              </MenuItem>
            );
          })}
        </Menu>
      </div>
      <div className='container'>
        <div
          className='site-layout-background'
          style={{
            padding: 24,
            marginBottom: 10,
            minHeight: '83vh',
          }}
        >
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default App;
