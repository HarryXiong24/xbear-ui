import Card from '@/components/card';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import CardMD from './card.md';
import '@/styles/_markdown.scss';

const CardDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={CardMD} />
    </Card>
  );
};

export default CardDoc;
