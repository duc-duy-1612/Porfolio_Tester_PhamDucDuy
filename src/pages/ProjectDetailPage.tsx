import { ArrowLeft, ArrowRight, ChevronRight, LockKeyhole, ArrowDown } from "lucide-react";
import React, { type ReactNode, Fragment, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { ArtefactGallery } from "../components/projects/ArtefactGallery";
import { DecompositionFlow } from "../components/projects/DecompositionFlow";
import { GapCard } from "../components/projects/GapCard";
import { ArtefactPreview } from "../components/ui/ArtefactPreview";
import { SectionHeading } from "../components/ui/SectionHeading";
import { TagList } from "../components/ui/TagList";
import { ConfidentialityNotice } from "../components/ui/ConfidentialityNotice";
import { LightboxImage } from "../components/ui/LightboxImage";
import { ProjectTableOfContents } from "../components/ui/ProjectTableOfContents";
import { ProjectCTA } from "../components/ui/ProjectCTA";
import { HighlightText } from "../components/ui/HighlightText";
import { getAdjacentProjects, getProjectBySlug } from "../data/projects";
import { profile } from "../data/profile";
import { useSEO } from "../hooks/useSEO";
import { optionalUrl } from "../utils/config";

export function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectDetailContent project={project} />;
}

function ProjectDetailContent({ project }: { project: NonNullable<ReturnType<typeof getProjectBySlug>> }) {
  const { previous, next } = getAdjacentProjects(project.slug);
  const [lightboxData, setLightboxData] = useState<{src: string, alt: string} | null>(null);

  useSEO({
    title: `${project.title} | ${profile.fullName}`,
    description: project.subtitle,
    canonical: optionalUrl(profile.contact.canonicalUrl)
      ? `${optionalUrl(profile.contact.canonicalUrl)}/projects/${project.slug}`
      : undefined,
    ogImage: optionalUrl(profile.contact.ogImage),
    structuredData: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      headline: project.subtitle,
      creator: {
        "@type": "Person",
        name: profile.fullName,
      },
      about: project.domain,
      description: project.problem,
    },
  });

  return (
    <main id="main-content" className="project-page full-width-content">
      <section className="project-hero section">
        <div className="section-container project-hero__grid" data-has-preview={!!(project.artefacts && project.artefacts.length > 0)}>
          <div>
            <Link className="breadcrumb-link" to="/#case-studies">
              <ArrowLeft aria-hidden="true" size={16} />
              Back to case studies
            </Link>
            <p className="eyebrow">{project.type}</p>
            <h1>{project.title}</h1>
            <p className="project-hero__subtitle">{project.subtitle}</p>
            {project.confidentiality ? (
              <p className="confidentiality-note confidentiality-note--hero">
                <LockKeyhole aria-hidden="true" size={18} />
                {project.confidentiality}
              </p>
            ) : null}
            {project.isAnonymised && (
              <ConfidentialityNotice message={project.confidentialityNotice} />
            )}
            {project.disclosure ? (
              <div className="disclosure-note">
                <strong>Academic Scope Note</strong>
                {project.disclosure}
              </div>
            ) : null}
            <TagList tags={project.tags} />
          </div>
          <div className="project-hero__preview">
            {project.artefacts && project.artefacts.length > 0 && (
               <ArtefactPreview artefact={project.artefacts[0]} projectTitle={project.title} />
            )}
          </div>
        </div>
      </section>

      <section className="section project-section">
        <div className="section-container flex flex-col lg:flex-row gap-12 relative items-start">
          <div className="flex-1 w-full min-w-0">
            <section className="project-snapshot" aria-label="Project metadata">
              <dl>
                <div>
                  <dt>Domain</dt>
                  <dd><HighlightText text={project.domain} /></dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd><HighlightText text={project.role} /></dd>
                </div>
                <div>
                  <dt>Period</dt>
                  <dd>{project.period}</dd>
                </div>
                <div>
                  <dt>Type</dt>
                  <dd>{project.type}</dd>
                </div>
              </dl>
            </section>

            <div className="case-study-flow">
            <CaseStudyBlock title="Overview">
              {project.summaryMetrics && (
                <div className="metric-grid" style={{ marginBottom: '32px' }}>
                  {project.summaryMetrics.map(m => (
                    <div key={m.label} className="metric-card">
                      <div className="metric-value">{m.value}</div>
                      <div className="metric-label">{m.label}</div>
                      {m.subtext && <div style={{ fontSize: '0.75rem', marginTop: '6px', color: 'var(--text-secondary)' }}>{m.subtext}</div>}
                    </div>
                  ))}
                </div>
              )}
              {project.overview && project.overview.split('\n\n').map((paragraph, i) => (
                 <p key={i}><HighlightText text={paragraph} /></p>
              ))}
              {project.scope && <p><HighlightText text={project.scope} /></p>}
            </CaseStudyBlock>

            {!project.testingObjective && project.businessProblem && (
              <CaseStudyBlock title="Business Problem">
                <ul className="check-list">
                  {project.businessProblem.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {project.testingObjective && (
              <CaseStudyBlock title="Testing Objective">
                <p>{project.testingObjective.description}</p>
                <div className="card-grid" style={{ marginTop: '24px' }}>
                  {project.testingObjective.focusCards.map(c => (
                    <div key={c.title} className="focus-card" style={{ padding: '20px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '8px' }}>{c.title}</h4>
                      <p style={{ margin: 0 }}>{c.description}</p>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}



            <CaseStudyBlock title="My Role">
              <ul className="check-list">
                {project.responsibilities.map((item) => (
                  <li key={item}><HighlightText text={item} /></li>
                ))}
              </ul>
            </CaseStudyBlock>

            {project.testCoverage && (
              <CaseStudyBlock title="Test Coverage">
                <div className="test-coverage-map">
                  {project.testCoverage.map(c => (
                    <div key={c.category} className="coverage-row">
                      <div className="coverage-category">{c.category}</div>
                      <div className="coverage-details">
                        <div className="coverage-tcs">{c.testCases}</div>
                        <div className="coverage-behaviors">{c.behaviours}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {project.testingApproach ? (
              <CaseStudyBlock title="Testing Approach">
                <div className="approach-list">
                  {project.testingApproach.map((step) => (
                    <article key={step.title} style={{ display: 'block', padding: '0', background: 'transparent', border: 'none' }}>
                      <div style={{ marginBottom: '24px' }}>
                        <h3>{step.title}</h3>
                        {step.flow && (
                          <div className="visual-flow-row">
                            {step.flow.map((node, i) => (
                              <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <span>{node} </span>
                                {i < step.flow!.length - 1 && <ArrowRight className="flow-arrow" size={14} aria-hidden="true" />}
                              </span>
                            ))}
                          </div>
                        )}
                        <p>{step.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </CaseStudyBlock>
            ) : null}



            {project.selectedTestCases && (
              <CaseStudyBlock title="Selected Test Cases">
                <p className="disclosure-note">{project.selectedTestCases.subtitle}</p>
                <div className="card-grid">
                  {project.selectedTestCases.cases.map(c => (
                    <div key={c.id} className="test-case-card" style={{ padding: '20px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <header style={{ marginBottom: '16px' }}>
                        <strong className="test-case-id" style={{ display: 'block', color: 'var(--primary)', marginBottom: '4px' }}>{c.id}</strong>
                        <h4 style={{ margin: 0 }}>{c.name}</h4>
                      </header>
                      <div className="test-case-body">
                        <dl style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: 0 }}>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <dt>Testing Focus</dt>
                            <dd>{c.focus}</dd>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <dt>Validation Logic</dt>
                            <dd>{c.validationLogic}</dd>
                          </div>
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                            <dt>What it demonstrates</dt>
                            <dd>{c.demonstrates}</dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {project.deepDive && (
              <CaseStudyBlock title="Deep Dive — Data Integrity Validation">
                <div className="step-flow" style={{ marginBottom: '24px' }}>
                  {project.deepDive.flow.map((step, index) => (
                    <Fragment key={index}>
                      <div className="deep-dive-row">
                        <span>{step} </span>
                      </div>
                      {index < project.deepDive!.flow.length - 1 && (
                        <ArrowRight className="step-flow-arrow" size={16} aria-hidden="true" />
                      )}
                    </Fragment>
                  ))}
                </div>
                <ul className="check-list">
                  {project.deepDive.description.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {project.automationStrategy && (
              <CaseStudyBlock title="Automation & Validation Strategy">
                <p>{project.automationStrategy.description}</p>
                <div style={{ marginTop: '24px' }}>
                  {project.automationStrategy.blocks.map(b => (
                    <div key={b.title} className="automation-block">
                      <h4>{b.title}</h4>
                      {b.flow && (
                        <div className="visual-flow-row" style={{ marginBottom: '16px' }}>
                          {b.flow.map((node, i) => (
                            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span>{node} </span>
                              {i < b.flow!.length - 1 && <ArrowRight className="flow-arrow" size={14} aria-hidden="true" />}
                            </span>
                          ))}
                        </div>
                      )}
                      {b.items && (
                        <ul className="check-list" style={{ marginBottom: '16px' }}>
                          {b.items.map(item => <li key={item}>{item}</li>)}
                        </ul>
                      )}
                      {b.formulas && (
                        <div style={{ marginBottom: '16px' }}>
                          {b.formulas.map(f => (
                            <div key={f} className="formula-block">
                              {f}
                            </div>
                          ))}
                        </div>
                      )}
                      {b.description && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{b.description}</p>}
                      {b.evidence && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}><em>{b.evidence}</em></p>}
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {!project.automationStrategy && project.solution && project.solution.length > 0 && (
              <CaseStudyBlock title="Proposed Solution or System Design">
                <ul className="check-list">
                  {project.solution.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CaseStudyBlock>
            )}

            {project.baPipeline && (
              <CaseStudyBlock title="Process / Pipeline">
                <div className="step-flow" style={{ padding: '16px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px' }}>
                  {project.baPipeline.map((step, index) => (
                    <Fragment key={step}>
                      <div style={{ padding: '12px 24px', backgroundColor: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center', fontWeight: 500 }}>
                        {step}
                      </div>
                      {index < project.baPipeline!.length - 1 && (
                        <ArrowRight className="step-flow-arrow" size={20} />
                      )}
                    </Fragment>
                  ))}
                </div>
                {project.asisNote && (
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '16px', paddingLeft: '12px', borderLeft: '3px solid var(--accent-primary)' }}>
                    <strong>AS-IS note:</strong> {project.asisNote}
                  </p>
                )}
              </CaseStudyBlock>
            )}

            {project.toBeProcess && (
              <CaseStudyBlock title="TO-BE Cross-Role Process">
                <div className="tobe-flow">
                  {project.toBeProcess.map((node, index) => (
                    <Fragment key={index}>
                      <div className="tobe-node">
                        {node.split(/\\n|\n/i).map((line, i) => (
                          <div key={i} className={i === 0 ? "tobe-node-title" : "tobe-node-text"}>
                            {line}
                          </div>
                        ))}
                      </div>
                      {index < project.toBeProcess!.length - 1 && (
                        <div className={`tobe-arrow ${index === 3 ? 'tobe-arrow-split' : ''}`}>
                          <ArrowRight className="arrow-horizontal" size={24} />
                          <ArrowDown className="arrow-vertical" size={24} />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
                {project.toBeProcessNote && (
                  <p className="tobe-note">
                    {project.toBeProcessNote}
                  </p>
                )}
              </CaseStudyBlock>
            )}

            {project.businessRules && (
              <CaseStudyBlock title="Key Business Rules">
                <div className="three-column-grid">
                  {project.businessRules.map(rule => (
                    <div key={rule.id} className="focus-card" style={{ padding: '24px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--accent-primary)', marginBottom: '8px' }}>{rule.id}</div>
                      <h4 style={{ marginBottom: '12px', fontSize: '1.1rem', lineHeight: 1.4 }}>{rule.name}</h4>
                      <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{rule.description}</p>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {project.orderLifecycle && (
              <CaseStudyBlock title="Order Lifecycle & State Control">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  <div className="lifecycle-flow">
                    {project.orderLifecycle.states.map((state, index) => (
                      <Fragment key={state}>
                        <div className={`lifecycle-node ${index === 0 ? 'lifecycle-node-origin' : 'lifecycle-node-state'}`}>
                          {state.split(/\\n|\n/i).map((line, i) => (
                            <span key={i} className={index === 0 && i === 1 ? 'lifecycle-origin-subtext' : 'lifecycle-node-text'}>
                              {line}
                            </span>
                          ))}
                        </div>
                        {index < project.orderLifecycle!.states.length - 1 && (
                          <div className="lifecycle-transition">
                            <ArrowDown className="lifecycle-transition-arrow arrow-vertical" size={16} />
                            <span className="lifecycle-transition-label">{project.orderLifecycle!.transitions[index]}</span>
                            <ArrowRight className="lifecycle-transition-arrow arrow-horizontal" size={16} />
                          </div>
                        )}
                      </Fragment>
                    ))}
                  </div>
                  {project.orderLifecycle.note && (
                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', margin: 0, paddingLeft: '12px', borderLeft: '3px solid var(--accent-primary)' }}>
                      {project.orderLifecycle.note}
                    </p>
                  )}
                </div>
              </CaseStudyBlock>
            )}

            {project.decompositionExample && (
              <CaseStudyBlock title="Requirements Decomposition">
                <DecompositionFlow data={project.decompositionExample} />
              </CaseStudyBlock>
            )}

            {project.dataAnalysis && (
              <CaseStudyBlock title="Data Analysis — Logical vs Physical">
                <div className="two-column-comparison" style={{ marginBottom: '20px' }}>
                  <div style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '20px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Persisted in CURRENT implementation</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {project.dataAnalysis.persisted.map(item => (
                        <div key={item} style={{ padding: '10px 14px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', fontSize: '1rem', border: '1px solid var(--border-color)' }}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', border: '1px solid var(--border-color)' }}>
                    <h4 style={{ marginBottom: '20px', color: 'var(--text-primary)', fontSize: '1.1rem' }}>Derived / Transient</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {project.dataAnalysis.derived.map(item => (
                        <div key={item} style={{ padding: '10px 14px', backgroundColor: 'var(--bg-primary)', borderRadius: '6px', fontSize: '1rem', border: '1px solid var(--border-color)' }}>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>{project.dataAnalysis.note}</p>
              </CaseStudyBlock>
            )}

            {project.gaps && (
              <CaseStudyBlock title="TARGET vs CURRENT Implementation & Gap Analysis">
                <p style={{ marginBottom: '20px', fontWeight: 500 }}>Verified implementation gaps — not an exhaustive claim that no other gaps exist.</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {project.gaps.map(gap => (
                    <GapCard key={gap.id} gap={gap} />
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {project.traceabilityExample && (
              <CaseStudyBlock title="Traceability & Validation">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  <div>
                    <h4 style={{ marginBottom: '16px' }}>End-to-End Example</h4>
                    <div className="step-flow" style={{ padding: '24px', backgroundColor: 'var(--bg-secondary)', borderRadius: '8px', justifyContent: 'center' }}>
                      {project.traceabilityExample.flow.map((node, index) => (
                        <Fragment key={index}>
                          <div style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-primary)', padding: '16px 20px', borderRadius: '8px', border: '1px solid var(--border-color)', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>
                            <div style={{ fontWeight: 700, color: 'var(--text-primary)', fontSize: '1rem' }}>{node.split('\\n')[0]}</div>
                            {node.split('\\n')[1] && <div style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{node.split('\\n')[1]}</div>}
                          </div>
                          {index < project.traceabilityExample!.flow.length - 1 && (
                            <ArrowRight className="step-flow-arrow" size={16} />
                          )}
                        </Fragment>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 style={{ marginBottom: '16px' }}>60 Validation Catalogue Entries</h4>
                    <div style={{ display: 'flex', gap: '16px', marginBottom: '12px' }}>
                      <div style={{ padding: '12px 20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '4px solid #10b981' }}>
                        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{project.traceabilityExample.uatStats.ready}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Ready UAT</div>
                      </div>
                      <div style={{ padding: '12px 20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '4px solid #f59e0b' }}>
                        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{project.traceabilityExample.uatStats.blocked}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Blocked UAT</div>
                      </div>
                      <div style={{ padding: '12px 20px', backgroundColor: 'var(--bg-secondary)', borderRadius: '6px', borderLeft: '4px solid #6366f1' }}>
                        <div style={{ fontWeight: 600, fontSize: '1.2rem' }}>{project.traceabilityExample.uatStats.technical}</div>
                        <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Technical Validation</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0 }}>{project.traceabilityExample.note}</p>
                  </div>
                </div>
              </CaseStudyBlock>
            )}

            {project.baCompetencies && (
              <CaseStudyBlock title="Core Competencies Demonstrated">
                <div className="three-column-grid">
                  {project.baCompetencies.map(comp => (
                    <div key={comp.competency} className="focus-card" style={{ padding: '24px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <h4 style={{ color: 'var(--text-primary)', marginBottom: '12px', fontSize: '1.1rem', lineHeight: 1.4 }}>{comp.competency}</h4>
                      <p style={{ margin: 0, fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{comp.evidence}</p>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            {project.artefacts && project.artefacts.length > 0 && (
              <CaseStudyBlock title={project.analysisEvidenceLabel || "Key Artefacts"}>
                <ArtefactGallery artefacts={project.artefacts} projectTitle={project.title} />
              </CaseStudyBlock>
            )}



            {project.testingChallenges && (
              <CaseStudyBlock title="Key Testing Challenges">
                <div className="card-grid">
                  {project.testingChallenges.map(c => (
                    <div key={c.title} className="focus-card" style={{ padding: '20px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '8px' }}>{c.title}</h4>
                      <p style={{ margin: 0 }}>{c.description}</p>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}



            {project.baRelevance && (
              <CaseStudyBlock title="QA Insights & Relevance">
                <p>{project.baRelevance.description}</p>
                <div className="card-grid" style={{ marginTop: '24px' }}>
                  {project.baRelevance.links.map(l => (
                    <div key={l.title} className="focus-card" style={{ padding: '20px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                      <h4 style={{ marginBottom: '8px' }}>{l.title}</h4>
                      <p style={{ margin: 0 }}>{l.description}</p>
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}

            <CaseStudyBlock title={project.analysisOutputs ? "Analysis Outputs & Findings" : "Outcome"}>
              <p>{project.analysisOutputs || project.outcome}</p>
            </CaseStudyBlock>

            <CaseStudyBlock title="Lessons Learned">
              <ul className="lesson-list">
                {project.lessons.map((lesson) => (
                  <li key={lesson}>
                    <ChevronRight aria-hidden="true" size={18} />
                    <HighlightText text={lesson} />
                  </li>
                ))}
              </ul>
            </CaseStudyBlock>
            
            {project.selectedEvidence && (
              <CaseStudyBlock title={project.analysisEvidenceLabel || "Selected Evidence"}>
                <div className="two-column-comparison">
                  {project.selectedEvidence.map(evidence => (
                    <div key={evidence.title || evidence.label} style={{ height: '100%', padding: '20px', backgroundColor: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
                        {evidence.title ? (
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>{evidence.label}</span>
                            {evidence.fileType && (
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                                {evidence.fileType.toUpperCase()}
                              </span>
                            )}
                          </div>
                        ) : (
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <h4 style={{ margin: 0 }}>{evidence.label}</h4>
                            {evidence.fileType && (
                              <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '2px 6px', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '4px', color: 'var(--text-secondary)' }}>
                                {evidence.fileType.toUpperCase()}
                              </span>
                            )}
                          </div>
                        )}
                        {evidence.title && <h4 style={{ margin: 0 }}>{evidence.title}</h4>}
                        {evidence.description && <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{evidence.description}</p>}
                      </div>
                      {evidence.href && (evidence.fileType === 'png' || evidence.fileType === 'jpg' || evidence.fileType === 'image') ? (
                        <button onClick={() => setLightboxData({ src: evidence.href as string, alt: evidence.title || evidence.label })} style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', gap: '6px', cursor: 'pointer', background: 'transparent', border: 'none', padding: 0, width: 'fit-content' }}>
                          {evidence.action || "View Image"} <ArrowRight size={16} />
                        </button>
                      ) : evidence.href && evidence.download ? (
                        <a href={evidence.href} download style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', gap: '6px', textDecoration: 'none', cursor: 'pointer', width: 'fit-content' }}>
                          {evidence.action} <ArrowRight size={16} />
                        </a>
                      ) : evidence.href && evidence.external ? (
                        <a href={evidence.href} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', gap: '6px', textDecoration: 'none', cursor: 'pointer', width: 'fit-content' }}>
                          {evidence.action} <ArrowRight size={16} />
                        </a>
                      ) : (
                        <button disabled style={{ display: 'inline-flex', alignItems: 'center', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.9rem', gap: '6px', cursor: 'not-allowed', background: 'transparent', border: 'none', padding: 0, width: 'fit-content' }}>
                          {evidence.action} (Unavailable)
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </CaseStudyBlock>
            )}
            
            <ProjectCTA />
          </div>
          </div>
          <ProjectTableOfContents />
        </div>
      </section>

      <section className="section project-navigation" aria-label="Project navigation">
        <div className="section-container project-navigation__inner">
          {previous ? (
            <Link to={`/projects/${previous.slug}`}>
              <ArrowLeft aria-hidden="true" size={18} />
              <span>
                Previous
                <strong>{previous.title}</strong>
              </span>
            </Link>
          ) : null}
          <Link className="button button--primary" to="/#case-studies">
            Back to all case studies
          </Link>
          {next ? (
            <Link to={`/projects/${next.slug}`}>
              <span>
                Next
                <strong>{next.title}</strong>
              </span>
              <ArrowRight aria-hidden="true" size={18} />
            </Link>
          ) : null}
        </div>
      </section>

      {lightboxData && (
        <LightboxImage
          src={lightboxData.src}
          alt={lightboxData.alt}
          isOpen={true}
          onClose={() => setLightboxData(null)}
        />
      )}
    </main>
  );
}

function CaseStudyBlock({ title, children }: { title: string; children: ReactNode }) {
  const blockId = slugify(title);
  return (
    <section className="case-study-block" aria-labelledby={blockId}>
      <SectionHeading id={blockId} title={title} />
      <div className="case-study-block__content">{children}</div>
    </section>
  );
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}
