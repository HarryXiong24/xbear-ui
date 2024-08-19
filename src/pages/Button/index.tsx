import { Tabs } from '@/components';
import ButtonDemo from './demo';
import ButtonDoc from './doc';

const ButtonPage = () => {
  return (
    <Tabs type='line' defaultIndex={0}>
      <Tabs.Item label='Demo'>
        <ButtonDemo />
      </Tabs.Item>
      <Tabs.Item label='API'>
        <ButtonDoc />
      </Tabs.Item>
    </Tabs>
  );
};

export default ButtonPage;
