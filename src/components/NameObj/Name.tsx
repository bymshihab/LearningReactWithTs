type personProps = {
  personName: {
    first: string;
    middle: string;
    last: string;
  };
};

export const NameObj = (props: personProps) => {
  const { first, middle, last } = props.personName;

  return (
    <div>
      <h1> firstName : {props.personName.first}</h1>
      <h1> middleName : {props.personName.middle}</h1>
      <h1> firstName : {props.personName.last}</h1>
      <h1>########## Using Destructing ######### </h1>
      <h1> firstName : {first}</h1>
      <h1> middleName : {middle}</h1>
      <h1> firstName : {last}</h1>
    </div>
  );
};
