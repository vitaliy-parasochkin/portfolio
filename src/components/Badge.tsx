import React from "react";

export default function Badge({ children }: React.ReactNode) {
  return (
    <div className="bg-gray-600 rounded-xl py-1 px-4 text-sm">{children}</div>
  );
}
