import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-20 right-6 z-50">
      <Link
        to="/#contact"
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 no-underline"
        aria-label="Contact Me"
      >
        <Mail size={20} />
        <span className="font-semibold text-sm hidden sm:inline">Contact Me</span>
      </Link>
    </div>
  );
}
