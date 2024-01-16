"use client";

import { type ElementRef, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Profile } from "@/types";

export function Modal({
  children,
  profile,
}: {
  children?: React.ReactNode;
  profile?: Profile;
}) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss(open: boolean) {
    !open && router.back();
  }

  return createPortal(
    <Dialog defaultOpen modal onOpenChange={onDismiss}>
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent style={{ maxWidth: "960px", minHeight: "730px" }}>
        {children}
      </DialogContent>
    </Dialog>,
    document.getElementById("modal-root")!
  );
}
