import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import TabsMD from './tabs.md';
import { Card } from '@/components';
import '@/styles/index.scss';

const MessageDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={TabsMD} />
    </Card>
  );
};

export default MessageDoc;
