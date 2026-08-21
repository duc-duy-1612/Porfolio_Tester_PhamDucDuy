import { CornerDownRight, Box, FileText, CheckCircle, Shield, ArrowRight } from "lucide-react";

interface DecompositionFlowProps {
  data: {
    requirement: { id: string; text: string };
    useCase: { id: string };
    userStory: { id: string; text: string };
    businessRules: { id: string; name: string }[];
    acceptanceCriteria: { id: string; text: string }[];
  };
}

export function DecompositionFlow({ data }: DecompositionFlowProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div className="decomposition-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
        gap: '24px', 
        padding: '24px', 
        backgroundColor: 'var(--bg-secondary)', 
        borderRadius: '8px', 
        border: '1px solid var(--border-color)' 
      }}>
        <div className="flow-step" style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', borderLeft: '4px solid var(--text-primary)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box size={14} /> Requirement
          </div>
          <div style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>{data.requirement.id}</div>
          <div style={{ fontSize: '0.95rem' }}>{data.requirement.text}</div>
        </div>
        
        <div className="flow-step" style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', borderLeft: '4px solid var(--text-secondary)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <CornerDownRight size={14} /> Use Case
          </div>
          <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>{data.useCase.id}</div>
        </div>

        <div className="flow-step" style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', borderLeft: '4px solid var(--text-secondary)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={14} /> User Story
          </div>
          <div style={{ fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px', fontSize: '1.05rem' }}>{data.userStory.id}</div>
          <div style={{ fontSize: '0.95rem' }}>{data.userStory.text}</div>
        </div>

        <div className="flow-step" style={{ padding: '20px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', borderLeft: '4px solid #f59e0b', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
          <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Shield size={14} /> Business Rules
          </div>
          <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {data.businessRules.map(br => (
              <li key={br.id}><strong>{br.id}</strong> — {br.name}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flow-step" style={{ padding: '24px', backgroundColor: 'var(--bg-primary)', borderRadius: '8px', border: '1px solid var(--border-color)', borderLeft: '4px solid var(--accent-primary, #10b981)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
        <div style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <CheckCircle size={14} /> Acceptance Criteria
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {data.acceptanceCriteria.map(ac => (
            <li key={ac.id}><strong>{ac.id}</strong> — {ac.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
