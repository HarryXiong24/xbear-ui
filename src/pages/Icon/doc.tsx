import ReactMarkdown from 'react-markdown';
import Card from '@/components/card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import IconMD from './Icon.md';
import '@/styles/example.scss';

const IconDoc = () => {
  return (
    <Card>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={IconMD} />
    </Card>
  );
};

export default IconDoc;
