import { useState } from "react";

function FarmerCrops() {
    const [farmerId, setFarmerId] = useState("");
    const [cropId, setCropId] = useState("");
    const [startDate, setStartDate] = useState("");
    const [area, setArea] = useState("");
    const [status, setStatus] = useState("");

    function submitFarmerCrop(e) {
        e.preventDefault();

        const farmerCrop = {
            farmer_id: farmerId,
            crop_id: cropId,
            start_date: startDate,
            area: area,
            status: status
        };

        console.log("Farmer Crop Details:", farmerCrop);

        alert("Farmer Crop added successfully!");

        // Clear form
        setFarmerId("");
        setCropId("");
        setStartDate("");
        setArea("");
        setStatus("");
    }

    return (
        <div className="farmer-crops-container">

            <h1>🌾 Farmer Crops</h1>

            <p>
                Connect a farmer with the crop they are cultivating.
            </p>

            <form onSubmit={submitFarmerCrop}>

                {/* Farmer ID */}
                <div className="form-group">
                    <label>Farmer ID</label>

                    <input
                        type="number"
                        placeholder="Enter farmer ID"
                        value={farmerId}
                        onChange={(e) => setFarmerId(e.target.value)}
                        required
                    />
                </div>

                {/* Crop ID */}
                <div className="form-group">
                    <label>Crop ID</label>

                    <input
                        type="number"
                        placeholder="Enter crop ID"
                        value={cropId}
                        onChange={(e) => setCropId(e.target.value)}
                        required
                    />
                </div>

                {/* Start Date */}
                <div className="form-group">
                    <label>Start Date</label>

                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                {/* Area */}
                <div className="form-group">
                    <label>Area (acres)</label>

                    <input
                        type="number"
                        step="0.01"
                        placeholder="Enter area"
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        required
                    />
                </div>

                {/* Status */}
                <div className="form-group">
                    <label>Status</label>

                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    >
                        <option value="">Select Status</option>
                        <option value="Growing">Growing</option>
                        <option value="Harvested">Harvested</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>

                <button type="submit">
                    🌱 Add Farmer Crop
                </button>

            </form>

        </div>
    );
}

export default FarmerCrops;