export function validateOrder(order) { if(!order.symbol || order.qty <= 0) throw new Error("Invalid order"); return true; }
