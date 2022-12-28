import parse, {
  attributesToProps,
  domToReact,
  Element,
} from "html-react-parser";
import { Props } from "html-react-parser/lib/attributes-to-props";
import { ReactNode, ReactElement } from "react";

export const ParseHtml = ({
  text,
  replace,
}: {
  text: string;
  replace?: (
    props: Props,
    children: ReactNode
  ) => { [_: string]: ReactElement };
}) => (
  <>
    {replace
      ? parse(text, {
          replace: (domNode) => {
            if (!(domNode instanceof Element)) return null;
            const props = attributesToProps(domNode.attribs);
            const children = domToReact(domNode.children);

            return replace(props, children)[domNode.name];
          },
        })
      : parse(text)}
  </>
);
