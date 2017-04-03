from peewee import *
import datetime



db = PostgresqlDatabase('bence', 'bence')


class Entry(Model):
    id = PrimaryKeyField()
    date = DateTimeField (default = datetime.datetime.now)
    text = TextField()

    class Meta:
        database = db


def initilaze_db():
    db.connect()
    db.create_tables([Entry], safe = True)