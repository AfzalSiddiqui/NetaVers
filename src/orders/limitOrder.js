export function limitOrder(symbol, qty, price) { return { type: "LIMIT", symbol, qty, price }; }
