import type { INodeProperties } from 'n8n-workflow';

const showOnlyForProductGetOne = {
	operation: ['getOne'],
	resource: ['product'],
};

export const productGetDescription: INodeProperties[] = [
	{
		displayName: 'Product ID',
		name: 'productId',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: showOnlyForProductGetOne,
		},
		description: "The product's MongoDB ObjectId to retrieve",
	},
];
