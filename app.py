from flask import Flask, render_template
import requests
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

API_KEY = os.getenv("CRICKET_API_KEY")

BASE_URL = "https://api.cricapi.com/v1/currentMatches"


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/live")
def live():

    url = f"{BASE_URL}?apikey={API_KEY}&offset=0"

    try:
        response = requests.get(url, timeout=10)
        data = response.json()

        matches = data.get("data", [])

    except Exception:
        matches = []

    return render_template(
        "live.html",
        matches=matches
    )


@app.route("/about")
def about():
    return render_template("about.html")
    # ==========================
# Error Handlers
# ==========================

@app.errorhandler(404)
def page_not_found(error):
    return render_template("about.html"), 404


@app.errorhandler(500)
def internal_error(error):
    return render_template("about.html"), 500


# ==========================
# Run App
# ==========================

if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=int(os.environ.get("PORT", 5000)),
        debug=True
    )
