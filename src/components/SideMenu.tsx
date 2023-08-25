"use client";

import { Heart, MessageSquare } from "lucide-react";

export function SideMenu({ commentLength }: { commentLength: number }) {
  const handleContact = () => {
    const contactSection = document.querySelector("#comment");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="card flex flex-col items-center gap-8 sticky top-[75px]">
      <button type="button" className="group">
        <Heart size={32} className="group-hover:text-red-400" />
        <span>0</span>
      </button>
      <button type="button" onClick={handleContact} className="group">
        <MessageSquare size={32} className="group-hover:text-red-400" />
        <span>{commentLength}</span>
      </button>
    </div>
  );
}
