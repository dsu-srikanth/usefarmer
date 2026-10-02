from flask import Flask, request, jsonify
from flask_cors import CORS

from db import get_db_connection


app = Flask(__name__)

CORS(app)


# ==========================================================
# HOME / TEST BACKEND
# ==========================================================

@app.route("/")
def home():

    return "Smart Farmer Backend Running"


# ==========================================================
#                     FARMER CRUD
# ==========================================================

# ---------------- ADD FARMER ----------------

@app.route("/farmer", methods=["POST"])
def add_farmer():

    data = request.get_json()

    name = data["name"]
    phone = data["phone"]
    email = data["email"]
    password = data["password"]
    location = data["location"]
    land_area = data["land_area"]
    soil_type = data["soil_type"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO farmer
        (
            name,
            phone,
            email,
            password,
            location,
            land_area,
            soil_type
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    values = (
        name,
        phone,
        email,
        password,
        location,
        land_area,
        soil_type
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer added successfully"
    }), 201


# ---------------- GET ALL FARMERS ----------------

@app.route("/farmer", methods=["GET"])
def get_farmers():

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            id,
            name,
            phone,
            email,
            location,
            land_area,
            soil_type
        FROM farmer
    """

    cursor.execute(query)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "name": row[1],
            "phone": row[2],
            "email": row[3],
            "location": row[4],
            "land_area": row[5],
            "soil_type": row[6]
        })

    return jsonify(result)


# ---------------- GET SINGLE FARMER ----------------

@app.route("/farmer/<int:id>", methods=["GET"])
def get_farmer(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            id,
            name,
            phone,
            email,
            location,
            land_area,
            soil_type
        FROM farmer
        WHERE id = %s
    """

    cursor.execute(query, (id,))

    row = cursor.fetchone()

    cursor.close()
    connection.close()

    if row is None:

        return jsonify({
            "message": "Farmer not found"
        }), 404

    return jsonify({
        "id": row[0],
        "name": row[1],
        "phone": row[2],
        "email": row[3],
        "location": row[4],
        "land_area": row[5],
        "soil_type": row[6]
    })


# ---------------- UPDATE FARMER ----------------

@app.route("/farmer/<int:id>", methods=["PUT"])
def update_farmer(id):

    data = request.get_json()

    name = data["name"]
    phone = data["phone"]
    email = data["email"]
    location = data["location"]
    land_area = data["land_area"]
    soil_type = data["soil_type"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE farmer
        SET
            name = %s,
            phone = %s,
            email = %s,
            location = %s,
            land_area = %s,
            soil_type = %s
        WHERE id = %s
    """

    values = (
        name,
        phone,
        email,
        location,
        land_area,
        soil_type,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer updated successfully"
    })


# ---------------- DELETE FARMER ----------------

@app.route("/farmer/<int:id>", methods=["DELETE"])
def delete_farmer(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM farmer WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer deleted successfully"
    })


# ==========================================================
#                     CROPS CRUD
# ==========================================================

# ---------------- ADD CROP ----------------

@app.route("/crops", methods=["POST"])
def add_crop():

    data = request.get_json()

    name = data["name"]
    season = data["season"]
    soil_type = data["soil_type"]
    duration = data["duration"]
    water_requirement = data["water_requirement"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO crops
        (
            name,
            season,
            soil_type,
            duration,
            water_requirement
        )
        VALUES (%s, %s, %s, %s, %s)
    """

    values = (
        name,
        season,
        soil_type,
        duration,
        water_requirement
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Crop added successfully"
    }), 201


# ---------------- GET ALL CROPS ----------------

@app.route("/crops", methods=["GET"])
def get_crops():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            id,
            name,
            season,
            soil_type,
            duration,
            water_requirement
        FROM crops
    """)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "name": row[1],
            "season": row[2],
            "soil_type": row[3],
            "duration": row[4],
            "water_requirement": row[5]
        })

    return jsonify(result)


# ---------------- GET SINGLE CROP ----------------

@app.route("/crops/<int:id>", methods=["GET"])
def get_crop(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "SELECT * FROM crops WHERE id = %s",
        (id,)
    )

    row = cursor.fetchone()

    cursor.close()
    connection.close()

    if row is None:

        return jsonify({
            "message": "Crop not found"
        }), 404

    return jsonify({
        "id": row[0],
        "name": row[1],
        "season": row[2],
        "soil_type": row[3],
        "duration": row[4],
        "water_requirement": row[5]
    })


# ---------------- UPDATE CROP ----------------

@app.route("/crops/<int:id>", methods=["PUT"])
def update_crop(id):

    data = request.get_json()

    name = data["name"]
    season = data["season"]
    soil_type = data["soil_type"]
    duration = data["duration"]
    water_requirement = data["water_requirement"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE crops
        SET
            name = %s,
            season = %s,
            soil_type = %s,
            duration = %s,
            water_requirement = %s
        WHERE id = %s
    """

    values = (
        name,
        season,
        soil_type,
        duration,
        water_requirement,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Crop updated successfully"
    })


