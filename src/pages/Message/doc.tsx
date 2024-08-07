import ReactMarkdown from 'react-markdown';
import Card from '@/components/card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MessageMD from './Message.md';
import '@/styles/example.scss';

const MessageDoc = () => {
  return (
    <Card>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={MessageMD} />
    </Card>
  );
};

export default MessageDoc;
