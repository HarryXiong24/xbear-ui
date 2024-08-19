import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import { Card } from '@/components';
import CardMD from './card.md';
import '@/styles/index.scss';

const CardDoc = () => {
  return (
    <Card className='markdown-body'>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={CardMD} />
    </Card>
  );
};

export default CardDoc;
