import ReactMarkdown from "react-markdown";
import { useEffect } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useState } from "react";

export default function ToMarkdown(props: any) {
  const [file, setFile] = useState(props.file);

  useEffect(() => {
    setFile(props.file);
  }, [props.file]);

  return (
    <div className="min-w-[300px] w-[80vw]">
      <ReactMarkdown
        components={{
          code(props) {
            const { className, children } = props;
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <SyntaxHighlighter language={match[1]} style={a11yDark}>
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code {...props}>{children}</code>
            );
          },
        }}
      >
        {file}
      </ReactMarkdown>
    </div>
  );
}
