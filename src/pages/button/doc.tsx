import Card from '@/components/card';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import ButtonMD from './button.md';
import '@/styles/_markdown.scss';

const ButtonDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={ButtonMD} />
    </Card>
  );
};

export default ButtonDoc;
