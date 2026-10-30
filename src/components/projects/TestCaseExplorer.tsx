import { CheckCircle2, ChevronDown, ChevronUp, Filter, Search, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { tncTestCases, type TestCaseItem } from "../../data/tncTestCases";

export function TestCaseExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedType, setSelectedType] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>("TC-05"); // Default open TC-05 as representative

  const categories = useMemo(() => {
    const list = Array.from(new Set(tncTestCases.map((tc) => tc.category)));
    return ["All", ...list];
  }, []);

  const types = useMemo(() => {
    const list = Array.from(new Set(tncTestCases.map((tc) => tc.type)));
    return ["All", ...list];
  }, []);

  const filteredCases = useMemo(() => {
    return tncTestCases.filter((tc) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        tc.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tc.expectedResult.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === "All" || tc.category === selectedCategory;
      const matchesType = selectedType === "All" || tc.type === selectedType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [searchQuery, selectedCategory, selectedType]);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="test-case-explorer my-8 p-6 rounded-xl border border-blue-500/30 bg-slate-950/80 backdrop-blur-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">
            <Sparkles size={14} /> Interactive QA Matrix (TestRail / Jira Style)
          </div>
          <h3 className="text-xl font-bold text-white m-0">
            30 Functional & Automation Test Cases Suite
          </h3>
          <p className="text-sm text-gray-400 mt-1 mb-0">
            Filter, search and inspect live execution criteria, pre-conditions, and validation steps.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/40 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
            <CheckCircle2 size={14} /> 30/30 PASSED (100%)
          </div>
          <div className="px-3 py-1.5 rounded-lg bg-blue-950/40 border border-blue-500/40 text-blue-400 text-xs font-bold">
            🤖 Selenium IDE
          </div>
        </div>
      </div>

      {/* Controls & Search */}
      <div className="flex flex-col lg:flex-row gap-4 mt-6">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by ID (e.g. TC-05), keyword, or validation criteria..."
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg bg-slate-900 border border-slate-700 text-gray-200 placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold">
            <Filter size={13} /> Type:
          </span>
          {types.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setSelectedType(type)}
              className={`text-xs px-2.5 py-1 rounded-md transition-all font-medium cursor-pointer border ${
                selectedType === type
                  ? "bg-blue-600 text-white border-blue-500 font-semibold"
                  : "bg-slate-900 text-gray-400 border-slate-800 hover:border-slate-700 hover:text-gray-200"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap gap-2 mt-4 pb-4 border-b border-slate-800">
        <span className="text-xs text-gray-400 flex items-center gap-1 font-semibold mr-1">
          Module:
        </span>
        {categories.map((cat) => {
          const count = cat === "All" ? tncTestCases.length : tncTestCases.filter((tc) => tc.category === cat).length;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs px-3 py-1 rounded-full transition-all cursor-pointer border ${
                selectedCategory === cat
                  ? "bg-slate-800 text-blue-400 border-blue-500/50 font-bold"
                  : "bg-slate-900/60 text-gray-400 border-slate-800 hover:text-gray-300"
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      {/* Test Case Table List */}
      <div className="mt-4 flex flex-col gap-2.5">
        {filteredCases.length === 0 ? (
          <div className="text-center py-10 text-gray-400 text-sm">
            No test cases match your filter criteria.
          </div>
        ) : (
          filteredCases.map((tc) => {
            const isExpanded = expandedId === tc.id;

            return (
              <div
                key={tc.id}
                className={`rounded-lg border transition-all ${
                  isExpanded
                    ? "bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-950/20"
                    : "bg-slate-900/40 border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleExpand(tc.id)}
                  className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer bg-transparent border-none text-inherit"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-blue-950/80 border border-blue-500/40 text-blue-400">
                      {tc.id}
                    </span>
                    <span className="font-semibold text-sm text-gray-200 truncate">
                      {tc.name}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded bg-slate-800 text-gray-400">
                      {tc.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="hidden md:inline-block text-xs px-2 py-0.5 rounded font-mono text-gray-400 bg-slate-950/60 border border-slate-800">
                      {tc.type}
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded font-bold text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-1">
                      <CheckCircle2 size={12} /> PASS
                    </span>
                    {isExpanded ? <ChevronUp size={16} className="text-blue-400" /> : <ChevronDown size={16} className="text-gray-500" />}
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-5 pb-5 pt-2 border-t border-slate-800/70 text-xs text-gray-300">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                      <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                        <strong className="text-gray-400 block mb-1 uppercase tracking-wider text-[10px]">
                          Pre-Condition
                        </strong>
                        <p className="m-0 text-gray-300 leading-relaxed font-normal">
                          {tc.preCondition}
                        </p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                        <strong className="text-gray-400 block mb-1 uppercase tracking-wider text-[10px]">
                          Automation Execution ({tc.automationTool})
                        </strong>
                        <p className="m-0 text-gray-300 leading-relaxed font-normal">
                          Steps Count: <span className="text-blue-400 font-bold">{tc.stepsCount} Selenium commands</span> · Runner: Headless Chrome · Status: Verified
                        </p>
                      </div>
                    </div>

                    <div className="my-3">
                      <strong className="text-gray-400 block mb-2 uppercase tracking-wider text-[10px]">
                        Test Execution Steps ({tc.testSteps.length} Key Checkpoints)
                      </strong>
                      <ol className="m-0 pl-5 flex flex-col gap-1 text-gray-300 leading-relaxed">
                        {tc.testSteps.map((step, idx) => (
                          <li key={idx} className="font-normal">
                            {step}
                          </li>
                        ))}
                      </ol>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3 pt-3 border-t border-slate-800/60">
                      <div>
                        <strong className="text-gray-400 block mb-1 uppercase tracking-wider text-[10px]">
                          Expected Result
                        </strong>
                        <p className="m-0 text-gray-300 font-normal leading-relaxed">
                          {tc.expectedResult}
                        </p>
                      </div>
                      <div>
                        <strong className="text-emerald-400 block mb-1 uppercase tracking-wider text-[10px]">
                          Actual Observable Result
                        </strong>
                        <p className="m-0 text-emerald-300/90 font-normal leading-relaxed">
                          {tc.actualResult}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-gray-500 flex items-center justify-between">
        <span>Showing {filteredCases.length} of {tncTestCases.length} total test cases</span>
        <span>Test Basis: Public E-Commerce Platform · Author: Phạm Đức Duy</span>
      </div>
    </div>
  );
}
