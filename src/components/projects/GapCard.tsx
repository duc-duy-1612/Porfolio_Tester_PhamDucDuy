import { AlertTriangle, ShieldAlert } from "lucide-react";

interface GapCardProps {
  gap: {
    id: string;
    title: string;
    description: string;
    target?: string;
    current?: string;
  };
}

export function GapCard({ gap }: GapCardProps) {
  return (
    <div className="gap-card" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      backgroundColor: 'var(--bg-secondary)',
      border: '1px solid var(--border-color)',
      borderRadius: '8px',
      borderLeft: '4px solid #ef4444' // Red color to indicate a gap/warning
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '8px', borderRadius: '50%' }}>
          {gap.id.includes("SEC") || gap.title.includes("Credential") ? (
            <ShieldAlert size={20} />
          ) : (
            <AlertTriangle size={20} />
          )}
        </div>
        <div>
          <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#ef4444', marginBottom: '4px' }}>{gap.id}</div>
          <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{gap.title}</h4>
        </div>
      </div>
      
      <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{gap.description}</p>
      
      {(gap.target || gap.current) && (
        <div className="two-column-comparison" style={{ marginTop: '8px' }}>
          {gap.target && (
            <div style={{ padding: '16px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px' }}>Target Requirement</div>
              <div style={{ fontSize: '0.9rem' }}>{gap.target}</div>
            </div>
          )}
          {gap.current && (
            <div style={{ padding: '16px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid var(--border-color)' }}>
              <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px' }}>Current Implementation</div>
              <div style={{ fontSize: '0.9rem' }}>{gap.current}</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
