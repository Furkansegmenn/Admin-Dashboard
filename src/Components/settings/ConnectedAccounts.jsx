import { HelpCircle } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { useState } from "react";

const ConnectedAccounts = () => {
	const [connectedAccounts, setConnectedAccounts] = useState([
		{
			id: 1,
			name: "Google",
			connected: false,
			icon: "/google.png",
		},
		{
			id: 2,
			name: "Facebook",
			connected: false,
			icon: "/facebook.svg",
		},
		{
			id: 3,
			name: "Twitter",
			connected: false,
			icon: "/x.png",
		},
	]);
	return (
		<div>
			<SettingsSection icon={HelpCircle} title={"Connected Accounts"}>
				{connectedAccounts.map((account) => (
					<div key={account.id} className='flex items-center justify-between py-3'>
						<div className='flex gap-1 '>
							<img
								src={account.icon}
								alt='Social img'
								className='size-6 object-cover rounded-full mr-2'
							/>
							<span className='text-gray-300'>{account.name}</span>
						</div>
						<button
							className={`px-3 py-1 rounded ${
								account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"
							} transition duration-200`}
							onClick={() => {
								setConnectedAccounts(
									connectedAccounts.map((acc) => {
										if (acc.id === account.id) {
											return {
												...acc,
												connected: !acc.connected,
											};
										}
										return acc;
									})
								);
							}}
						>
							{account.connected ? "Connected" : "Connect"}
						</button>
					</div>
				))}
			</SettingsSection>
		</div>
	);
};

export default ConnectedAccounts;