# ---------------- DELETE CROP ----------------

@app.route("/crops/<int:id>", methods=["DELETE"])
def delete_crop(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM crops WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Crop deleted successfully"
    })


# ==========================================================
#                  FARMER CROPS CRUD
# ==========================================================

# Table:
#
# farmer_crops
# id
# farmer_id
# crop_id
# start_date
# area
# status
# production
# price
#


# ---------------- ADD FARMER CROP ----------------

@app.route("/farmer-crops", methods=["POST"])
def add_farmer_crop():

    data = request.get_json()

    farmer_id = data["farmer_id"]
    crop_id = data["crop_id"]
    start_date = data["start_date"]
    area = data["area"]
    status = data["status"]
    production = data["production"]
    price = data["price"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO farmer_crops
        (
            farmer_id,
            crop_id,
            start_date,
            area,
            status,
            production,
            price
        )
        VALUES (%s, %s, %s, %s, %s, %s, %s)
    """

    values = (
        farmer_id,
        crop_id,
        start_date,
        area,
        status,
        production,
        price
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer crop added successfully"
    }), 201


# ---------------- GET ALL FARMER CROPS ----------------

@app.route("/farmer-crops", methods=["GET"])
def get_farmer_crops():

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            fc.id,
            fc.farmer_id,
            fc.crop_id,
            c.name,
            fc.start_date,
            fc.area,
            fc.status,
            fc.production,
            fc.price
        FROM farmer_crops fc
        JOIN crops c
        ON fc.crop_id = c.id
    """

    cursor.execute(query)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "farmer_id": row[1],
            "crop_id": row[2],
            "crop_name": row[3],
            "start_date": str(row[4]),
            "area": row[5],
            "status": row[6],
            "production": row[7],
            "price": row[8]
        })

    return jsonify(result)


# ---------------- GET FARMER'S CROPS ----------------

@app.route("/farmer-crops/<int:farmer_id>", methods=["GET"])
def get_farmer_crops_by_farmer(farmer_id):

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            fc.id,
            fc.farmer_id,
            fc.crop_id,
            c.name,
            fc.start_date,
            fc.area,
            fc.status,
            fc.production,
            fc.price
        FROM farmer_crops fc
        JOIN crops c
        ON fc.crop_id = c.id
        WHERE fc.farmer_id = %s
    """

    cursor.execute(query, (farmer_id,))

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "farmer_id": row[1],
            "crop_id": row[2],
            "crop_name": row[3],
            "start_date": str(row[4]),
            "area": row[5],
            "status": row[6],
            "production": row[7],
            "price": row[8]
        })

    return jsonify(result)


# ---------------- UPDATE FARMER CROP ----------------

@app.route("/farmer-crops/<int:id>", methods=["PUT"])
def update_farmer_crop(id):

    data = request.get_json()

    start_date = data["start_date"]
    area = data["area"]
    status = data["status"]
    production = data["production"]
    price = data["price"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE farmer_crops
        SET
            start_date = %s,
            area = %s,
            status = %s,
            production = %s,
            price = %s
        WHERE id = %s
    """

    values = (
        start_date,
        area,
        status,
        production,
        price,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer crop updated successfully"
    })


# ---------------- DELETE FARMER CROP ----------------

@app.route("/farmer-crops/<int:id>", methods=["DELETE"])
def delete_farmer_crop(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM farmer_crops WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Farmer crop deleted successfully"
    })


# ==========================================================
#                     EXPENSES CRUD
# ==========================================================

# Table:
#
# expenses
# id
# farmer_id
# crop_id
# category
# amount
# expense_date
# description
#


# ---------------- ADD EXPENSE ----------------

