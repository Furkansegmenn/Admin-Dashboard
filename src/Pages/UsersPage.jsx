import Header from "../Components/common/Header";
import { motion } from "framer-motion";
import StatCard from "../Components/common/StatCard";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../Components/users/UsersTable";
import UsersGrowthChart from "../Components/users/UsersGrowthChart";
import UsersActivityChart from "../Components/users/UsersActivityChart";
import UsersDemographicsChart from "../Components/users/UsersDemographicsChart";
const userStats = {
	totalUsers: 152845,
	newUsersToday: 243,
	activeUsers: 98520,
	churnRate: "2.4%",
};

const UsersPage = () => {
	return (
		<div className='z-10 flex-1 relative overflow-auto'>
			<Header title='Users' />
			<main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard
						name='Total Users'
						icon={UsersIcon}
						value={userStats.totalUsers.toLocaleString()}
						color='#6366F1'
					/>
					<StatCard name='New Users Today' icon={UserPlus} value={userStats.newUsersToday} color='#10B981' />
					<StatCard
						name='Active Users'
						icon={UserCheck}
						value={userStats.activeUsers.toLocaleString()}
						color='#F59E0B'
					/>
					<StatCard name='Churn Rate' icon={UserX} value={userStats.churnRate} color='#EF4444' />
				</motion.div>
				<UsersTable />
				<div className='grid grid-cols-1 lg:grid-cols-2  gap-8'>
					<UsersGrowthChart />
					<UsersDemographicsChart />
					<UsersActivityChart />
				</div>
			</main>
		</div>
	);
};

export default UsersPage;
