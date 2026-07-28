import { Bot, FileText, Mail, MessageCircle, Sparkles } from "lucide-react";

/**
 * Handcrafted concept previews for each featured project.
 * Pure JSX/CSS — no images, no network, instantly themeable.
 */

function WindowChrome({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-line bg-ink/[0.03] px-4 py-2.5">
      <span className="flex gap-1.5" aria-hidden>
        <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <i className="h-2.5 w-2.5 rounded-full bg-ink/15" />
      </span>
      <p className="ml-2 truncate text-[11px] text-muted">{title}</p>
    </div>
  );
}

/** Medical Query System — RAG chat with retrieval panel. */
export function RagMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <WindowChrome title="medical-query — RAG console" />
      <div className="flex flex-1 flex-col gap-3 p-4 text-left">
        {/* User query */}
        <div className="self-end rounded-2xl rounded-br-md bg-ink px-3.5 py-2 text-[11px] text-bg">
          What are the symptoms of Marfan syndrome?
        </div>
        {/* Retrieved chunks */}
        <div className="flex flex-wrap gap-1.5">
          {["genetics_kb · 0.92", "clinical_notes · 0.88", "omim_ref · 0.83"].map(
            (doc) => (
              <span
                key={doc}
                className="inline-flex items-center gap-1 rounded-full border border-line bg-ink/[0.03] px-2 py-0.5 text-[9px] text-muted"
              >
                <FileText size={9} aria-hidden />
                {doc}
              </span>
            )
          )}
        </div>
        {/* Grounded answer */}
        <div className="max-w-[85%] rounded-2xl rounded-bl-md border border-line bg-ink/[0.02] px-3.5 py-2.5 text-[11px] leading-relaxed text-muted">
          <span className="mb-1 flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent">
            <Sparkles size={9} aria-hidden /> Grounded answer
          </span>
          Marfan syndrome commonly affects the skeleton, eyes and cardiovascular
          system…{" "}
          <span className="text-accent">[1]</span>{" "}
          <span className="text-accent">[2]</span>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-2.5">
          <span className="text-[9px] text-muted">
            gpt-4o-mini · text-embedding-3-small
          </span>
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-[9px] font-medium text-accent">
            ~95% relevance
          </span>
        </div>
      </div>
    </div>
  );
}

/** Research Assistant — MCP server terminal. */
export function McpMock() {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-[#0C0C0E] text-left">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/15" />
          <i className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </span>
        <p className="ml-2 text-[11px] text-white/40">
          research-assistant — mcp serve
        </p>
      </div>
      <div className="flex-1 space-y-1.5 p-4 font-mono text-[10px] leading-relaxed">
        <p className="text-white/70">
          <span className="text-emerald-400">$</span> mcp serve
          research-assistant
        </p>
        <p className="text-white/40">
          <span className="text-emerald-400">✓</span> ChromaDB collection
          loaded — 128 embedded chunks
        </p>
        <p className="text-white/40">
          <span className="text-sky-400">→</span> tool:
          search_arxiv(query=&quot;LLM agents&quot;)
        </p>
        <p className="text-white/40">
          <span className="text-emerald-400">✓</span> 5 papers ingested ·
          citations tracked
        </p>
        <p className="text-white/40">
          <span className="text-sky-400">→</span> tool:
          query_papers(top_k=4)
        </p>
        <p className="text-white/70">
          <span className="text-emerald-400">✓</span> connected: Claude Desktop
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5 border-t border-white/10 p-3">
        {["arxiv", "web-search", "chromadb", "citations"].map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/15 px-2 py-0.5 text-[9px] text-white/50"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

/** Job Alert AI Agent — Gmail → OpenAI → Twilio → WhatsApp pipeline. */
export function AgentMock() {
  const steps = [
    { icon: Mail, label: "Gmail", sub: "fetch + parse" },
    { icon: Bot, label: "OpenAI", sub: "summarize" },
    { icon: MessageCircle, label: "WhatsApp", sub: "via Twilio" },
  ];
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card">
      <WindowChrome title="job-alert-agent — pipeline" />
      <div className="flex flex-1 flex-col justify-center gap-5 p-4">
        <div className="flex items-center justify-between px-1">
          {steps.map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-ink/[0.03] text-ink">
                  <step.icon size={15} aria-hidden />
                </span>
                <p className="text-[10px] font-semibold leading-none">
                  {step.label}
                </p>
                <p className="text-[9px] leading-none text-muted">{step.sub}</p>
              </div>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="mx-1 mb-5 h-px flex-1 border-t border-dashed border-ink/20"
                />
              )}
            </div>
          ))}
        </div>
        {/* Delivered message */}
        <div className="mx-auto w-[88%] rounded-2xl border border-line bg-emerald-500/[0.06] px-3.5 py-2.5">
          <p className="flex items-center gap-1.5 text-[9px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <MessageCircle size={9} aria-hidden /> Delivered to WhatsApp
          </p>
          <p className="mt-1 text-[10px] leading-relaxed text-muted">
            3 new roles today — ML Engineer (Berlin), AI Intern (Remote),
            NLP Engineer (Munich). Summaries attached.
          </p>
        </div>
        <p className="text-center text-[9px] text-muted">
          multipart parsing · plain text + HTML
        </p>
      </div>
    </div>
  );
}
