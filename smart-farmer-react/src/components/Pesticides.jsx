
import { useState } from "react";

function Pesticides() {

    const [name, setName] = useState("");
    const [crop, setCrop] = useState("");
    const [problem, setProblem] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");

    function submitPesticide(e) {

        e.preventDefault();

        alert("🧪 Pesticide added successfully!");

        console.log("Pesticide Name:", name);
        console.log("Crop:", crop);
        console.log("Problem:", problem);
        console.log("Price:", price);
        console.log("Quantity:", quantity);

        // Clear form
        setName("");
        setCrop("");
        setProblem("");
        setPrice("");
        setQuantity("");
    }

    return (

        <div className="farmer-form">

            {/* Heading */}

            <div className="form-title">

                <div className="form-title-icon">
                    🧪
                </div>

                <div>
                    <h2>Pesticide Details</h2>
                    <p>Enter the pesticide information</p>
                </div>

            </div>


            <form onSubmit={submitPesticide}>

                {/* Pesticide Name */}

                <div className="form-group">

                    <label>🧪 Pesticide Name</label>

                    <input
                        type="text"
                        placeholder="Enter pesticide name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                </div>


                {/* Crop */}

                <div className="form-group">

                    <label>🌾 Crop</label>

                    <input
                        type="text"
                        placeholder="Enter crop name"
                        value={crop}
                        onChange={(e) => setCrop(e.target.value)}
                        required
                    />

                </div>


                {/* Problem */}

                <div className="form-group">

                    <label>🐛 Problem</label>

                    <input
                        type="text"
                        placeholder="Enter pest or crop problem"
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        required
                    />

                </div>


                {/* Price */}

                <div className="form-group">

                    <label>💰 Price</label>

                    <input
                        type="number"
                        placeholder="Enter price in ₹"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                    />

                </div>


                {/* Quantity */}

                <div className="form-group">

                    <label>📦 Quantity</label>

                    <input
                        type="number"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        min="0"
                        required
                    />

                </div>


                {/* Submit */}

                <button
                    type="submit"
                    className="add-crop-button"
                >
                    🧪 Add Pesticide
                </button>

            </form>

        </div>
    );
}

export default Pesticides;
