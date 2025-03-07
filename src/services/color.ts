const hashStringToNumber = (str: string, max: number): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash + str.charCodeAt(i)) % max;
  }
  return hash;
};

export const getColor = (str: string): string => {
  const colors = [
    "bg-purple-300",
    "bg-red-400",
    "bg-blue-400",
    "bg-green-300",
    "bg-pink-300",
    "bg-teal-300",
    "bg-orange-300",
    "bg-yellow-300",
    "bg-lime-300",
    "bg-fuchsia-300",
    "bg-violet-300",
    "bg-cyan-300",
    "bg-emerald-300",
    "bg-indigo-300",
    "bg-gray-300",
    "bg-zinc-300",
    "bg-neutral-300",
    "bg-stone-300",
    "bg-amber-300",
    "bg-lime-300",
    "bg-sky-300",
  ];
  const colorIndex = hashStringToNumber(str, colors.length);
  return colors[colorIndex] || "";
};
