import React from "react";

export function AutomationDemo() {
	return (
		<section className="w-full bg-[#EEEEEE] py-20 md:py-28 border-b border-[#E5E5E5]">
			<div className="max-w-7xl mx-auto px-6 md:px-10">
				<div className="flex flex-col items-center text-center mb-12">
					<p className="font-mono text-xs font-semibold uppercase tracking-widest text-[#555555] mb-3">
						[AUTONOMOUS_LEDGER_SURFACE]
					</p>
					<h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#0A0A0A] max-w-2xl">
						Every payday, routed deterministically before you wake up.
					</h2>
					<p className="text-base md:text-lg text-[#333333] max-w-2xl mt-4 leading-relaxed">
						No chat assistants. No prompt hallucinations. Senzen runs structured financial state machines triggered directly by your banking events.
					</p>
				</div>

				{/* Single Warmwind OS product-surface card ("window") */}
				<div className="w-full max-w-5xl mx-auto mt-12 bg-white rounded-lg border border-[#DCD8D3] shadow-[0_4px_24px_rgba(0,0,0,0.06)] overflow-hidden">
					{/* Window Titlebar / Top Chrome */}
					<div className="h-11 bg-[#F9F8F6] border-b border-[#E5E2DD] px-4 flex items-center justify-between">
						<div className="flex items-center gap-2">
							<span className="h-2.5 w-2.5 rounded-full bg-[#E5E2DD]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#DCD8D3]" />
							<span className="h-2.5 w-2.5 rounded-full bg-[#D0CCC6]" />
							<span className="font-mono text-xs font-semibold text-[#0A0A0A]">
								senzen-engine://production-rules-v1.4
							</span>
						</div>
						<div className="flex items-center gap-2 bg-[#EBF9F1] border border-[#1EC072]/30 px-2.5 py-0.5 rounded text-xs font-mono font-medium text-[#049F55]">
							● LISTENER: ACTIVE [PORT 8080]
						</div>
					</div>

					{/* Surface Sub-Header / Summary Metrics Strip */}
					<div className="p-5 px-6 border-b border-[#E5E5E5] bg-[#FFFFFF]">
						<div className="grid grid-cols-3 gap-6">
							<div>
								<p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-1">TOTAL INFLOW</p>
								<p className="font-mono text-lg font-semibold text-[#0A0A0A]">$4,500.00</p>
							</div>
							<div>
								<p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-1">ALLOCATED</p>
								<p className="font-mono text-lg font-semibold text-[#0A0A0A]">$4,500.00 (100%)</p>
							</div>
							<div>
								<p className="font-mono text-xs uppercase tracking-widest text-[#555555] mb-1">EXECUTION TIME</p>
								<p className="font-mono text-lg font-semibold text-[#0A0A0A]">18ms</p>
							</div>
						</div>
					</div>

					{/* Rule Ledger Rows (Dense, Realistic Business Rules) */}
					<div className="bg-[#FFFFFF]">
						<div className="font-mono text-[11px] uppercase tracking-wider text-[#666666] bg-[#FAFAFA] border-b border-[#E5E5E5] px-5 py-2.5 grid grid-cols-12 gap-2">
							<div className="col-span-3">01. TRIGGER / EVENT</div>
							<div className="col-span-4">02. CONDITION &amp; LOGIC</div>
							<div className="col-span-3">03. ROUTED ACTION</div>
							<div className="col-span-2 text-right">04. STATUS / TIME</div>
						</div>

						{/* Row 1: Direct Deposit */}
						<div className="px-5 py-3.5 grid grid-cols-12 gap-2 border-b border-[#E5E5E5] items-center hover:bg-[#FAFAFA] transition-colors">
							<div className="col-span-3">
								<span className="font-mono text-xs font-medium text-[#0A0A0A]">ACH_CREDIT // EMPLOYER_PAYROLL</span>
							</div>
							<div className="col-span-4">
								<span className="font-mono text-xs text-[#333333]">IF amount &gt;= $3,000.00</span>
							</div>
							<div className="col-span-3">
								<span className="font-mono text-xs font-semibold text-[#0A0A0A]">Deposit $3,200.00 → Checking</span>
							</div>
							<div className="col-span-2 text-right">
								<span className="font-mono text-xs text-[#049F55]">✓ EXECUTED (00:01:04)</span>
							</div>
						</div>

						{/* Row 2: Emergency Reserve Sweep */}
						<div className="px-5 py-3.5 grid grid-cols-12 gap-2 border-b border-[#E5E5E5] items-center hover:bg-[#FAFAFA] transition-colors">
							<div className="col-span-3">
								<span className="font-mono text-xs font-medium text-[#0A0A0A]">RULE // RESERVE_SWEEP</span>
							</div>
							<div className="col-span-4">
								<span className="font-mono text-xs text-[#333333]">SPLIT 15% (Checking &gt; Threshold)</span>
							</div>
							<div className="col-span-3">
								<span className="font-mono text-xs font-semibold text-[#0A0A0A]">Transfer $480.00 → High-Yield Vault</span>
							</div>
							<div className="col-span-2 text-right">
								<span className="font-mono text-xs text-[#049F55]">✓ EXECUTED (00:01:05)</span>
							</div>
						</div>

						{/* Row 3: Discretionary Buffer Split */}
						<div className="px-5 py-3.5 grid grid-cols-12 gap-2 border-b border-[#E5E5E5] items-center hover:bg-[#FAFAFA] transition-colors">
							<div className="col-span-3">
								<span className="font-mono text-xs font-medium text-[#0A0A0A]">RULE // DISCRETIONARY_LOCK</span>
							</div>
							<div className="col-span-4">
								<span className="font-mono text-xs text-[#333333]">SPLIT 10% (Fixed Buffer)</span>
							</div>
							<div className="col-span-3">
								<span className="font-mono text-xs font-semibold text-[#0A0A0A]">Allocate $320.00 → Buffer Account</span>
							</div>
							<div className="col-span-2 text-right">
								<span className="font-mono text-xs text-[#049F55]">✓ EXECUTED (00:01:05)</span>
							</div>
						</div>

						{/* Row 4: Auto-Invest DCA */}
						<div className="px-5 py-3.5 grid grid-cols-12 gap-2 items-center hover:bg-[#FAFAFA] transition-colors">
							<div className="col-span-3">
								<span className="font-mono text-xs font-medium text-[#0A0A0A]">RULE // INDEX_PORTFOLIO_DCA</span>
							</div>
							<div className="col-span-4">
								<span className="font-mono text-xs text-[#333333]">REMAINDER (Post-Sweeps)</span>
							</div>
							<div className="col-span-3">
								<span className="font-mono text-xs font-semibold text-[#0A0A0A]">Execute $160.00 → S&amp;P 500 DCA</span>
							</div>
							<div className="col-span-2 text-right">
								<span className="font-mono text-xs text-[#049F55]">✓ EXECUTED (00:01:06)</span>
							</div>
						</div>
					</div>

					{/* Footer Console / Audit Log Strip */}
					<div className="bg-[#101516] text-[#EEEEEE] px-5 py-3 border-t border-[#101516] flex items-center justify-between font-mono text-xs">
						<div>&gt; [AUDIT_OK] 4 of 4 rules processed successfully. 0 errors, 0 manual interventions.</div>
						<div>VERIFIED BY LEDGER HASH #8F29A</div>
					</div>
				</div>
			</div>
		</section>
	);
}