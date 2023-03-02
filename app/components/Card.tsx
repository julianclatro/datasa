import React from "react";

type UserProps = {
  name: string;
};

type CardProps = {
  user: UserProps;
};

export const Card: React.FunctionComponent<CardProps> = ({ user }) => {
  const { name } = user;
  return (
    <div className="bg-red text-white py-2 px-4 m-4 w-min rounded-md">
      {name}
    </div>
  );
};