@app.route("/expenses", methods=["POST"])
def add_expense():

    data = request.get_json()

    farmer_id = data["farmer_id"]
    crop_id = data["crop_id"]
    category = data["category"]
    amount = data["amount"]
    expense_date = data["expense_date"]
    description = data["description"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO expenses
        (
            farmer_id,
            crop_id,
            category,
            amount,
            expense_date,
            description
        )
        VALUES (%s, %s, %s, %s, %s, %s)
    """

    values = (
        farmer_id,
        crop_id,
        category,
        amount,
        expense_date,
        description
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Expense added successfully"
    }), 201


# ---------------- GET ALL EXPENSES ----------------

@app.route("/expenses", methods=["GET"])
def get_expenses():

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            e.id,
            e.farmer_id,
            e.crop_id,
            c.name,
            e.category,
            e.amount,
            e.expense_date,
            e.description
        FROM expenses e
        JOIN crops c
        ON e.crop_id = c.id
    """

    cursor.execute(query)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "farmer_id": row[1],
            "crop_id": row[2],
            "crop_name": row[3],
            "category": row[4],
            "amount": row[5],
            "expense_date": str(row[6]),
            "description": row[7]
        })

    return jsonify(result)


# ---------------- GET FARMER EXPENSES ----------------

@app.route("/expenses/<int:farmer_id>", methods=["GET"])
def get_farmer_expenses(farmer_id):

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            e.id,
            e.farmer_id,
            e.crop_id,
            c.name,
            e.category,
            e.amount,
            e.expense_date,
            e.description
        FROM expenses e
        JOIN crops c
        ON e.crop_id = c.id
        WHERE e.farmer_id = %s
    """

    cursor.execute(query, (farmer_id,))

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "farmer_id": row[1],
            "crop_id": row[2],
            "crop_name": row[3],
            "category": row[4],
            "amount": row[5],
            "expense_date": str(row[6]),
            "description": row[7]
        })

    return jsonify(result)


# ---------------- UPDATE EXPENSE ----------------

@app.route("/expenses/<int:id>", methods=["PUT"])
def update_expense(id):

    data = request.get_json()

    category = data["category"]
    amount = data["amount"]
    expense_date = data["expense_date"]
    description = data["description"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE expenses
        SET
            category = %s,
            amount = %s,
            expense_date = %s,
            description = %s
        WHERE id = %s
    """

    values = (
        category,
        amount,
        expense_date,
        description,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Expense updated successfully"
    })


# ---------------- DELETE EXPENSE ----------------

@app.route("/expenses/<int:id>", methods=["DELETE"])
def delete_expense(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM expenses WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Expense deleted successfully"
    })

@app.route("/crop-recommendations", methods=["GET"])
def get_crop_recommendations():

    db = get_db_connection()
    cursor = db.cursor(dictionary=True)

    cursor.execute("""
        SELECT
            cr.id,
            cr.crop_id,
            c.name AS crop_name,
            cr.soil_type,
            cr.season,
            cr.water_requirement,
            cr.reason
        FROM crop_recommendations cr
        JOIN crops c
            ON cr.crop_id = c.id
    """)

    recommendations = cursor.fetchall()

    cursor.close()
    db.close()

    return jsonify(recommendations)


# ==========================================================
#                    FERTILIZERS CRUD
# ==========================================================

# Table:
#
# fertilizers
# id
# name
# crop
# purpose
# price
# quantity
#


# ---------------- ADD FERTILIZER ----------------

@app.route("/fertilizers", methods=["POST"])
def add_fertilizer():

    data = request.get_json()

    name = data["name"]
    crop = data["crop"]
    purpose = data["purpose"]
    price = data["price"]
    quantity = data["quantity"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO fertilizers
        (
            name,
            crop,
            purpose,
            price,
            quantity
        )
        VALUES (%s, %s, %s, %s, %s)
    """

    values = (
        name,
        crop,
        purpose,
        price,
        quantity
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Fertilizer added successfully"
    }), 201


# ---------------- GET FERTILIZERS ----------------

@app.route("/fertilizers", methods=["GET"])
def get_fertilizers():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            id,
            name,
            crop,
            purpose,
            price,
            quantity
        FROM fertilizers
    """)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "name": row[1],
            "crop": row[2],
            "purpose": row[3],
            "price": row[4],
            "quantity": row[5]
        })

    return jsonify(result)


