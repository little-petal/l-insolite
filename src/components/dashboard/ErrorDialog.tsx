'use client'

import { Button, Dialog, DialogBody, DialogFooter, DialogHeader } from "@material-tailwind/react";

interface Props {
  openError: boolean;
  handleOpenError: any;
  error: string;
}

export const ErrorDialog = ({ openError, handleOpenError, error }: Props) => {
  return (
    <Dialog open={openError} handler={handleOpenError} placeholder={undefined}>
      <DialogHeader placeholder={undefined}>Erreur</DialogHeader>
      <DialogBody placeholder={undefined}>{error}</DialogBody>
      <DialogFooter placeholder={undefined}>
        <Button
          variant="text"
          color="red"
          onClick={handleOpenError}
          className="mr-1"
          placeholder={undefined}
        >
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
