import { Bell } from "lucide-react";
import SettingsSection from "./SettingsSection";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Notification = () => {
	const [notifications, setNotifications] = useState({
		push: true,
		email: false,
		sms: true,
	});
	return (
		<div>
			<SettingsSection icon={Bell} title={"Notifications"}>
				<ToggleSwitch
					label={"Push Notification"}
					isOn={notifications.push}
					onToggle={() => setNotifications({ ...notifications, push: !notifications.push })}
				/>
				<ToggleSwitch
					label={"Email Notification"}
					isOn={notifications.email}
					onToggle={() => setNotifications({ ...notifications, email: !notifications.email })}
				/>
				<ToggleSwitch
					label={"Sms Notification"}
					isOn={notifications.sms}
					onToggle={() => setNotifications({ ...notifications, sms: !notifications.sms })}
				/>
			</SettingsSection>
		</div>
	);
};

export default Notification;
