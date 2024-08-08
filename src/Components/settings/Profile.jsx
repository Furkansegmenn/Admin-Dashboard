import { User } from "lucide-react";
import SettingsSection from "./SettingsSection";

const Profile = () => {
	return (
		<div>
			<SettingsSection icon={User} title={"Profile"}>
				<div className='flex flex-col sm:flex-row items-center mb-6 '>
					<img
						src='https://randomuser.me/api/portraits/men/3.jpg'
						alt='Profile'
						className='rounded-full w-20 h-20  mr-4'
					/>

					<div className='ml-1'>
						<h2 className='font-semibold text-lg text-gray-100'>Furkan Seğmen</h2>
						<p className='text-m text-gray-400'>furkansegmen@example.com</p>
					</div>
				</div>
				<button className='bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded transition active:scale-95 duration-200 w-full sm:w-auto'>
					Edit Profile
				</button>
			</SettingsSection>
		</div>
	);
};

export default Profile;
