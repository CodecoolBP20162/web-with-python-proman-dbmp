from flask import Flask, request, g, redirect, url_for, render_template, session
import datetime

app = Flask(__name__,template_folder="templates",static_folder="static")




@app.route('/')
def home_menu():
        return render_template('home.html')


@app.route('/card_menu', methods=['GET'])
def card_menu():
    #   Query az adott id-re     selected_question = Question.get(Question.id == question_id)
    return render_template('cards.html')

"""
@app.route('/<board_id>', methods=['GET'])
def card_menu(board_id):
    #   Query az adott id-re     selected_question = Question.get(Question.id == question_id)
    return render_template('cards.html')
"""




if __name__ == "__main__":
    app.run(debug=True)