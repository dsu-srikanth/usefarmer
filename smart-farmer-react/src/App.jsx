import { useState } from "react";

import Dashboard from "./components/Dashboard.jsx";
import Farmer from "./components/Farmer.jsx";
import Crops from "./components/Crops.jsx";
import Expenses from "./components/Expenses.jsx";
import Calculator from "./components/Calculator.jsx";
import FarmerCrops from "./components/FarmerCrops.jsx";
import Fertilizers from "./components/Fertilizers.jsx";
import Pesticides from "./components/Pesticides.jsx";
import CropRecommendation from "./components/CropRecommendations.jsx";
import "./App.css";


function App() {

    // Stores the currently selected page
    const [page, setPage] = useState("home");


    return (

        <div className="app">


            {/* =====================================================
                NAVBAR
            ===================================================== */}

            <nav className="navbar">


                {/* ================= LOGO ================= */}

                <div className="logo">

                    <span className="logo-icon">
                        🌾
                    </span>

                    <h2>
                        Smart Farmer
                    </h2>

                </div>


                {/* ================= NAVIGATION BUTTONS ================= */}

                <div className="nav-buttons">


                    {/* HOME */}

                    <button
                        className={`nav-button ${
                            page === "home" ? "active" : ""
                        }`}
                        onClick={() => setPage("home")}
                    >
                        🏠 Home
                    </button>


                    {/* FARMER */}

                    <button
                        className={`nav-button ${
                            page === "farmer" ? "active" : ""
                        }`}
                        onClick={() => setPage("farmer")}
                    >
                        👨‍🌾 Farmer
                    </button>


                    {/* CROPS */}

                    <button
                        className={`nav-button ${
                            page === "crops" ? "active" : ""
                        }`}
                        onClick={() => setPage("crops")}
                    >
                        🌱 Crops
                    </button>


                    {/* FARMER CROPS */}

                    <button
                        className={`nav-button ${
                            page === "farmerCrops" ? "active" : ""
                        }`}
                        onClick={() => setPage("farmerCrops")}
                    >
                        🌾 Farmer Crops
                    </button>


                    {/* EXPENSES */}

                    <button
                        className={`nav-button ${
                            page === "expenses" ? "active" : ""
                        }`}
                        onClick={() => setPage("expenses")}
                    >
                        💰 Expenses
                    </button>


                    {/* FERTILIZERS */}

                    <button
                        className={`nav-button ${
                            page === "fertilizers" ? "active" : ""
                        }`}
                        onClick={() => setPage("fertilizers")}
                    >
                        🧪 Fertilizers
                    </button>


                    {/* PESTICIDES */}

                    <button
                        className={`nav-button ${
                            page === "pesticides" ? "active" : ""
                        }`}
                        onClick={() => setPage("pesticides")}
                    >
                        🐛 Pesticides
                    </button>


                    {/* CROP RECOMMENDATION */}

                    <button
                        className={`nav-button ${
                            page === "recommendation" ? "active" : ""
                        }`}
                        onClick={() => setPage("recommendation")}
                    >
                        🌱 Recommendation
                    </button>


                    {/* CALCULATOR */}

                    <button
                        className={`nav-button ${
                            page === "calculator" ? "active" : ""
                        }`}
                        onClick={() => setPage("calculator")}
                    >
                        🧮 Calculator
                    </button>

                </div>

            </nav>



            {/* =====================================================
                MAIN CONTENT
            ===================================================== */}

            <main className="main-content">


                {/* =================================================
                    HOME / DASHBOARD
                ================================================= */}

                {page === "home" && (

                    <Dashboard
                        setPage={setPage}
                    />

                )}



                {/* =================================================
                    FARMER PAGE
                ================================================= */}

                {page === "farmer" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    👨‍🌾 Farmer Management
                                </h1>

                                <p>
                                    Add and manage farmer information
                                </p>

                            </div>

                            <div className="header-icon">
                                👨‍🌾
                            </div>

                        </div>


                        {/* FARMER FORM */}

                        <div className="form-container">

                            <Farmer />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    CROPS PAGE
                ================================================= */}

                {page === "crops" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🌱 Crop Management
                                </h1>

                                <p>
                                    Add and manage crop information
                                </p>

                            </div>

                            <div className="header-icon">
                                🌱
                            </div>

                        </div>


                        {/* CROPS FORM */}

                        <div className="form-container">

                            <Crops />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    FARMER CROPS PAGE
                ================================================= */}

                {page === "farmerCrops" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🌾 Farmer Crop Management
                                </h1>

                                <p>
                                    Connect farmers with the crops
                                    they are cultivating
                                </p>

                            </div>

                            <div className="header-icon">
                                🌾
                            </div>

                        </div>


                        {/* FARMER CROPS FORM */}

                        <div className="form-container">

                            <FarmerCrops />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    EXPENSES PAGE
                ================================================= */}

                {page === "expenses" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    💰 Expense Management
                                </h1>

                                <p>
                                    Track your farming expenses
                                </p>

                            </div>

                            <div className="header-icon">
                                💰
                            </div>

                        </div>


                        {/* EXPENSE FORM */}

                        <div className="form-container">

                            <Expenses />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    FERTILIZER PAGE
                ================================================= */}

                {page === "fertilizers" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🧪 Fertilizer Management
                                </h1>

                                <p>
                                    Add and manage fertilizer information
                                </p>

                            </div>

                            <div className="header-icon">
                                🧪
                            </div>

                        </div>


                        {/* FERTILIZER FORM */}

                        <div className="form-container">

                            <Fertilizers />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    PESTICIDE PAGE
                ================================================= */}

                {page === "pesticides" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🐛 Pesticide Management
                                </h1>

                                <p>
                                    Add and manage pesticide information
                                </p>

                            </div>

                            <div className="header-icon">
                                🐛
                            </div>

                        </div>


                        {/* PESTICIDE FORM */}

                        <div className="form-container">

                            <Pesticides />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    CROP RECOMMENDATION PAGE
                ================================================= */}

                {page === "recommendation" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🌱 Crop Recommendation
                                </h1>

                                <p>
                                    Find suitable crops based on
                                    farm conditions
                                </p>

                            </div>

                            <div className="header-icon">
                                🌱
                            </div>

                        </div>


                        {/* RECOMMENDATION FORM */}

                        <div className="form-container">

                            <CropRecommendation />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}



                {/* =================================================
                    CALCULATOR PAGE
                ================================================= */}

                {page === "calculator" && (

                    <div className="dashboard">


                        {/* PAGE HEADER */}

                        <div className="page-header">

                            <div>

                                <h1>
                                    🧮 Farm Calculator
                                </h1>

                                <p>
                                    Calculate farming revenue,
                                    expenses and profit
                                </p>

                            </div>

                            <div className="header-icon">
                                🧮
                            </div>

                        </div>


                        {/* CALCULATOR */}

                        <div className="form-container">

                            <Calculator />

                        </div>


                        {/* BACK BUTTON */}

                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>

                )}

            </main>

        </div>
    );
}


export default App;