import React from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 
interface Props {
  active: number;
  next: any;
  prev: any;
  max: number;
}

export function Pagination({active, next, prev, max} : Props) { 
  return (
    <div className="flex items-center gap-2 sm:gap-6 md:gap-8">
      <IconButton
        size="sm"
        variant="outlined"
        onClick={prev}
        disabled={active === 1} placeholder={undefined}
        onPointerEnterCapture={undefined} 
        onPointerLeaveCapture={undefined}      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
      <Typography color="gray" className="font-normal" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Page <strong className="text-gray-900">{active}</strong> of{" "}
        <strong className="text-gray-900">{max}</strong>
      </Typography>
      <IconButton
        size="sm"
        variant="outlined"
        onClick={next}
        disabled={active === max} placeholder={undefined}
        onPointerEnterCapture={undefined} 
        onPointerLeaveCapture={undefined}      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </IconButton>
    </div>
  );
}