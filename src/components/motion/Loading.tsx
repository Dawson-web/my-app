import { useState, useEffect } from "react";
import useMeasure from "react-use-measure";
import { useSpring, animated } from "@react-spring/web";
import styles from "@/components/motion/styles.module.css";

const ProgressLoader = () => {
  const [ref, { width }] = useMeasure();
  const [progress, setProgress] = useState(0);
  const [totalResources, setTotalResources] = useState(0);
  const [loadedResources, setLoadedResources] = useState(0);

  // 使用 progress 作为 useSpring 的配置项
  const props = useSpring({
    config: { duration: 500 },
    progress,
  });

  useEffect(() => {
    // 获取所有资源的PerformanceResourceTiming对象
    const entries = performance.getEntriesByType("resource");

    // 计算总资源数量（去除导航资源）
    const countResources = entries.filter(
      (entry) => entry.initiatorType !== "navigation"
    ).length;
    setTotalResources(countResources);

    // 计算已加载资源数量
    const loadedCount = entries.filter((entry) => entry.responseEnd > 0).length;
    setLoadedResources(loadedCount);

    // 更新进度
    const updateProgress = () => {
      const newProgress = (loadedCount / countResources) * 100;
      setProgress(newProgress);
    };

    updateProgress();

    // 监听资源加载事件
    const observer = new PerformanceObserver((list, observer) => {
      for (const entry of list.getEntries()) {
        if (entry.name && entry.responseEnd > 0) {
          setLoadedResources((prev) => prev + 1);
          updateProgress();
        }
      }
    });

    observer.observe({ entryTypes: ["resource"] });

    // 清理函数
    return () => {
      observer.disconnect();
    };
  }, [setProgress, setTotalResources, setLoadedResources]); // 添加所有 setState 函数到依赖列表

  return (
    <div className="sm:h-full h-[80%]">
      <div className="flex flex-col items-center h-full justify-center">
        <div className="animate-bounce">Loading...</div>
        <div
          ref={ref}
          className="relative w-[200px] h-[50px] cursor-pointer border-2 border-blue-900 rounded"
        >
          <animated.div
            className="w-full h-full absolute bg-blue-600"
            style={{ width: props.progress.interpolate((p) => `${p}%`) }}
          />
          <animated.div className="absolute w-full h-full flex items-center justify-center text-white ">
            {props.progress.to((p) => p.toFixed(0))}
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default ProgressLoader;
