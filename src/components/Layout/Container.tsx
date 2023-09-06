import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <div className="m-auto max-w-6xl">{children}</div>;
};

export default Container;
