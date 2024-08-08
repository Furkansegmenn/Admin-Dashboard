import { Lock } from "lucide-react";
import SettingsSection from "./SettingsSection";
import { useState } from "react";
import ToggleSwitch from "./ToggleSwitch";

const Security = () => {
	const [twoFactor, setTwoFactor] = useState(false);
	return (
		<div>
			<SettingsSection icon={Lock} title={"Security"}>
				<ToggleSwitch
					label={"Two-Factor Authentication"}
					isOn={twoFactor}
					onToggle={() => setTwoFactor(!twoFactor)}
				/>
				<button className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-md transition duration-200 active:scale-95'>
					Change Password
				</button>
			</SettingsSection>
		</div>
	);
};

export default Security;
