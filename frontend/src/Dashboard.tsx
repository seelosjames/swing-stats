export default function Dashboard() {
	return (
		<div className="bg-green-50 flex flex-col gap-4 p-4 h-full">
			<div className="flex gap-4  grow">
				{/* 1. Recent Rounds Summary */}
				<div className="bg-white rounded-2xl shadow p-4">
					<h2 className="text-xl font-bold mb-2">Recent Rounds</h2>
					<p className="text-gray-500">Coming soon...</p>
				</div>

				<div className="flex gap-4 w-full">
					<div className="gap-4 flex flex-col grow h-full ">
						{/* 2. Core Performance Stats */}
						<div className="bg-white rounded-2xl shadow p-4 grow">
							<h2 className="text-xl font-bold mb-2">Performance Stats</h2>
							<p className="text-gray-500">Coming soon...</p>
						</div>

						{/* 3. Club Performance Snapshot */}
						<div className="bg-white rounded-2xl shadow p-4 grow">
							<h2 className="text-xl font-bold mb-2">Club Performance</h2>
							<p className="text-gray-500">Coming soon...</p>
						</div>
					</div>
					<div className="gap-4 flex flex-col grow h-full">
						{/* 4. Course Breakdown */}
						<div className="bg-white rounded-2xl shadow p-4 grow">
							<h2 className="text-xl font-bold mb-2">Course Breakdown</h2>
							<p className="text-gray-500">Coming soon...</p>
						</div>

						{/* 5. Predictive Insights / ML */}
						<div className="bg-white rounded-2xl shadow p-4 grow">
							<h2 className="text-xl font-bold mb-2">Predictive Insights</h2>
							<p className="text-gray-500">Coming soon...</p>
						</div>
					</div>
				</div>
			</div>
			<div className="flex gap-4 grow">
				{/* 6. Goals & Trends */}
				<div className="bg-white rounded-2xl shadow p-4 grow">
					<h2 className="text-xl font-bold mb-2">Goals & Trends</h2>
					<p className="text-gray-500">Coming soon...</p>
				</div>

				{/* 7. Caddie Quick Tips */}
				<div className="bg-white rounded-2xl shadow p-4 col-span-1 lg:col-span-2 grow">
					<h2 className="text-xl font-bold mb-2">AI Caddie Tips</h2>
					<p className="text-gray-500">Coming soon...</p>
				</div>
			</div>
		</div>
	);
}
