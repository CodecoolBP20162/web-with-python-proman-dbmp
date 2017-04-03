from peewee import *
import os


class Database:
    def __init__(self):
        current_file_path = os.path.dirname(os.path.abspath(__file__))
        self.lines = self.auth_inf_split(self.get_auth_inf(current_file_path + "/db_user.txt"))
        self.db = PostgresqlDatabase(self.lines[0], self.lines[1])

    def get_auth_inf(self, filename):
        with open(filename, "r") as file:
            line = file.readline()
        # setup connection string (and deleting the enter)
        line = line[:-1]
        line = str(line)
        return line

    def auth_inf_split(self, auth_inf):
        lines = auth_inf.split(', ')
        return lines


db = Database().db


class BaseModel(Model):
    """A base model that will use our Postgresql database"""

    class Meta:
        database = db


class Board(BaseModel):
    board_name = CharField()


class Card(BaseModel):
    card_name = CharField()
    board_name = ForeignKeyField(Board, related_name="cards")
