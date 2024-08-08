const ToggleSwitch = ({ label, isOn, onToggle }) => {
	return (
		<div className='flex justify-between items-center py-3'>
			<span className='text-gray-300'>{label}</span>
			<button
				className={`
        inline-flex items-center  rounded-full w-12  transition-colors 
        ${isOn ? "bg-indigo-600" : "bg-gray-600"}
        `}
				onClick={onToggle}
			>
				<span
					className={`size-7 transform transition-transform bg-white rounded-full ${
						isOn ? "translate-x-6" : "-translate-x-1/4"
					}
					}`}
				></span>
			</button>
		</div>
	);
};

export default ToggleSwitch;
