import ReactMarkdown from 'react-markdown';
import Card from '@/components/card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MessageMD from './message.md';
import '@/styles/_markdown.scss';

const MessageDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={MessageMD} />
    </Card>
  );
};

export default MessageDoc;
