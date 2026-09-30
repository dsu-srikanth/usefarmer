import { useState } from "react";

function Calculator() {
    const [cropName, setCropName] = useState("");
    const [production, setProduction] = useState("");
    const [price, setPrice] = useState("");
    const [medicine, setMedicine] = useState("");
    const [fertilizer, setFertilizer] = useState("");
    const [labour, setLabour] = useState("");
    const [other, setOther] = useState("");

    const [result, setResult] = useState(null);

    function calculateProfit(e) {
        e.preventDefault();

        const totalExpenses =
            Number(medicine || 0) +
            Number(fertilizer || 0) +
            Number(labour || 0) +
            Number(other || 0);

        const revenue =
            Number(production || 0) * Number(price || 0);

        const profit = revenue - totalExpenses;

        setResult({
            totalExpenses,
            revenue,
            profit
        });
    }

    function clearCalculator() {
        setCropName("");
        setProduction("");
        setPrice("");
        setMedicine("");
        setFertilizer("");
        setLabour("");
        setOther("");
        setResult(null);
    }

    return (
        <div className="calculator">

            <div className="form-title">
                <div className="form-title-icon">🧮</div>

                <div>
                    <h2>Farm Profit Calculator</h2>
                    <p>Calculate your crop revenue, expenses and profit</p>
                </div>
            </div>

            <form onSubmit={calculateProfit}>

                {/* Crop Name */}
                <div className="form-group">
                    <label>🌾 Crop Name</label>

                    <input
                        type="text"
                        placeholder="Enter crop name"
                        value={cropName}
                        onChange={(e) => setCropName(e.target.value)}
                        required
                    />
                </div>

                {/* Production */}
                <div className="form-group">
                    <label>📦 Production Quantity</label>

                    <input
                        type="number"
                        placeholder="Example: 50"
                        value={production}
                        onChange={(e) => setProduction(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                {/* Price */}
                <div className="form-group">
                    <label>💰 Price Per Unit (₹)</label>

                    <input
                        type="number"
                        placeholder="Example: 2500"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                    />
                </div>

                <h3 className="expense-heading">
                    💸 Expenses
                </h3>

                {/* Medicine */}
                <div className="form-group">
                    <label>💊 Medicine Expense (₹)</label>

                    <input
                        type="number"
                        placeholder="Enter medicine expense"
                        value={medicine}
                        onChange={(e) => setMedicine(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Fertilizer */}
                <div className="form-group">
                    <label>🌱 Fertilizer Expense (₹)</label>

                    <input
                        type="number"
                        placeholder="Enter fertilizer expense"
                        value={fertilizer}
                        onChange={(e) => setFertilizer(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Labour */}
                <div className="form-group">
                    <label>👨‍🌾 Labour Expense (₹)</label>

                    <input
                        type="number"
                        placeholder="Enter labour expense"
                        value={labour}
                        onChange={(e) => setLabour(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </div>

                {/* Other */}
                <div className="form-group">
                    <label>🚜 Other Expenses (₹)</label>

                    <input
                        type="number"
                        placeholder="Enter other expenses"
                        value={other}
                        onChange={(e) => setOther(e.target.value)}
                        min="0"
                        step="0.01"
                    />
                </div>

                <div className="calculator-buttons">

                    <button type="submit" className="calculate-button">
                        🧮 Calculate
                    </button>

                    <button
                        type="button"
                        className="clear-button"
                        onClick={clearCalculator}
                    >
                        🔄 Clear
                    </button>

                </div>

            </form>

            {/* Result */}
            {result && (
                <div className="calculator-result">

                    <h2>📊 Calculation Result</h2>

                    <div className="result-row">
                        <span>🌾 Crop</span>
                        <strong>{cropName}</strong>
                    </div>

                    <div className="result-row">
                        <span>💰 Revenue</span>
                        <strong>₹{result.revenue.toFixed(2)}</strong>
                    </div>

                    <div className="result-row">
                        <span>💸 Total Expenses</span>
                        <strong>₹{result.totalExpenses.toFixed(2)}</strong>
                    </div>

                    <div className="result-row profit-row">
                        <span>
                            {result.profit >= 0 ? "📈 Profit" : "📉 Loss"}
                        </span>

                        <strong>
                            ₹{Math.abs(result.profit).toFixed(2)}
                        </strong>
                    </div>

                </div>
            )}

        </div>
    );
}

export default Calculator;