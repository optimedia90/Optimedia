import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseParallax({
  children,
  strength = 30,
  className = "",
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 80,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 80,
    damping: 18,
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveX =
        (e.clientX / window.innerWidth - 0.5) * strength;

      const moveY =
        (e.clientY / window.innerHeight - 0.5) * strength;

      x.set(moveX);
      y.set(moveY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () =>
      window.removeEventListener("mousemove", handleMouseMove);
  }, [strength]);

  return (
    <motion.div
      className={className}
      style={{
        x: springX,
        y: springY,
      }}
    >
      {children}
    </motion.div>
  );
}