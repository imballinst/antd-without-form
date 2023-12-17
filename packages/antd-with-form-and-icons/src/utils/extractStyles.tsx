import { renderToString } from "react-dom/server";
import { createCache, StyleProvider, extractStyle } from "@ant-design/cssinjs";

export function extractStyles(components: Array<any>) {
  const cache = createCache();
  const elements = components.map((Component, idx) => <Component key={idx} />);

  const htmlString = renderToString(
    <StyleProvider cache={cache}>{elements}</StyleProvider>
  );
  return { style: extractStyle(cache), htmlString };
}
