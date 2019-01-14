const menu = [
	// {
	// 	name: 'option',
	// 	icon: 'delete',
	// 	num: 0
	// },
	{
		name: 'example',
		icon: 'delete'
	},
	{
		name: 'single',
		icon: 'bold',
		// num: 1
	},
	{
		name: 'file',
		icon: 'file'
	},
	// {
	// 	name: 'test',
	// 	icon: 'api'
	// },
	{
		name: 'edit',
		icon: 'edit',
		children: [
			{
				name: 'first',
				icon: 'fund',
				// num: 3
			},
			{
				name: 'second',
				icon: 'cloud',
				// num: 4
			}
		]
	}
]
export default menu