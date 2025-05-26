export default {
	
	dashboardMetrics: async () => {
		const orders = await stock_out.run();

			const allOrders = orders.length
		// const fulfilledOrders = orders.filter(o => o.status === 'DELIVERED').length;
		// const unfulfilledOrders = orders.filter(o => o.status === 'UNFULFILLED').length;
		// const cancelledOrders = orders.filter(o => o.status === 'CANCELLED').length;
		// const shippedOrders = orders.filter(o => o.status === 'SHIPPED').length;
		// const packedOrders = orders.filter(o => o.status === 'PACKED').length;
		// const totalOrderValue = orders.reduce((a, b) => a + b.total, 0);
		// const formattedOrderValueAmount = totalOrderValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0, -3);

		return {
			allOrders
			//fulfilledOrders,
			//unfulfilledOrders,
			//cancelledOrders,
			//shippedOrders,
			//packedOrders,
			//returnsCount: returnsCount[0].count,
			//totalOrderValue: formattedOrderValueAmount,
		}
		
//revenueChart: async () => {
		//const revenueByMonth = await getRevenueByMonth.run();
		
	}	
	}