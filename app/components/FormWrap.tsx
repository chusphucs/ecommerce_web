import React from "react";

interface formWrapProps {
  children: React.ReactNode;
}

export default function FormWrap({ children }: formWrapProps) {
  return (
    <div className="min-h-fit h-full flex items-center justify-center pt-24 pb-12">
      <div
        className="max-w-[650px] 
      w-full 
      flex 
      flex-col 
      gap-6 
      items-center 
      rounded-md 
      shadow-ml 
      shadow-slate-200 
      p-4 
      md:p-8"
      >
        {children}
      </div>
    </div>
  );
}
