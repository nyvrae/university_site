"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.6,
    yOffset = 40,
    className = "",
}: {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    yOffset?: number;
    className?: string;
}) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    return (
        <div ref={ref}>
            <motion.div
                initial={{ opacity: 0, y: yOffset }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration, delay, ease: "easeOut" }}
                className={className}
            >
                {children}
            </motion.div>
        </div>
    );
}
