// Constant for VAT rate
const VAT_RATE = 0.17;

// Let for starting bank amount 
let bankAmount = 10000;

// Array for monthly expenses 
const monthlyExpenses = ["+200", "-100", "+146", "+167", "-2900"];

// Function to modify expenses with VAT (avoiding global modifications)
function applyVAT(expenses, vatRate) {
  return expenses.map(expense => {
    const amount = parseFloat(expense.slice(1)); // Convert to number 
    const withVAT = amount * (1 + vatRate);
    return expense[0] + withVAT.toFixed(2); // Prepend sign and format to 2 decimals
  });
}

// Calculate total expenses with VAT
let totalExpenses = 0;
const modifiedExpenses = applyVAT(monthlyExpenses, VAT_RATE);
for (const expense of modifiedExpenses) {
  const amount = parseFloat(expense.slice(1)); // Extract amount
  totalExpenses += amount;
}

// Update bank amount
bankAmount -= totalExpenses;

// Display final bank account standing
console.log(`Your bank account standing at the end of the month: ${bankAmount.toFixed(2)}`);
