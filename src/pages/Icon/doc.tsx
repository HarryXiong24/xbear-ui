import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import IconMD from './Icon.md';
import { Card } from '@/components';
import '@/styles/index.scss';

const IconDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={IconMD} />
    </Card>
  );
};

export default IconDoc;
