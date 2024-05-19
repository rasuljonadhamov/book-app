import ReactMarkdown from "react-markdown";

const MarkdownEditor = ({ content, setContent }) => {
  return (
    <div>
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default MarkdownEditor;
