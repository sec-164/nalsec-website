import { Fragment } from "react";

export const ParseBr = ({ text }: { text: string }) => {
  return (
    <>
      {text
        .split(/(\n)/)
        .map((line, index) =>
          line.match(/\n/) ? (
            <br key={index} />
          ) : (
            <Fragment key={index}>{line}</Fragment>
          )
        )}
    </>
  );
};