# ---------------- UPDATE FERTILIZER ----------------

@app.route("/fertilizers/<int:id>", methods=["PUT"])
def update_fertilizer(id):

    data = request.get_json()

    name = data["name"]
    crop = data["crop"]
    purpose = data["purpose"]
    price = data["price"]
    quantity = data["quantity"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE fertilizers
        SET
            name = %s,
            crop = %s,
            purpose = %s,
            price = %s,
            quantity = %s
        WHERE id = %s
    """

    values = (
        name,
        crop,
        purpose,
        price,
        quantity,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Fertilizer updated successfully"
    })


# ---------------- DELETE FERTILIZER ----------------

@app.route("/fertilizers/<int:id>", methods=["DELETE"])
def delete_fertilizer(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM fertilizers WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Fertilizer deleted successfully"
    })


# ==========================================================
#                    PESTICIDES CRUD
# ==========================================================

# Table:
#
# pesticides
# id
# name
# crop
# problem
# price
# quantity
#


# ---------------- ADD PESTICIDE ----------------

@app.route("/pesticides", methods=["POST"])
def add_pesticide():

    data = request.get_json()

    name = data["name"]
    crop = data["crop"]
    problem = data["problem"]
    price = data["price"]
    quantity = data["quantity"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        INSERT INTO pesticides
        (
            name,
            crop,
            problem,
            price,
            quantity
        )
        VALUES (%s, %s, %s, %s, %s)
    """

    values = (
        name,
        crop,
        problem,
        price,
        quantity
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Pesticide added successfully"
    }), 201


# ---------------- GET PESTICIDES ----------------

@app.route("/pesticides", methods=["GET"])
def get_pesticides():

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            id,
            name,
            crop,
            problem,
            price,
            quantity
        FROM pesticides
    """)

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    result = []

    for row in rows:

        result.append({
            "id": row[0],
            "name": row[1],
            "crop": row[2],
            "problem": row[3],
            "price": row[4],
            "quantity": row[5]
        })

    return jsonify(result)


# ---------------- UPDATE PESTICIDE ----------------

@app.route("/pesticides/<int:id>", methods=["PUT"])
def update_pesticide(id):

    data = request.get_json()

    name = data["name"]
    crop = data["crop"]
    problem = data["problem"]
    price = data["price"]
    quantity = data["quantity"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        UPDATE pesticides
        SET
            name = %s,
            crop = %s,
            problem = %s,
            price = %s,
            quantity = %s
        WHERE id = %s
    """

    values = (
        name,
        crop,
        problem,
        price,
        quantity,
        id
    )

    cursor.execute(query, values)

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Pesticide updated successfully"
    })


# ---------------- DELETE PESTICIDE ----------------

@app.route("/pesticides/<int:id>", methods=["DELETE"])
def delete_pesticide(id):

    connection = get_db_connection()
    cursor = connection.cursor()

    cursor.execute(
        "DELETE FROM pesticides WHERE id = %s",
        (id,)
    )

    connection.commit()

    cursor.close()
    connection.close()

    return jsonify({
        "message": "Pesticide deleted successfully"
    })


# ==========================================================
#                 CROP RECOMMENDATION
# ==========================================================

@app.route("/crop-recommendation", methods=["POST"])
def crop_recommendation():

    data = request.get_json()

    soil = data["soil"]
    season = data["season"]
    water = data["water"]

    connection = get_db_connection()
    cursor = connection.cursor()

    query = """
        SELECT
            id,
            name,
            season,
            soil_type,
            duration,
            water_requirement
        FROM crops
        WHERE
            LOWER(soil_type) = LOWER(%s)
            AND LOWER(season) = LOWER(%s)
    """

    cursor.execute(
        query,
        (soil, season)
    )

    rows = cursor.fetchall()

    cursor.close()
    connection.close()

    recommendations = []

    for row in rows:

        crop_water = str(row[5]).lower()

        if (
            water.lower() in crop_water
            or crop_water in water.lower()
        ):

            recommendations.append({
                "id": row[0],
                "name": row[1],
                "season": row[2],
                "soil_type": row[3],
                "duration": row[4],
                "water_requirement": row[5]
            })

    return jsonify({

        "success": True,

        "soil": soil,

        "season": season,

        "water": water,

        "recommended_crops": recommendations

    })


# ==========================================================
#                     PROFIT
# ==========================================================

