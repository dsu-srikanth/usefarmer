
from flask import Flask, request, jsonify

app = Flask(__name__)


# Business Logic
def recommendcrops(soil, land, season, water, location):

    crops = []

    if soil.lower() == "black" and season.lower() == "kharif":

        if water.lower() == "medium":
            crops = ["Maize", "Soyabean", "Cotton"]

        elif water.lower() == "high":
            crops = ["Cotton", "Sugarcane", "Rice"]

        elif water.lower() == "low":
            crops = ["Cotton", "Millets"]

    elif soil.lower() == "red" and season.lower() == "kharif":

        if water.lower() == "medium":
            crops = ["Groundnut", "Maize", "Red Gram"]

        else:
            crops = ["Millets", "Groundnut"]

    elif soil.lower() == "alluvial":

        if water.lower() == "high":
            crops = ["Rice", "Sugarcane"]

        else:
            crops = ["Wheat", "Maize"]

    else:
        crops = ["Maize"]

    return crops


# API
@app.route("/recommended", methods=["POST"])
def recommended():

    # Get JSON data
    data = request.get_json()

    # Get individual values
    soil = data["soil"]
    land = data["land"]
    season = data["season"]
    water = data["water"]
    location = data["location"]

    # Call business logic
    crops = recommendcrops(
        soil,
        land,
        season,
        water,
        location
    )

    # Return response
    return jsonify({
        "soil": soil,
        "season": season,
        "water": water,
        "land": land,
        "location": location,
        "recommended_crops": crops
    })


if __name__ == "__main__":
    app.run(debug=True)
