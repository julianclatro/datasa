import React from "react";

type BadgeProps = {
  label: string;
};

export const Badge: React.FunctionComponent<BadgeProps> = ({ label }) => {
  return (
    <div className="bg-red text-white py-2 px-4 m-4 w-min rounded-md">
      {label}
    </div>
  );
};
