"use client";

interface Props {
  onClick: any;
  className?: string
  children?: React.ReactNode
}

export const Button = ({ children, onClick, className }: Props) => {
  return (
      <button className={className} onClick={async () => onClick()}>{children}</button>
    )
}