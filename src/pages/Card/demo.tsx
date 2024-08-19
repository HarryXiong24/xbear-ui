import { Card, Button } from '@/components';
import Logo from './demo.svg';
import '@/styles/index.scss';

const CardDemo = () => {
  const cardCss = { margin: '16px 16px', minWidth: '30%' };
  return (
    <div className='demo-container'>
      <Card title='基本使用' shadow style={cardCss} titleOverflowHidden={false}>
        <h1>I am Card!</h1>
      </Card>
      <Card title='基本使用' shadow style={cardCss} titleOverflowHidden={false} cover={Logo}>
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='title 右边自定义 Node 元素'
        shadow
        style={cardCss}
        extra={
          <div>
            <Button
              type='ghost'
              onClick={() => {
                alert('I was clicked!');
              }}
            >
              按钮
            </Button>
          </div>
        }
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='卡片带按钮'
        shadow
        actions={[
          {
            name: '按钮1',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮2',
            event: () => {
              alert('I was clicked!');
            },
          },
        ]}
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='卡片带按钮'
        shadow
        actions={[
          {
            name: '按钮1',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮2',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮3',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮4',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮5',
            event: () => {
              alert('I was clicked!');
            },
          },
          {
            name: '按钮6',
            event: () => {
              alert('I was clicked!');
            },
          },
        ]}
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card title='悬浮出现卡片阴影' showShadowWhenHover style={cardCss}>
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='测试标题溢出 asdasdasdasdasdassdasdasddasasdasdasdasdasdasdasdasdsdsdsdssdasdasdasdasdasdasdasdasds'
        titleOverflowHidden={false}
        showShadowWhenHover
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
      <Card
        title='测试标题溢出 asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasds'
        titleOverflowHidden={true}
        showShadowWhenHover
        style={cardCss}
      >
        <h1>I am Card!</h1>
      </Card>
    </div>
  );
};

export default CardDemo;
