"use client";

import { PropsWithChildren, useState } from "react";
// import { Dialog, DialogContent } from "./ui/dialog";

export function MyDialog({ children }: PropsWithChildren<{}>) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h2>my dialog {open ? "open" : "closed"}</h2>
      <div>{children}</div>
    </div>
  );
}
