import { useState } from "react";


function Crops() {

    const [name, setName] = useState("");

    const [season, setSeason] = useState("");

    const [soilType, setSoilType] = useState("");

    const [duration, setDuration] = useState("");

    const [waterRequirement, setWaterRequirement] = useState("");


    // ==============================
    // ADD CROP
    // ==============================

    async function submitCrops(e) {

        e.preventDefault();


        // Data to send to Flask

        const data = {

            name: name,

            season: season,

            soil_type: soilType,

            duration: Number(duration),

            water_requirement: waterRequirement

        };


        console.log("Sending to Flask:", data);


        try {

            const response = await fetch(
                "http://127.0.0.1:5000/crops",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(data)
                }
            );


            const result = await response.json();


            console.log(
                "Flask response:",
                result
            );


            if (response.ok) {

                alert(
                    "🌱 Crop added successfully!"
                );


                // Clear form

                setName("");

                setSeason("");

                setSoilType("");

                setDuration("");

                setWaterRequirement("");

            }

            else {

                alert(
                    "❌ " + result.message
                );

            }

        }

        catch (error) {

            console.log(
                "Connection Error:",
                error
            );


            alert(
                "❌ Flask backend is not connected"
            );

        }

    }


    return (

        <div className="crop-form">


            {/* =========================
                TITLE
            ========================= */}

            <div className="form-title">

                <div className="form-title-icon">

                    🌱

                </div>


                <div>

                    <h2>
                        Crop Details
                    </h2>

                    <p>
                        Enter the details of your crop
                    </p>

                </div>

            </div>



            <form onSubmit={submitCrops}>


                {/* =========================
                    CROP NAME
                ========================= */}

                <div className="form-group">

                    <label>
                        🌾 Crop Name
                    </label>


                    <input

                        type="text"

                        placeholder="Enter crop name"

                        value={name}

                        onChange={(e) =>
                            setName(e.target.value)
                        }

                        required

                    />

                </div>



                {/* =========================
                    SEASON
                ========================= */}

                <div className="form-group">

                    <label>
                        ☀️ Season
                    </label>


                    <select

                        value={season}

                        onChange={(e) =>
                            setSeason(e.target.value)
                        }

                        required

                    >

                        <option value="">
                            Select season
                        </option>


                        <option value="Kharif">
                            Kharif
                        </option>


                        <option value="Rabi">
                            Rabi
                        </option>


                        <option value="Zaid">
                            Zaid
                        </option>

                    </select>

                </div>



                {/* =========================
                    SOIL TYPE
                ========================= */}

                <div className="form-group">

                    <label>
                        🌍 Soil Type
                    </label>


                    <select

                        value={soilType}

                        onChange={(e) =>
                            setSoilType(e.target.value)
                        }

                        required

                    >

                        <option value="">
                            Select soil type
                        </option>


                        <option value="Black Soil">
                            Black Soil
                        </option>


                        <option value="Red Soil">
                            Red Soil
                        </option>


                        <option value="Alluvial Soil">
                            Alluvial Soil
                        </option>


                        <option value="Clay Soil">
                            Clay Soil
                        </option>


                        <option value="Sandy Soil">
                            Sandy Soil
                        </option>

                    </select>

                </div>



                {/* =========================
                    DURATION
                ========================= */}

                <div className="form-group">

                    <label>
                        📅 Duration
                    </label>


                    <input

                        type="number"

                        placeholder="Enter duration in days"

                        value={duration}

                        onChange={(e) =>
                            setDuration(e.target.value)
                        }

                        min="1"

                        required

                    />

                </div>



                {/* =========================
                    WATER
                ========================= */}

                <div className="form-group">

                    <label>
                        💧 Water Requirement
                    </label>


                    <select

                        value={waterRequirement}

                        onChange={(e) =>
                            setWaterRequirement(e.target.value)
                        }

                        required

                    >

                        <option value="">
                            Select water requirement
                        </option>


                        <option value="Low">
                            Low
                        </option>


                        <option value="Medium">
                            Medium
                        </option>


                        <option value="High">
                            High
                        </option>

                    </select>

                </div>



                {/* =========================
                    BUTTON
                ========================= */}

                <button

                    type="submit"

                    className="add-crop-button"

                >

                    🌱 Add Crop

                </button>


            </form>

        </div>

    );

}


export default Crops;