import Card from '@/components/Card';
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import ButtonMD from './Button.md';

const ButtonDoc = () => {
  return (
    <Card>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={ButtonMD} />
    </Card>
  );
};

export default ButtonDoc;
