import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";
import { useState } from "react";
import { cn } from "tailwind-cn";
import { getColor } from "../services/color";
import { generateUID } from "../services/uuid";

const initialClass =
  "w-7/10 h-4/5 bg-gray-900 rounded-xl border border-gray-700 flex-none";
const baseClass =
  "min-h-32 min-w-32 relative rounded-md p-2 transition-all gap-2 border border-white overflow-hidden";

type FlexBoxProps = {
  id: string;
  deleteChild: (id: string) => void;
  className: string;
};

export const FlexBox = ({
  id,
  deleteChild: deleteSelf,
  className: classNameFromParent,
}: FlexBoxProps) => {
  const color = getColor(id);

  const [children, setChildren] = useState<string[]>([]);
  const [edit, setEdit] = useState(false);
  const [className, setClassName] = useState(
    id === "INITIAL" ? "flex" : classNameFromParent
  );
  const [hover, setHover] = useState(false);

  const addChild = () => {
    setChildren([...children, generateUID()]);
  };

  const deleteChild = (id: string) => {
    setChildren(children.filter((child) => child !== id));
  };

  return (
    <motion.div
      className={`${cn(
        color,
        baseClass,
        (hover || edit) && (edit ? "pt-30" : "pt-10"),
        id === "INITIAL" && initialClass
      )} ${id === "FAKE" ? classNameFromParent : className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={cn(
          "flex flex-col gap-1 w-full p-1 opacity-0 transition-all absolute top-0 left-0 h-fit",
          (hover || edit) && "opacity-100"
        )}
      >
        <div
          className={cn(
            "flex h-8 justify-between items-center gap-1 w-full px-1"
          )}
        >
          <button
            onClick={() => setEdit(!edit)}
            className="rounded-md bg-white p-1 hover:shadow transition-all"
          >
            <CodeBracketIcon className="h-4 w-4 text-gray-900" />
          </button>
          <div className="flex items-center gap-1">
            <button
              className="rounded-md bg-white p-1 hover:shadow transition-all"
              onClick={addChild}
            >
              <PlusIcon className="h-4 w-4 text-gray-900" />
            </button>

            <button
              onClick={() =>
                id === "INITIAL" ? setChildren([]) : deleteSelf(id)
              }
              className="rounded-md bg-red-700 p-1 hover:shadow transition-all"
            >
              <TrashIcon className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>

        {edit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-18 px-1 flex gap-1"
          >
            <textarea
              className={cn(
                "flex-1 h-full rounded-md bg-black/15 px-2 text-white outline-none resize-none border",
                id === "INITIAL" ? "border-gray-700" : "border-white/75"
              )}
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
          </motion.div>
        )}
      </div>
      {children.map((child) => (
        <FlexBox
          key={child}
          id={child}
          deleteChild={deleteChild}
          className={classNameFromParent}
        />
      ))}
    </motion.div>
  );
};
