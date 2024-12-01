type GreetProps = {
  name: string;
  messageCount?: number;
  loggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  return (
    <div>
      {props.loggedIn ? (
        <h2 className="text-4xl text-white">
          Hi, I am {props.name} Message Count is {props.messageCount}
        </h2>
      ) : (
        <h2 className="text-4xl text-white">Guest User</h2>
      )}
    </div>
  );
};
