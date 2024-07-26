import ReactMarkdown from 'react-markdown';
import Card from '@/components/Card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import TabsMD from './Tabs.md';
import '@/styles/example.scss';

const MessageDoc = () => {
  return (
    <Card>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={TabsMD} />
    </Card>
  );
};

export default MessageDoc;
