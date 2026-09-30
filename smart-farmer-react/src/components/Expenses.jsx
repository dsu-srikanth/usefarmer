import { useState } from "react";

function Expenses() {

    const [farmerId, setFarmerId] = useState("");
    const [cropId, setCropId] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [description, setDescription] = useState("");

    function submitExpense(e) {

        e.preventDefault();

        const expenseData = {
            farmer_id: farmerId,
            crop_id: cropId,
            category: category,
            amount: amount,
            expense_date: expenseDate,
            description: description
        };

        console.log("Expense Details:", expenseData);

        alert("💰 Expense added successfully!");

        // Clear form
        setFarmerId("");
        setCropId("");
        setCategory("");
        setAmount("");
        setExpenseDate("");
        setDescription("");
    }

    return (

        <div className="expense-form">

            {/* Form Heading */}

            <div className="form-title">

                <div className="form-title-icon">
                    💰
                </div>

                <div>
                    <h2>Expense Details</h2>
                    <p>Enter your farming expense information</p>
                </div>

            </div>


            <form onSubmit={submitExpense}>

                {/* Farmer ID */}

                <div className="form-group">

                    <label>👨‍🌾 Farmer ID</label>

                    <input
                        type="number"
                        placeholder="Enter farmer ID"
                        value={farmerId}
                        onChange={(e) =>
                            setFarmerId(e.target.value)
                        }
                        min="1"
                        required
                    />

                </div>


                {/* Crop ID */}

                <div className="form-group">

                    <label>🌱 Crop ID</label>

                    <input
                        type="number"
                        placeholder="Enter crop ID"
                        value={cropId}
                        onChange={(e) =>
                            setCropId(e.target.value)
                        }
                        min="1"
                        required
                    />

                </div>


                {/* Category */}

                <div className="form-group">

                    <label>📦 Expense Category</label>

                    <select
                        value={category}
                        onChange={(e) =>
                            setCategory(e.target.value)
                        }
                        required
                    >

                        <option value="">
                            Select category
                        </option>

                        <option value="Seeds">
                            Seeds
                        </option>

                        <option value="Fertilizers">
                            Fertilizers
                        </option>

                        <option value="Medicines">
                            Medicines
                        </option>

                        <option value="Labor">
                            Labor
                        </option>

                        <option value="Water">
                            Water
                        </option>

                        <option value="Equipment">
                            Equipment
                        </option>

                        <option value="Transport">
                            Transport
                        </option>

                        <option value="Other">
                            Other
                        </option>

                    </select>

                </div>


                {/* Amount */}

                <div className="form-group">

                    <label>💵 Amount</label>

                    <input
                        type="number"
                        placeholder="Enter amount in ₹"
                        value={amount}
                        onChange={(e) =>
                            setAmount(e.target.value)
                        }
                        min="0"
                        step="0.01"
                        required
                    />

                </div>


                {/* Date */}

                <div className="form-group">

                    <label>📅 Expense Date</label>

                    <input
                        type="date"
                        value={expenseDate}
                        onChange={(e) =>
                            setExpenseDate(e.target.value)
                        }
                        required
                    />

                </div>


                {/* Description */}

                <div className="form-group">

                    <label>📝 Description</label>

                    <textarea
                        placeholder="Enter expense description"
                        value={description}
                        onChange={(e) =>
                            setDescription(e.target.value)
                        }
                        rows="4"
                    ></textarea>

                </div>


                {/* Submit Button */}

                <button
                    type="submit"
                    className="add-expense-button"
                >
                    💰 Add Expense
                </button>

            </form>

        </div>
    );
}

export default Expenses;