@app.route("/profit/<int:farmer_id>/<int:crop_id>", methods=["GET"])
def calculate_profit(farmer_id, crop_id):

    connection = get_db_connection()
    cursor = connection.cursor()

    # Get production and price

    cursor.execute("""
        SELECT
            production,
            price
        FROM farmer_crops
        WHERE farmer_id = %s
        AND crop_id = %s
    """, (farmer_id, crop_id))

    crop_data = cursor.fetchone()

    if crop_data is None:

        cursor.close()
        connection.close()

        return jsonify({
            "message": "Farmer crop not found"
        }), 404

    production = float(crop_data[0] or 0)

    price = float(crop_data[1] or 0)

    revenue = production * price

    # Get total expenses

    cursor.execute("""
        SELECT SUM(amount)
        FROM expenses
        WHERE farmer_id = %s
        AND crop_id = %s
    """, (farmer_id, crop_id))

    expense_data = cursor.fetchone()

    total_expenses = float(
        expense_data[0] or 0
    )

    profit = revenue - total_expenses

    cursor.close()
    connection.close()

    return jsonify({

        "farmer_id": farmer_id,

        "crop_id": crop_id,

        "production": production,

        "price": price,

        "revenue": revenue,

        "total_expenses": total_expenses,

        "profit": profit

    })


# ==========================================================
#                     DASHBOARD
# ==========================================================

@app.route("/dashboard/<int:farmer_id>", methods=["GET"])
def dashboard(farmer_id):

    connection = get_db_connection()
    cursor = connection.cursor()

    # ------------------------------------------------------
    # FARMER DETAILS
    # ------------------------------------------------------

    cursor.execute("""
        SELECT
            id,
            name,
            phone,
            email,
            location,
            land_area,
            soil_type
        FROM farmer
        WHERE id = %s
    """, (farmer_id,))

    farmer = cursor.fetchone()

    if farmer is None:

        cursor.close()
        connection.close()

        return jsonify({
            "message": "Farmer not found"
        }), 404

    # ------------------------------------------------------
    # TOTAL CROPS
    # ------------------------------------------------------

    cursor.execute("""
        SELECT COUNT(*)
        FROM farmer_crops
        WHERE farmer_id = %s
    """, (farmer_id,))

    total_crops = cursor.fetchone()[0]

    # ------------------------------------------------------
    # ACTIVE CROPS
    # ------------------------------------------------------

    cursor.execute("""
        SELECT COUNT(*)
        FROM farmer_crops
        WHERE farmer_id = %s
        AND LOWER(status) = 'active'
    """, (farmer_id,))

    active_crops = cursor.fetchone()[0]

    # ------------------------------------------------------
    # TOTAL EXPENSES
    # ------------------------------------------------------

    cursor.execute("""
        SELECT SUM(amount)
        FROM expenses
        WHERE farmer_id = %s
    """, (farmer_id,))

    total_expenses = float(
        cursor.fetchone()[0] or 0
    )

    # ------------------------------------------------------
    # TOTAL PRODUCTION
    # ------------------------------------------------------

    cursor.execute("""
        SELECT SUM(production)
        FROM farmer_crops
        WHERE farmer_id = %s
    """, (farmer_id,))

    total_production = float(
        cursor.fetchone()[0] or 0
    )

    # ------------------------------------------------------
    # TOTAL REVENUE
    # ------------------------------------------------------

    cursor.execute("""
        SELECT SUM(production * price)
        FROM farmer_crops
        WHERE farmer_id = %s
    """, (farmer_id,))

    total_revenue = float(
        cursor.fetchone()[0] or 0
    )

    # ------------------------------------------------------
    # TOTAL PROFIT
    # ------------------------------------------------------

    total_profit = (
        total_revenue - total_expenses
    )

    cursor.close()
    connection.close()

    return jsonify({

        "farmer": {

            "id": farmer[0],

            "name": farmer[1],

            "phone": farmer[2],

            "email": farmer[3],

            "location": farmer[4],

            "land_area": farmer[5],

            "soil_type": farmer[6]

        },

        "statistics": {

            "total_crops": total_crops,

            "active_crops": active_crops,

            "total_expenses": total_expenses,

            "total_production": total_production,

            "total_revenue": total_revenue,

            "total_profit": total_profit

        }

    })


# ==========================================================
#                     RUN SERVER
# ==========================================================

if __name__ == "__main__":

    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )