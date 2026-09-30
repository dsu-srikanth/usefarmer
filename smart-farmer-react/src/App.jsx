import { useState } from "react";

import Dashboard from "./components/Dashboard.jsx";
import Farmer from "./components/Farmer.jsx";
import Crops from "./components/Crops.jsx";
import Expenses from "./components/Expenses.jsx";
import Calculator from "./components/Calculator.jsx";

import "./App.css";

function App() {
    // Stores which page is currently displayed
    const [page, setPage] = useState("home");

    return (
        <div className="app">

            {/* ================= NAVBAR ================= */}

            <nav className="navbar">

                {/* Logo */}
                <div className="logo">
                    <span className="logo-icon">🌾</span>
                    <h2>Smart Farmer</h2>
                </div>

                {/* Navigation Buttons */}
                <div className="nav-buttons">

                    <button
                        className="nav-button"
                        onClick={() => setPage("home")}
                    >
                        🏠 Home
                    </button>

                    <button
                        className="nav-button"
                        onClick={() => setPage("farmer")}
                    >
                        👨‍🌾 Farmer
                    </button>

                    <button
                        className="nav-button"
                        onClick={() => setPage("crops")}
                    >
                        🌱 Crops
                    </button>

                    <button
                        className="nav-button"
                        onClick={() => setPage("expenses")}
                    >
                        💰 Expenses
                    </button>

                    <button
                        className="nav-button"
                        onClick={() => setPage("calculator")}
                    >
                        🧮 Calculator
                    </button>

                </div>
            </nav>


            {/* ================= MAIN CONTENT ================= */}

            <main className="main-content">

                {/* ================= HOME / DASHBOARD ================= */}

                {page === "home" && (
                    <Dashboard setPage={setPage} />
                )}


                {/* ================= FARMER PAGE ================= */}

                {page === "farmer" && (
                    <div className="dashboard">

                        <div className="page-header">

                            <div>
                                <h1>👨‍🌾 Farmer Management</h1>

                                <p>
                                    Add and manage farmer information
                                </p>
                            </div>

                            <div className="header-icon">
                                👨‍🌾
                            </div>

                        </div>


                        <div className="form-container">
                            <Farmer />
                        </div>


                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>
                )}


                {/* ================= CROPS PAGE ================= */}

                {page === "crops" && (
                    <div className="dashboard">

                        <div className="page-header">

                            <div>
                                <h1>🌱 Crop Management</h1>

                                <p>
                                    Add and manage crop information
                                </p>
                            </div>

                            <div className="header-icon">
                                🌱
                            </div>

                        </div>


                        <div className="form-container">
                            <Crops />
                        </div>


                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>
                )}


                {/* ================= EXPENSES PAGE ================= */}

                {page === "expenses" && (
                    <div className="dashboard">

                        <div className="page-header">

                            <div>
                                <h1>💰 Expense Management</h1>

                                <p>
                                    Track your farming expenses
                                </p>
                            </div>

                            <div className="header-icon">
                                💰
                            </div>

                        </div>


                        <div className="form-container">
                            <Expenses />
                        </div>


                        <button
                            className="back-button"
                            onClick={() => setPage("home")}
                        >
                            ← Back to Dashboard
                        </button>

                    </div>
                )}


                {/* ================= CALCULATOR PAGE ================= */}

                {page === "calculator" && (
                    <div className="dashboard">

                        <div className="page-header">

                            <div>
                                <h1>🧮 Farm Calculator</h1>

                                <p>
                                    Calculate farming revenue, expenses
                                    and profit
                                </p>
                            </div>

                            <div className="header-icon">
                                🧮
                            </div>

                        </div>


                        <div className="form-container">
                            <Calculator />
                        </div>


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