import { useState } from 'react';
import Button from '@/components/Button';
import Card from '@/components/Card';
import '@/styles/example.scss';

const ButtonDemo = () => {
  const commonCss = { marginTop: 10, marginBottom: 20, marginRight: 20 };
  const cardCss = { margin: '20px 20px 0 0' };
  const textCss = { fontSize: 14, marginBottom: 20 };

  const [small, setSmall] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <div className='demo-container'>
      <div className='demo-item'>
        <Card title='基础使用' style={cardCss} shadow>
          <div style={textCss}>
            支持<code> 5种 </code>类型的按钮
          </div>
          <Button type='default' style={commonCss}>
            Default
          </Button>
          <Button type='primary' style={commonCss}>
            Primary
          </Button>
          <Button type='secondary' style={commonCss}>
            Secondary
          </Button>
          <Button type='success' style={commonCss}>
            Success
          </Button>
          <Button type='warning' style={commonCss}>
            Warning
          </Button>
          <Button type='danger' style={commonCss}>
            Danger
          </Button>
          <Button type='dark' style={commonCss}>
            Dark
          </Button>
          <div
            style={{
              backgroundColor: '#e6ecf1',
              height: 40,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
          >
            <Button type='ghost'>Ghost</Button>
          </div>
          <Button type='link' style={commonCss}>
            Link
          </Button>
        </Card>
      </div>
      <div className='demo-item'>
        <Card title='不同大小' style={cardCss} shadow>
          <div style={textCss}>
            具有两种类型的大小，分别是 <code>sm 和 lg</code> 默认是 <code>sm</code> 类型{' '}
          </div>
          <Button size={small ? 'sm' : 'lg'} type='default' style={commonCss} onClick={() => setSmall(!small)}>
            {small ? 'Small' : 'Large'} Default
          </Button>
          <Button size={small ? 'sm' : 'lg'} type='primary' style={commonCss} onClick={() => setSmall(!small)}>
            {small ? 'Small' : 'Large'} Primary
          </Button>
          <Button size={small ? 'sm' : 'lg'} type='danger' style={commonCss} onClick={() => setSmall(!small)}>
            {small ? 'Small' : 'Large'} Danger
          </Button>
          <div
            style={{
              backgroundColor: '#e6ecf1',
              height: 50,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
          >
            <div>
              <Button size={small ? 'sm' : 'lg'} type='ghost' onClick={() => setSmall(!small)}>
                {small ? 'Small' : 'Large'} Ghost
              </Button>
            </div>
          </div>
          <Button size={small ? 'sm' : 'lg'} type='link' style={commonCss} onClick={() => setSmall(!small)}>
            {small ? 'Small' : 'Large'} Link
          </Button>
        </Card>
      </div>
      <div className='demo-item'>
        <Card title='Icon 按钮' style={cardCss} shadow>
          <Button icon='check' theme='warning' type='default' style={commonCss}>
            Default
          </Button>
          <Button icon='battery-half' type='primary' style={commonCss}>
            Primary
          </Button>
          <Button icon='bolt' type='danger' style={commonCss}>
            Danger
          </Button>
          <div
            style={{
              backgroundColor: '#e6ecf1',
              height: 40,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
          >
            <Button icon='caret-square-right' type='ghost'>
              Ghost
            </Button>
          </div>
          <Button type='link' style={commonCss}>
            Link
          </Button>
        </Card>
      </div>
      <div className='demo-item'>
        <Card title='圆形 Icon 按钮' style={cardCss} shadow>
          {/* 小 */}
          <div>
            <Button icon='bolt' circle size='sm' type='secondary' style={commonCss} />
            <Button icon='battery-half' circle size='sm' type='secondary' style={commonCss} />
            <Button icon='check' size='sm' circle type='success' style={commonCss} />
          </div>
          {/* 常规
            <div>
              <Button icon="bolt" circle type="primary" style={commonCss} />
              <Button
                icon="battery-half"
                circle
                type="danger"
                style={commonCss}
              />
              <Button icon="check" circle type="dark" style={commonCss} />
            </div> */}
          {/* 大 */}
          <div>
            <Button icon='bolt' circle size='lg' type='secondary' style={commonCss} />
            <Button icon='battery-half' circle size='lg' type='secondary' style={commonCss} />
            <Button icon='check' size='lg' circle type='success' style={commonCss} />
          </div>
        </Card>
      </div>
      <div className='demo-item'>
        <Card title='加载中...' style={cardCss} shadow>
          <Button loading type='default' style={commonCss}>
            Default Loading
          </Button>
          <Button loading icon='battery-half' type='primary' style={commonCss}>
            Primary Loading
          </Button>
          <Button loading type='danger' style={commonCss}>
            Danger Loading
          </Button>
          <div
            style={{
              backgroundColor: '#e6ecf1',
              height: 40,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
          >
            <Button loading type='ghost'>
              Ghost Loading
            </Button>
          </div>
          <Button loading type='link' style={commonCss}>
            Link Loading
          </Button>
          <div style={{ marginBottom: 20 }}>
            <code>⬇️ 点击按钮后进入加载状态，1 秒后恢复</code>
          </div>
          <Button
            loading={loading}
            type='primary'
            style={commonCss}
            icon='bolt'
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          >
            Click me!
          </Button>
        </Card>
      </div>
      <div className='demo-item'>
        <Card title='不可用' style={cardCss} shadow>
          <Button type='default' disabled style={commonCss}>
            Default
          </Button>
          <Button type='primary' disabled style={commonCss}>
            Primary
          </Button>
          <Button type='secondary' disabled style={commonCss}>
            Secondary
          </Button>
          <Button type='success' disabled style={commonCss}>
            Success
          </Button>
          <Button type='warning' disabled style={commonCss}>
            Warning
          </Button>
          <Button type='danger' disabled style={commonCss}>
            Danger
          </Button>
          <Button type='dark' disabled style={commonCss}>
            Dark
          </Button>
          <div
            style={{
              backgroundColor: '#e6ecf1',
              height: 40,
              borderRadius: 4,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 20,
            }}
          >
            <Button type='ghost' disabled>
              Ghost
            </Button>
          </div>
          <Button type='link' style={commonCss} disabled>
            Link
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default ButtonDemo;
