
import { useState } from "react";

function Fertilizers() {

    const [name, setName] = useState("");
    const [crop, setCrop] = useState("");
    const [purpose, setPurpose] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");


    function submitFertilizer(e) {

        e.preventDefault();

        alert("🧪 Fertilizer added successfully!");

        console.log("Fertilizer Name:", name);
        console.log("Crop:", crop);
        console.log("Purpose:", purpose);
        console.log("Price:", price);
        console.log("Quantity:", quantity);


        // Clear form

        setName("");
        setCrop("");
        setPurpose("");
        setPrice("");
        setQuantity("");
    }


    return (

        <div className="fertilizer-form">

            {/* Form Title */}

            <div className="form-title">

                <div className="form-title-icon">
                    🧪
                </div>

                <div>

                    <h2>
                        Fertilizer Details
                    </h2>

                    <p>
                        Enter the details of your fertilizer
                    </p>

                </div>

            </div>


            <form onSubmit={submitFertilizer}>

                {/* Fertilizer Name */}

                <div className="form-group">

                    <label>
                        🧪 Fertilizer Name
                    </label>

                    <input
                        type="text"
                        placeholder="Enter fertilizer name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                        required
                    />

                </div>


                {/* Crop */}

                <div className="form-group">

                    <label>
                        🌾 Crop
                    </label>

                    <select
                        value={crop}
                        onChange={(e) =>
                            setCrop(e.target.value)
                        }
                        required
                    >

                        <option value="">
                            Select crop
                        </option>

                        <option value="Rice">
                            Rice
                        </option>

                        <option value="Wheat">
                            Wheat
                        </option>

                        <option value="Cotton">
                            Cotton
                        </option>

                        <option value="Maize">
                            Maize
                        </option>

                        <option value="Tomato">
                            Tomato
                        </option>

                        <option value="Groundnut">
                            Groundnut
                        </option>

                    </select>

                </div>


                {/* Purpose */}

                <div className="form-group">

                    <label>
                        🎯 Purpose
                    </label>

                    <input
                        type="text"
                        placeholder="Enter fertilizer purpose"
                        value={purpose}
                        onChange={(e) =>
                            setPurpose(e.target.value)
                        }
                        required
                    />

                </div>


                {/* Price */}

                <div className="form-group">

                    <label>
                        💰 Price
                    </label>

                    <input
                        type="number"
                        placeholder="Enter price in ₹"
                        value={price}
                        onChange={(e) =>
                            setPrice(e.target.value)
                        }
                        min="1"
                        required
                    />

                </div>


                {/* Quantity */}

                <div className="form-group">

                    <label>
                        📦 Quantity
                    </label>

                    <input
                        type="number"
                        placeholder="Enter quantity in kg"
                        value={quantity}
                        onChange={(e) =>
                            setQuantity(e.target.value)
                        }
                        min="1"
                        required
                    />

                </div>


                {/* Submit Button */}

                <button
                    type="submit"
                    className="add-fertilizer-button"
                >
                    🧪 Add Fertilizer
                </button>

            </form>

        </div>
    );
}


export default Fertilizers;

