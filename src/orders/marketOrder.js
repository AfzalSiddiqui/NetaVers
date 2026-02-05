export function marketOrder(symbol, qty) { return { type: "MARKET", symbol, qty, status: "EXECUTED" }; }
