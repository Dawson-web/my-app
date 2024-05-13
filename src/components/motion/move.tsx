"use client";
import React, { useState, useRef } from "react";
import { useTrail, a } from "@react-spring/web";
import { useSpring, animated } from "@react-spring/web";
import { useControls } from "leva";
import styles from "@/components/motion/styles.module.css";
import clsx from "clsx";
import { Button } from "@/components/ui/button";

const Trail: React.FC<{ open: boolean; children: React.ReactNode }> = ({
  open,
  children,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 200,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 200, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const calc = (x: any, y: any, rect: any) => [
  -(y - rect.top - rect.height / 2) / 20,
  (x - rect.left - rect.width / 2) / 20,
  1.1,
];

const trans = (x: any, y: any, s: any) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Move() {
  const [open, set] = useState(false);

  const cardRef = useRef<HTMLDivElement | null>(null);
  const config = useControls({
    mass: 1,
    tension: 170,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  });

  const [{ xys }, api] = useSpring(
    () => ({ xys: [0, 0, 1], config }),
    [config]
  );

  const handleMouseLeave = () =>
    api.start({
      xys: [0, 0, 1],
    });

  const handleMouseMove = (e: any) => {
    if (cardRef.current) {
      // 添加null检查
      const rect = cardRef.current.getBoundingClientRect();
      api.start({
        xys: calc(e.clientX, e.clientY, rect),
      });
    }
  };

  return (
    <div
      className="w-full h-full flex  flex-row  justify-center items-center gap-10 flex-wrap"
      onClick={() => set((state) => true)}
      style={{
        fontFamily: "'Courier New', Courier, monospace",
      }}
      ref={cardRef}
    >
      <animated.div
        className={clsx(
          "p-2 w-1/3 h-1/2  min-w-[180px] min-h-[180px]  text-[1vw]",
          {
            [styles.card]: open,
          }
        )}
        style={{ transform: xys.to(trans) }}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        <Trail open={open}>
          <span className="text-slate-300/50 h-1/4">Dawson</span>
          <span className="text-slate-300/50 h-1/4">一位</span>
          <span className="text-slate-300/50 h-1/4">前端 </span>
          <span className="text-slate-300/50 h-1/4">卡皮巴拉</span>
        </Trail>
      </animated.div>
      <div
        style={{
          fontFamily: "'Courier New', Courier, monospace",
        }}
        className="h-full flex flex-col justify-center items-center gap-10 flex-wrap"
      >
        Start from here
        <Button>Click</Button>
      </div>
    </div>
  );
}
