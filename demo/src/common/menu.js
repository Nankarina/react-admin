const menu = [
	{
		name: 'option',
		icon: 'delete',
		num: 0
	},
	{
		name: 'single',
		icon: 'bold',
		num: 1
	},
	{
		name: 'file',
		icon: 'file'
	},
	{
		name: 'test',
		icon: 'api',
		children: [
			{
				name: 'first',
				icon: 'fund',
				num: 3
			},
			{
				name: 'second',
				icon: 'cloud',
				num: 4
			}
		]
	}
]
export default menu