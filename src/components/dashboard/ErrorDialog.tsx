'use client'

import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

interface Props {
  openError: boolean;
  handleOpenError: any;
  error: string;
}

export const ErrorDialog = ({ openError, handleOpenError, error }: Props) => {
  return (
    <Dialog open={openError} handler={handleOpenError} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      <DialogHeader placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>Erreur</DialogHeader>
      <DialogBody placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>{error}</DialogBody>
      <DialogFooter placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <Button
          variant="text"
          color="red"
          onClick={handleOpenError}
          className="mr-1"
          placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
