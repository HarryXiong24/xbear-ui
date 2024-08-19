import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Card } from '@/components';
import ButtonMD from './button.md';
import '@/styles/index.scss';

const ButtonDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={ButtonMD} />
    </Card>
  );
};

export default ButtonDoc;
