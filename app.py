from flask import Flask, render_template
import requests
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

app = Flask(__name__)

# API Key
API_KEY = os.getenv("CRICKET_API_KEY")

# CricAPI Endpoint
BASE_URL = "https://api.cricapi.com/v1/currentMatches"


# ==========================
# Home
# ==========================
@app.route("/")
def home():
    return render_template("index.html")


# ==========================
# Live Matches
# ==========================
@app.route("/live")
def live():

    matches = []

    try:

        url = f"{BASE_URL}?apikey={API_KEY}&offset=0"

        response = requests.get(url, timeout=15)

        print("Status Code:", response.status_code)
        print("Response:", response.text)

        if response.status_code == 200:

            data = response.json()

            if data.get("status") == "success":
                matches = data.get("data", [])

    except Exception as e:

        print("ERROR:", e)

    return render_template("live.html", matches=matches)


# ==========================
# About
# ==========================
@app.route("/about")
def about():
    return render_template("about.html")


# ==========================
# Error Pages
# ==========================
@app.errorhandler(404)
def not_found(error):
    return render_template("about.html"), 404


@app.errorhandler(500)
def server_error(error):
    return render_template("about.html"), 500


# ==========================
# Run Server
# ==========================
if __name__ == "__main__":

    print("API KEY =", API_KEY)

    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
