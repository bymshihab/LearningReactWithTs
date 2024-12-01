type GreetProps = {
  name: string;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2 className="text-4xl text-white">Hi, I am {props.name}</h2>
    </div>
  );
};
