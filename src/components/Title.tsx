import React from "react";

export default function Title({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center mb-4">
      <h3 className="py-1 px-3 bg-gray-600 rounded-md font-medium text-lg text-center">
        {children}
      </h3>
    </div>
  );
}
