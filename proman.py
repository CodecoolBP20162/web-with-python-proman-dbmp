from flask import Flask, request, g, redirect, url_for, render_template, session, jsonify
from build import *
from models import *
# importing ast for converting string to dictionary
import ast

app = Flask(__name__)


@app.route('/')
def home_menu():
    return render_template('home.html')


@app.route('/board')
def board_menu():
    return render_template('board.html')


@app.route('/card/postjson', methods=["POST"])
def post_card_json():
    raw_data = request.get_data()
    post_json = str(raw_data, encoding="utf-8")
    json_dict = ast.literal_eval(post_json)
    new_card = Card()
    new_card.create(CardId=json_dict["CardId"], CardText=json_dict["CardText"], CardState=json_dict["CardState"], CardBoard=json_dict["CardBoard"])
    return jsonify(json_dict)


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
    return jsonify(card_list)


# @app.route('/board/getjson')
# def board_json():
#     get_board = Board().select().get()
#     return get_board.board_json


if __name__ == "__main__":
    TableCreate().connect_to_db()
    app.run(host="0.0.0.0", debug=True)
