import Header from "../Components/common/Header";
import ConnectedAccounts from "../Components/settings/ConnectedAccounts";
import DangerZone from "../Components/settings/DangerZone";
import Notification from "../Components/settings/Notification";
import Profile from "../Components/settings/Profile";
import Security from "../Components/settings/Security";

const SettingsPage = () => {
	return (
		<div className='z-10 flex-1 overflow-auto relative'>
			<Header title='Settings' />
			<main className='max-w-4xl mx-auto px-4 lg:px-8'>
				<Profile />
				<Notification />
				<Security />
				<ConnectedAccounts />
				<DangerZone />
			</main>
		</div>
	);
};

export default SettingsPage;
