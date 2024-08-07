import { motion } from "framer-motion";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const userRetentionData = [
	{ name: "Week 1", retention: 100 },
	{ name: "Week 2", retention: 75 },
	{ name: "Week 3", retention: 60 },
	{ name: "Week 4", retention: 50 },
	{ name: "Week 5", retention: 45 },
	{ name: "Week 6", retention: 40 },
	{ name: "Week 7", retention: 38 },
	{ name: "Week 8", retention: 35 },
];

const UserRetention = () => {
	return (
		<motion.div className='bg-gray-800 p-6'>
			<h2 className=' text-xl font-semibold text-gray-100 mb-4 '>User Retention</h2>
			<div style={{ width: "100%", height: 300 }}>
				<ResponsiveContainer>
					<LineChart data={userRetentionData}>
						<CartesianGrid strokeDasharray={"3 3"} stroke='#485563' />
						<XAxis stroke='#9CA3AF' dataKey={"name"} />
						<YAxis stroke='#9CA3AF' />
						<Tooltip
							contentStyle={{
								backgroundColor: "rgba(31, 41, 55, 0.8)",
								borderColor: "#4B5563",
							}}
							itemStyle={{ color: "#E5E7EB" }}
						/>
						<Line
							type='monotone'
							dataKey={"retention"}
							stroke='#8B5CF6'
							strokeWidth={2}
							activeDot={{ r: 6, strokeWidth: 3 }}
						></Line>
						<Legend />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</motion.div>
	);
};

export default UserRetention;
