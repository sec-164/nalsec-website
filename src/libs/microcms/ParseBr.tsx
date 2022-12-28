export const ParseBr = ({ text }: { text: string }) => {
  return (
    <>
      {text
        .split(/(\n)/)
        .map((line, index) =>
          line.match(/\n/) ? <br key={index} /> : <>{line}</>
        )}
    </>
  );
};
