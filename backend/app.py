from flask import Flask, request, jsonify
from flask_cors import CORS

from db import get_db_connection


# ==========================================
# CREATE FLASK APP
# ==========================================

app = Flask(__name__)

# Allow React frontend to connect
CORS(app)


# ==========================================
# HOME API
# ==========================================

@app.route("/")
def home():

    return jsonify({
        "message": "Smart Farmer Backend is running"
    })


# ==========================================
# CROPS API
# GET  -> Get all crops
# POST -> Add a new crop
# ==========================================

@app.route("/crops", methods=["GET", "POST"])
def crops():

    # ======================================
    # GET ALL CROPS
    # ======================================

    if request.method == "GET":

        try:

            connection = get_db_connection()

            cursor = connection.cursor(dictionary=True)

            cursor.execute("SELECT * FROM crop")

            crops_data = cursor.fetchall()

            cursor.close()
            connection.close()

            return jsonify(crops_data), 200

        except Exception as e:

            print("GET ERROR:", e)

            return jsonify({
                "message": "Failed to fetch crops",
                "error": str(e)
            }), 500


    # ======================================
    # ADD NEW CROP
    # ======================================

    if request.method == "POST":

        try:

            # Get JSON data from React
            data = request.get_json()

            print("Data received from React:", data)


            # Get values
            name = data["name"]

            season = data["season"]

            soil_type = data["soil_type"]

            duration = data["duration"]

            water_requirement = data["water_requirement"]


            # Connect to MySQL
            connection = get_db_connection()

            cursor = connection.cursor()


            # SQL query
            sql = """
            INSERT INTO crop
            (name, season, soil_type, duration, water_requirement)
            VALUES (%s, %s, %s, %s, %s)
            """


            values = (
                name,
                season,
                soil_type,
                duration,
                water_requirement
            )


            # Execute SQL
            cursor.execute(sql, values)


            # Save changes
            connection.commit()


            # Close connection
            cursor.close()
            connection.close()


            return jsonify({
                "message": "Crop added successfully"
            }), 201


        except Exception as e:

            print("POST ERROR:", e)

            return jsonify({
                "message": "Failed to add crop",
                "error": str(e)
            }), 500

@app.route("/expenses",methods=["Get"])
def show-expenses():
    cursor=db.cursor()
    cursor.execute("select * from expenses")
    cursor.close()
    rows = cursor.fetchall()
    for expense in rows:
        rows.append({
            farmer_id:row[0],
            crop_id:row[1],
            expense_catagory:row[2],
            amount:row[3],
            expense_date:row[4],
            description:row[5]

        })
    return jsonify;

# ==========================================
# RUN FLASK
# ==========================================

if __name__ == "__main__":

    app.run(
        debug=True,
        host="127.0.0.1",
        port=5000
    )