from flask import Flask, request, g, redirect, url_for, render_template, session
import datetime

app = Flask(__name__,template_folder="templates",static_folder="static")

if __name__ == "__main__":
    app.run(debug=True)