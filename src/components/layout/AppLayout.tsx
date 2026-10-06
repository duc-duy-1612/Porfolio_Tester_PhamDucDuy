import { Outlet } from "react-router-dom";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { FloatingCTA } from "../ui/FloatingCTA";
import { ScrollProgressBar } from "../ui/ScrollProgressBar";
import { AnimatedBackground } from "../ui/AnimatedBackground";

export function AppLayout() {
  useScrollToHash();

  return (
    <>
      <AnimatedBackground />
      <ScrollProgressBar />
      <Header />
      <Outlet />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </>
  );
}
