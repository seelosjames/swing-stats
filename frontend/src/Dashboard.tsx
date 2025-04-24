type Round = {
	date: string;
	course: string;
	score: number;
	putts: number;
	fairwaysHit: number;
};

const mockRounds: Round[] = [
	{ date: "2025-04-22", course: "Pebble Beach", score: 74, putts: 30, fairwaysHit: 10 },
	{ date: "2025-04-20", course: "Augusta National", score: 78, putts: 32, fairwaysHit: 8 },
	{ date: "2025-04-18", course: "St Andrews", score: 76, putts: 28, fairwaysHit: 9 },
	{ date: "2025-04-16", course: "Pinehurst No.2", score: 80, putts: 35, fairwaysHit: 7 },
	{ date: "2025-04-14", course: "Torrey Pines", score: 72, putts: 29, fairwaysHit: 11 },
	{ date: "2025-04-12", course: "Bethpage Black", score: 81, putts: 34, fairwaysHit: 6 },
	{ date: "2025-04-10", course: "TPC Sawgrass", score: 75, putts: 31, fairwaysHit: 9 },
	{ date: "2025-04-08", course: "Bandon Dunes", score: 73, putts: 27, fairwaysHit: 12 },
	{ date: "2025-04-06", course: "Quail Hollow", score: 77, putts: 33, fairwaysHit: 8 },
	{ date: "2025-04-04", course: "Kiawah Island", score: 74, putts: 30, fairwaysHit: 10 },
	{ date: "2025-04-02", course: "Shinnecock Hills", score: 79, putts: 36, fairwaysHit: 7 },
	{ date: "2025-03-31", course: "Olympic Club", score: 76, putts: 29, fairwaysHit: 9 },
	{ date: "2025-03-29", course: "Whistling Straits", score: 80, putts: 35, fairwaysHit: 6 },
	{ date: "2025-03-27", course: "Harbour Town", score: 75, putts: 32, fairwaysHit: 8 },
	{ date: "2025-03-25", course: "Merion Golf Club", score: 73, putts: 28, fairwaysHit: 11 },
	{ date: "2025-03-23", course: "Royal Troon", score: 78, putts: 33, fairwaysHit: 7 },
	{ date: "2025-03-21", course: "Chambers Bay", score: 77, putts: 30, fairwaysHit: 10 },
	{ date: "2025-03-19", course: "Valhalla", score: 76, putts: 29, fairwaysHit: 9 },
	{ date: "2025-03-17", course: "Oakmont", score: 82, putts: 37, fairwaysHit: 5 },
	{ date: "2025-03-15", course: "Winged Foot", score: 79, putts: 34, fairwaysHit: 6 },
];

