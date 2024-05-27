import { useEffect, useState } from "react";
import { ChildrenProps } from "../interface";
import { openSidebar } from "../redux/features/data/dataSlice";
import { useAppDispatch } from "../redux/hooks";

const Layout = ({ children }: ChildrenProps) => {
  const dispatch = useAppDispatch();
  const [screenSize, setScreenSize] = useState<number | null>(null);
  const checkWidth = () => {
    let windowWidth = null;
    if (typeof window !== "undefined") {
      windowWidth = window?.innerWidth;
      setScreenSize(windowWidth);
    }
    if (windowWidth) {
      if (windowWidth <= 768) dispatch(openSidebar(true));
      if (windowWidth >= 768) dispatch(openSidebar(false));
      return windowWidth;
    }
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, [screenSize]);
  return <div>{children}</div>;
};

export default Layout;
