import ReactMarkdown from 'react-markdown';
import Card from '@/components/card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import IconMD from './Icon.md';
import '@/styles/_markdown.scss';

const IconDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={IconMD} />
    </Card>
  );
};

export default IconDoc;
