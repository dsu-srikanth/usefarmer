function Dashboard({ setPage }) {

    return (

        <div className="dashboard">

            {/* Dashboard Header */}

            <div className="page-header">

                <div>

                    <h1>🌾 Smart Farmer Dashboard</h1>

                    <p>
                        Manage your farming activities easily
                    </p>

                </div>

                <div className="header-icon">
                    🌾
                </div>

            </div>


            {/* Dashboard Cards */}

            <div className="info-cards">

                {/* Farmer Card */}

                <div
                    className="info-card"
                    onClick={() => setPage("farmer")}
                >

                    <div className="card-icon">
                        👨‍🌾
                    </div>

                    <div>

                        <h3>Farmers</h3>

                        <p>
                            Add and manage farmer information
                        </p>

                    </div>

                </div>


                {/* Crops Card */}

                <div
                    className="info-card"
                    onClick={() => setPage("crops")}
                >

                    <div className="card-icon">
                        🌱
                    </div>

                    <div>

                        <h3>Crops</h3>

                        <p>
                            Manage your crop information
                        </p>

                    </div>

                </div>


                {/* Expenses Card */}

                <div
                    className="info-card"
                    onClick={() => setPage("expenses")}
                >

                    <div className="card-icon">
                        💰
                    </div>

                    <div>

                        <h3>Expenses</h3>

                        <p>
                            Track your farming expenses
                        </p>

                    </div>

                </div>

            </div>


            {/* Quick Actions */}

            <div className="quick-actions">

                <h2>Quick Actions</h2>

                <div className="home-buttons">

                    <button
                        className="start-button"
                        onClick={() => setPage("farmer")}
                    >
                        👨‍🌾 Add Farmer
                        <span>→</span>
                    </button>


                    <button
                        className="start-button"
                        onClick={() => setPage("crops")}
                    >
                        🌱 Manage Crops
                        <span>→</span>
                    </button>


                    <button
                        className="start-button"
                        onClick={() => setPage("expenses")}
                    >
                        💰 Add Expense
                        <span>→</span>
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Dashboard;