export default function Dashboard() {
	return (
		<div className="bg-green-50 flex flex-col gap-2 p-2 h-full box-border">
			<div className="flex gap-2">
				{/* 1. Recent Rounds Summary */}
				<div className="bg-white rounded-2xl shadow p-4 w-[25%] overflow-hidden">
					<h2 className="text-lg font-bold mb-2">Recent Rounds</h2>
					<div className="overflow-hidden max-h-full">
						<table className="text-xs text-left text-gray-500 w-full">
							<thead className="text-xs text-gray-700 uppercase bg-gray-100">
								<tr>
									<th className="px-1 py-1">Date</th>
									<th className="px-1 py-1">Course</th>
									<th className="px-1 py-1">Score</th>
									<th className="px-1 py-1">Putts</th>
									<th className="px-1 py-1">FWY</th>
								</tr>
							</thead>
							<tbody>
								{mockRounds.slice(0, 10).map((round, index) => (
									<tr key={index} className="bg-white border-b">
										<td className="px-1 py-1">{round.date}</td>
										<td className="px-1 py-1">{round.course}</td>
										<td className="px-1 py-1 font-semibold text-gray-800">{round.score}</td>
										<td className="px-1 py-1">{round.putts}</td>
										<td className="px-1 py-1">{round.fairwaysHit}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Right section with 4 tiles */}
				<div className="flex gap-2 w-[75%]">
					<div className="flex flex-col gap-2 w-1/2">
						<div className="bg-white rounded-2xl shadow p-4 h-1/2 flex flex-col justify-between">
							<h2 className="text-lg font-bold mb-3">Core Performance Stats</h2>
							<div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
								<div className="flex items-center justify-between">
									<span>Handicap</span>
									<span className="font-semibold text-blue-600">9.2</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Fairways Hit</span>
									<span className="font-semibold text-blue-600">54%</span>
								</div>
								<div className="flex items-center justify-between">
									<span>GIR</span>
									<span className="font-semibold text-blue-600">61%</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Scrambling</span>
									<span className="font-semibold text-blue-600">43%</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Putts/Round</span>
									<span className="font-semibold text-blue-600">32.1</span>
								</div>
								<div className="flex items-center justify-between">
									<span>3-Putt %</span>
									<span className="font-semibold text-blue-600">8%</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Penalties/Round</span>
									<span className="font-semibold text-blue-600">1.3</span>
								</div>
								<div className="flex items-center justify-between">
									<span>Strokes Gained</span>
									<span className="font-semibold text-blue-600">+0.7</span>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-2xl shadow p-4 h-1/2">
							<h2 className="text-lg font-bold mb-2">Club Performance</h2>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>
									<span className="font-semibold">7 Iron</span>
								</li>
								<li>
									Avg Carry: <span className="font-semibold">152 yds</span>
								</li>
								<li>
									Miss Tendency: <span className="font-semibold">Left 40% / Right 25%</span>
								</li>
								<li>
									Scoring Avg (Approach): <span className="font-semibold">4.2</span>
								</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-col gap-2 w-1/2">
						<div className="bg-white rounded-2xl shadow p-4 h-1/2">
							<h2 className="text-lg font-bold mb-2">Course Breakdown</h2>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>
									<span className="font-semibold">Pebble Dunes</span>
								</li>
								<li>
									Best Hole: <span className="font-semibold">#4 (Birdie Rate: 30%)</span>
								</li>
								<li>
									Worst Hole: <span className="font-semibold">#11 (Avg 6.2)</span>
								</li>
								<li>
									Tee Accuracy: <span className="font-semibold">52%</span>
								</li>
								<li>
									Avg Score/Hole: <span className="font-semibold">4.7</span>
								</li>
							</ul>
						</div>
						<div className="bg-white rounded-2xl shadow p-4 h-1/2">
							<h2 className="text-lg font-bold mb-2">Predictive Insights</h2>
							<ul className="text-sm text-gray-600 space-y-1">
								<li>
									Chance of breaking 80 next round: <span className="font-semibold">68%</span>
								</li>
								<li>3-putt risk spikes on greens 30yds</li>
								<li>GIR is 10% higher on morning rounds</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom row */}
			<div className="flex gap-2 h-1/2">
				<div className="bg-white rounded-2xl shadow p-4 w-1/2">
					<h2 className="text-lg font-bold mb-2">Goals & Trends</h2>
					<ul className="text-sm text-gray-600 space-y-1">
						<li>
							🎯 Putting Goal: <span className="font-semibold">&lt; 32 putts</span> → <span>Progress: 3/5 rounds</span>
						</li>
						<li>
							🔥 Longest Drive: <span className="font-semibold">298 yds</span>
						</li>
						<li>
							🏆 Best Round: <span className="font-semibold">82</span>
						</li>
						<li>
							📈 Birdies in April: <span className="font-semibold">12</span>
						</li>
					</ul>
				</div>
				<div className="bg-white rounded-2xl shadow p-4 w-1/2">
					<h2 className="text-lg font-bold mb-2">AI Caddie Tips</h2>
					<ul className="text-sm text-gray-600 space-y-1">
						<li>“Try clubbing down on hole 4 — your misses trend long.”</li>
						<li>“Work on 125–150yd approaches — GIR is 22%.”</li>
						<li>“Use 3W on narrow Par 4s — 12% better tee accuracy.”</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

