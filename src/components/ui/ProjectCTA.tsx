
import { MessageSquare as MessageIcon } from "lucide-react";
import { Link } from "react-router-dom";

export function ProjectCTA() {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl shadow-sm my-16" style={{ backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)' }}>
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--primary)' }}>
        <MessageIcon size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text)' }}>
        Impressed by this project?
      </h3>
      <p className="text-lg mb-8 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
        Let's discuss how my analytical skills and domain knowledge can bring value to your team.
      </p>
      <Link to="/#contact" className="button button--primary flex items-center gap-2 px-8 py-3 text-lg">
        Get in touch <MessageIcon size={18} />
      </Link>
    </div>
  );
}
