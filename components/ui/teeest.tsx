"use client";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";

export function AuroraBackgroundDemo({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuroraBackground>
      {children}
    </AuroraBackground>
  );
}
