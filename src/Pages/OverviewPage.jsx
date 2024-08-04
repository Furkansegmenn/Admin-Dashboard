import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

/*componets*/
import Header from "../Components/common/Header";
import StatCard from "../Components/common/StatCard";
import SalesOverviewChart from "../Components/overview/SalesOverviewChart";
import CategoryDistributionChart from "../Components/overview/CategoryDistributionChart";
import SalesChannelChart from "../Components/overview/SalesChannelChart";

const OverviewPage = () => {
	return (
		<div className='z-10 flex-1 relative overflow-auto'>
			<Header title='Overview' />
			<main className='max-w-6xl mx-auto py-6 px-4 lg:px-8 '>
				<motion.div
					className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 1 }}
				>
					<StatCard name='Total Sales' icon={Zap} value='$12,345' color='#6366F1' />
					<StatCard name='New Users' icon={Users} value='1,234' color='#8B5CF6' />
					<StatCard name='Total Products' icon={ShoppingBag} value='567' color='#EC4899' />
					<StatCard name='Conversion Rate' icon={BarChart2} value='12.5%' color='#10B981' />
				</motion.div>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
					<SalesOverviewChart />
					<CategoryDistributionChart />
					<SalesChannelChart />
				</div>
			</main>
		</div>
	);
};

export default OverviewPage;
