"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import NProgress from "nprogress";
// import "../globals.css"; // Make sure your NProgress CSS is here

NProgress.configure({ showSpinner: false, trickleSpeed: 200, speed: 400 });

export default function ProgressBar() {
  const pathname = usePathname();
  const timer = useRef();

  useEffect(() => {
    // Start progress immediately on pathname change
    NProgress.start();

    // Finish progress after 500ms or when component re-renders
    timer.current = setTimeout(() => NProgress.done(), 800);

    return () => clearTimeout(timer.current);
  }, [pathname]);

  return null;
}
