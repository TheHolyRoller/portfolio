/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";


export const AnimatedTooltip = ({
  items,
}: {
  items: {
    
    id: number;
    name: string;
    svg?: React.ReactNode;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <>
      {items.map((item) => (
        <div
        // flex flex-row items-center justify-center mb-10 w-full
        // -mr-4 relative group outline-lime-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12
          className=""
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{ translateX, rotate, whiteSpace: "nowrap" }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="font-bold text-white relative z-30 text-base inline-block outline-slate-50">
                  {item.name}
                </div>
                {/* <div className="text-white text-xs">{item.designation}</div> */}
              </motion.div>
            )}
          </AnimatePresence>
          {item.svg ? (
            <div
              onMouseMove={handleMouseMove}
              className="rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white relative transition duration-500"
            >
              {item.svg}
            </div>
          ) : (
           <div></div>
          )}
        </div>
      ))}
    </>
  );
};
