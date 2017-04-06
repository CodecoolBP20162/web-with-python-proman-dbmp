# This script can create the database tables based on your models
from models import *


class TableCreate:
    def __init__(self):
        self.db = db

    def connect_to_db(self):
        self.db.connect()

    def drop_table(self):
        self.db.drop_tables([Board, Card], safe=True)

    def create_tables(self):
        self.db.create_tables([Board, Card], safe=True)


if __name__ == "__main__":
    proman = TableCreate()
    proman.connect_to_db()
    proman.drop_table()
    proman.create_tables()

    # Card().create(card_json="{'CardId': 1, 'CardText': 'New card', 'CardState': 'in-progress',"
    #                             "'CardBoard': 'New board'}")
    # Board().create(board_json="{'BoardId': 1, 'BoardName': 'New board'}")
