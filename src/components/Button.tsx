"use client";

interface Props {
  onClick: any;
  className?: string
  children?: React.ReactNode
}

export const Button = ({ children, onClick }: Props) => {
  return (
      <button className="bg-sky-500 p-4" onClick={async () => onClick()}>{children}</button>
    )
}