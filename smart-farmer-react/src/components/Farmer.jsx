import { useState } from "react";

function Farmer() {

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [landArea, setLandArea] = useState("");
    const [soilType, setSoilType] = useState("");

    function submitFarmer(e) {
        e.preventDefault();

        alert("👨‍🌾 Farmer added successfully!");

        console.log("Farmer Name:", name);
        console.log("Phone:", phone);
        console.log("Email:", email);
        console.log("Password:", password);
        console.log("Location:", location);
        console.log("Land Area:", landArea);
        console.log("Soil Type:", soilType);

        // Clear form
        setName("");
        setPhone("");
        setEmail("");
        setPassword("");
        setLocation("");
        setLandArea("");
        setSoilType("");
    }

    return (
        <div className="farmer-form">

            {/* Heading */}
            <div className="form-title">

                <div className="form-title-icon">
                    👨‍🌾
                </div>

                <div>
                    <h2>Farmer Details</h2>
                    <p>Enter the farmer information</p>
                </div>

            </div>

            <form onSubmit={submitFarmer}>

                {/* Farmer Name */}
                <div className="form-group">

                    <label>👤 Farmer Name</label>

                    <input
                        type="text"
                        placeholder="Enter farmer name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                </div>

                {/* Phone */}
                <div className="form-group">

                    <label>📱 Phone Number</label>

                    <input
                        type="tel"
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />

                </div>

                {/* Email */}
                <div className="form-group">

                    <label>📧 Email</label>

                    <input
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                </div>

                {/* Password */}
                <div className="form-group">

                    <label>🔐 Password</label>

                    <input
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                </div>

                {/* Location */}
                <div className="form-group">

                    <label>📍 Location</label>

                    <input
                        type="text"
                        placeholder="Enter farmer location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        required
                    />

                </div>

                {/* Land Area */}
                <div className="form-group">

                    <label>🌾 Land Area</label>

                    <input
                        type="number"
                        placeholder="Enter land area in acres"
                        value={landArea}
                        onChange={(e) => setLandArea(e.target.value)}
                        min="0"
                        step="0.01"
                        required
                    />

                </div>

                {/* Soil Type */}
                <div className="form-group">

                    <label>🌍 Soil Type</label>

                    <select
                        value={soilType}
                        onChange={(e) => setSoilType(e.target.value)}
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

                {/* Submit */}
                <button
                    type="submit"
                    className="add-crop-button"
                >
                    👨‍🌾 Add Farmer
                </button>

            </form>

        </div>
    );
}

export default Farmer;