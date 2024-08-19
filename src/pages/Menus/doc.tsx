import ReactMarkdown from 'react-markdown';
import Card from '@/components/ui/card';
import rehypeHighlight from 'rehype-highlight';
import remarkGfm from 'remark-gfm';
import MenusMD from './Menus.md';
import '@/styles/example.scss';

const MenusDoc = () => {
  return (
    <Card>
      <ReactMarkdown rehypePlugins={[rehypeHighlight]} remarkPlugins={[remarkGfm]} children={MenusMD} />
    </Card>
  );
};

export default MenusDoc;
