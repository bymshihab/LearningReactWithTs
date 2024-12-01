type NameListArrProps = {
  NameArr: {
    firstName: string;
    lastName: string;
  }[];
};

export const NameListArr = (props: NameListArrProps) => {
  const { NameArr } = props;
  return (
    <div>
      <h1>####### Name List #####</h1>
      {NameArr.map((name) => {
        return (
          <h1 key={name.firstName}>
            {name.firstName} {name.lastName}
          </h1>
        );
      })}
    </div>
  );
};
