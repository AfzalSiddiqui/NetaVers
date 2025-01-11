export function recurringOrder(symbol, qty, intervalDays) { return { type: "RECURRING", symbol, qty, intervalDays, nextExecution: Date.now() + intervalDays*86400000 }; }
