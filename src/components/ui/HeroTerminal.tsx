import { CheckCircle2, Play, RefreshCw, Terminal } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TestCaseRun {
  id: string;
  name: string;
  duration: number;
}

const testCasesList: TestCaseRun[] = [
  { id: "TC-01", name: "Authentication & Guest Session Persistence", duration: 112 },
  { id: "TC-05", name: "Dynamic Cart Total & Price Deduction", duration: 145 },
  { id: "TC-20", name: "PC Builder Dynamic Discount Calculation", duration: 95 },
  { id: "TC-24", name: "Business Rule & Promotion Margin Verification", duration: 88 },
  { id: "TC-30", name: "Product Catalog & Specification Integrity", duration: 130 },
];

export function HeroTerminal() {
  const [isRunning, setIsRunning] = useState(false);
  const [activeStep, setActiveStep] = useState(testCasesList.length);
  const timerRef = useRef<number[]>([]);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);

    timerRef.current.forEach(t => window.clearTimeout(t));
    timerRef.current = [];

    testCasesList.forEach((_, index) => {
      const t = window.setTimeout(() => {
        setActiveStep(index + 1);
        if (index === testCasesList.length - 1) {
          setIsRunning(false);
        }
      }, (index + 1) * 350);
      timerRef.current.push(t);
    });
  };

  useEffect(() => {
    return () => {
      timerRef.current.forEach(t => window.clearTimeout(t));
    };
  }, []);

  return (
    <div className="hero-terminal" role="region" aria-label="Interactive QA Automation Terminal">
      <div className="hero-terminal__header">
        <div className="hero-terminal__dots" aria-hidden="true">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>
        <div className="hero-terminal__title">
          <Terminal size={14} className="text-blue-400" />
          <span>selenium-runner · automation-suite.ts</span>
          <span className="hero-terminal__badge">3D Hologram</span>
        </div>
        <button
          type="button"
          onClick={runSimulation}
          disabled={isRunning}
          className="hero-terminal__btn"
          aria-label="Re-run test simulation"
          title="Click to execute test simulation"
        >
          {isRunning ? (
            <>
              <RefreshCw size={13} className="animate-spin text-blue-400" />
              <span>Running...</span>
            </>
          ) : (
            <>
              <Play size={13} className="text-emerald-400 fill-emerald-400" />
              <span>Run Suite</span>
            </>
          )}
        </button>
      </div>

      <div className="hero-terminal__body font-mono">
        <div className="hero-terminal__command">
          <span className="text-blue-400 font-bold">$</span>{" "}
          <span className="text-gray-300">npx selenium-ide-runner --suite=e-commerce-tnc --headless</span>
        </div>

        <div className="hero-terminal__logs">
          <div className="text-gray-500 text-xs mb-2">
            [INFO] Initializing ChromeDriver v124 & Virtual DOM engine...
          </div>

          {testCasesList.map((tc, idx) => {
            const isCompleted = activeStep > idx;
            const isCurrent = activeStep === idx && isRunning;

            return (
              <div
                key={tc.id}
                className={`terminal-log-row ${isCompleted ? "terminal-log-row--pass" : isCurrent ? "terminal-log-row--active" : "terminal-log-row--pending"}`}
              >
                {isCompleted ? (
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                ) : isCurrent ? (
                  <RefreshCw size={14} className="animate-spin text-yellow-400 shrink-0" />
                ) : (
                  <span className="w-3.5 h-3.5 rounded-full border border-gray-600 inline-block shrink-0" />
                )}
                <span className="font-semibold text-gray-200">{tc.id}</span>
                <span className="text-gray-400 truncate">{tc.name}</span>
                <span className="ml-auto text-xs text-gray-500 font-mono">
                  {isCompleted ? `${tc.duration}ms` : "..."}
                </span>
              </div>
            );
          })}
        </div>

        {activeStep === testCasesList.length && !isRunning && (
          <div className="hero-terminal__footer">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} /> 30/30 Test Scenarios Passed (100%)
              </span>
              <span className="text-gray-400">Duration: 0.82s</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-1">
              STATUS: ZERO REGRESSION · READY FOR PRODUCTION DEPLOYMENT
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

