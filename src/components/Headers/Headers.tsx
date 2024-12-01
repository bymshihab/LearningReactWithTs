type HeadersProps = {
  children: string;
};

export const Headers = (props: HeadersProps) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};
