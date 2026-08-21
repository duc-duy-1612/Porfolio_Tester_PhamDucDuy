import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage").then(module => ({ default: module.HomePage })));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage").then(module => ({ default: module.NotFoundPage })));
const ProjectDetailPage = lazy(() => import("./pages/ProjectDetailPage").then(module => ({ default: module.ProjectDetailPage })));

export function App() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();

  const page = (
    <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-gray-500 font-medium">Loading...</div>}>
      <Routes location={location}>
        <Route element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects/:slug" element={<ProjectDetailPage />} />
          <Route path="404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );

  if (reducedMotion) {
    return page;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
      >
        {page}
      </motion.div>
    </AnimatePresence>
  );
}
