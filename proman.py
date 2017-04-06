from flask import Flask, request, g, redirect, url_for, render_template, session, jsonify
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


@app.route('/card/postjson', methods=["POST"])
def post_card_json():
    post_json = str(request.get_data(), encoding="utf-8")
    print(post_json)
    return "success post"
    # new_card = Card()
    # new_card.create(CardId="1", CardText="Hello", CardState="in-progress", CardBoard=1)


@app.route('/card/getjson', methods=["GET"])
def get_card_json():
    get_card = Card().select()
    card_list = []
    for card in get_card:
        card_dict = {}
        card_dict["CardId"] = card.CardId
        card_dict["CardText"] = card.CardText
        card_dict["CardState"] = card.CardState
        card_dict["CardBoard"] = card.CardBoard
        card_list.append(card_dict)
    print(card_list)
    return jsonify(card_list)


# @app.route('/board/getjson')
# def board_json():
#     get_board = Board().select().get()
#     return get_board.board_json


if __name__ == "__main__":
    TableCreate().connect_to_db()
    app.run(host="0.0.0.0", debug=True)
