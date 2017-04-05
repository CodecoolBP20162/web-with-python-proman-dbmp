from flask import Flask, request, g, redirect, url_for, render_template, session
from build import *
from models import *
import json

app = Flask(__name__)


@app.route('/')
def home_menu():
    return render_template('home.html')


@app.route('/board')
def board_menu():
    return render_template('board.html')


@app.route('/card/json')
def card_json():
    new_card = Card().select().get()
    return new_card.card_json


@app.route('/board/json')
def board_json():
    new_board = Board().select().get()
    return new_board.board_json


if __name__ == "__main__":
    TableCreate().connect_to_db()
    app.run(host="0.0.0.0", debug=True)
