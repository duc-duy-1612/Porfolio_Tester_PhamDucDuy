import { Outlet } from "react-router-dom";
import { useScrollToHash } from "../../hooks/useScrollToHash";
import { useTheme } from "../../hooks/useTheme";
import { BackToTop } from "./BackToTop";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { FloatingCTA } from "../ui/FloatingCTA";
import { ScrollProgressBar } from "../ui/ScrollProgressBar";

export function AppLayout() {
  const { theme, toggleTheme } = useTheme();
  useScrollToHash();

  return (
    <>
      <ScrollProgressBar />
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <Outlet />
      <Footer />
      <FloatingCTA />
      <BackToTop />
    </>
  );
}
