"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import InquiryForm from "./inquirey-form";
import { usePathname } from "next/navigation";

export default function QueryPopup() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (pathname !== "/contact") setOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-lg rounded-2xl border border-border/40 backdrop-blur-xl bg-card/90 shadow-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Quick Query
          </DialogTitle>
          <DialogDescription className="text-center">
            Fill this short form and we'll reach out soon.
          </DialogDescription>
        </DialogHeader>

        <InquiryForm
          variant="dialog"
          title="Quick Query"
          description="Fill this short form and we'll reach out soon."
        />
      </DialogContent>
    </Dialog>
  );
}
