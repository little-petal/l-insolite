import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
 
interface Props {
  children: React.ReactNode
}

export function Help({ children }: Props) {
  return (
  <Popover>
      <PopoverHandler>
          <img className="w-6 h-6" src={"/assets/icons/help.png"} alt="Aide" />
      </PopoverHandler>
      <PopoverContent placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        {children}
      </PopoverContent>
    </Popover>
  );
}