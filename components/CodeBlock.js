import highlight from "highlight.js";

function CodeBlock({ children }) {
  //if(!children){return <></>}
  const highlighted = highlight.highlightAuto(children[0]).value;

  return (
    <pre className="hljs">
      <code dangerouslySetInnerHTML={{ __html: highlighted }} />
    </pre>
  );
}

export default CodeBlock;