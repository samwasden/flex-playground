import { useState } from "react";
import { FlexBox } from "../components/FlexBox";
import { AnimatePresence } from "motion/react";

export const Flex = () => {
  const [childClassName, setChildClassName] = useState("flex h-fit w-fit");

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center gap-2">
      <AnimatePresence>
        <FlexBox
          className={childClassName}
          id="INITIAL"
          deleteChild={() => {}}
        />
        <div className="h-4/5 w-1/5 bg-gray-900 rounded-xl border border-gray-700 p-2 flex flex-col gap-2">
          <span className="text-white">Default class name</span>
          <textarea
            className="w-full flex-1 rounded-md bg-black/5 px-2 text-white outline-none resize-none border-white/15 border"
            value={childClassName}
            onChange={(e) => setChildClassName(e.target.value)}
          />
        </div>
        <div className="max-w-0 max-h-0 absolute opacity-0 top-0 right-0 flex flex-row flex-row-reverse flex-col flex-col-reverse flex-wrap flex-wrap-reverse flex-nowrap flex-1 flex-[2] flex-[3] flex-[4] flex-[5] flex-[6] flex-auto flex-initial flex-none flex-grow flex-grow-0 flex-shrink flex-shrink-0 flex-1/2 flex-1/3 flex-2/3 flex-1/4 flex-3/4 flex-1/5 flex-2/5 flex-3/5 flex-4/5 flex-1/6 flex-5/6 justify-start justify-end justify-center justify-between justify-around justify-evenly items-start items-end items-center items-baseline items-stretch self-auto self-start self-end self-center self-stretch self-baseline content-center content-start content-end content-between content-around content-evenly gap-0 gap-1 gap-2 gap-3 gap-4 gap-5 gap-6 gap-7 gap-8 gap-9 gap-10 gap-11 gap-12 gap-14 gap-16 gap-20 gap-24 gap-28 gap-32 gap-36 gap-40 gap-44 gap-48 gap-52 gap-56 gap-60 gap-64 gap-72 gap-80 gap-96 order-1 order-2 order-3 order-4 order-5 order-6 order-7 order-8 order-9 order-10 order-11 order-12 order-first order-last order-none w-0 w-px w-0.5 w-1 w-1.5 w-2 w-2.5 w-3 w-3.5 w-4 w-5 w-6 w-7 w-8 w-9 w-10 w-11 w-12 w-14 w-16 w-20 w-24 w-28 w-32 w-36 w-40 w-44 w-48 w-52 w-56 w-60 w-64 w-72 w-80 w-96 w-auto w-1/2 w-1/3 w-2/3 w-1/4 w-3/4 w-1/5 w-2/5 w-3/5 w-4/5 w-1/6 w-5/6 w-full w-screen w-min w-max w-fit h-0 h-px h-0.5 h-1 h-1.5 h-2 h-2.5 h-3 h-3.5 h-4 h-5 h-6 h-7 h-8 h-9 h-10 h-11 h-12 h-14 h-16 h-20 h-24 h-28 h-32 h-36 h-40 h-44 h-48 h-52 h-56 h-60 h-64 h-72 h-80 h-96 h-auto h-1/2 h-1/3 h-2/3 h-1/4 h-3/4 h-1/5 h-2/5 h-3/5 h-4/5 h-1/6 h-5/6 h-full h-screen h-min h-max h-fit" />
      </AnimatePresence>
    </div>
  );
};
