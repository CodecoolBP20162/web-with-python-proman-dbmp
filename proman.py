from flask import Flask, request, g, redirect, url_for, render_template, session

app = Flask(__name__)


@app.route('/')
def home_menu():
    return render_template('home.html')


@app.route('/board')
def board_menu():
    return render_template('board.html')


if __name__ == "__main__":
    app.run(debug=True)
