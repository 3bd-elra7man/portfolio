import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="relative group flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 overflow-hidden p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
       <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
       <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 font-medium text-white backdrop-blur-3xl">
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="ms-2 text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
      </span>
    </button>
  );
}

    