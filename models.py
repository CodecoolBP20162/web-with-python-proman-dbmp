from peewee import *
import datetime


db = PostgresqlDatabase('bence','bence')

class Entry(Model):

    id = PrimaryKeyField()
    date = DateTimeField (default = datetime.datetime.now)
    text = TextField()

    class Meta:
        database = db


def initialize_db():
    db.connect()
    db.create_tables([Entry], safe = True)


def if_exists():
    i = Entry.select().where(Entry.id == 1)
    if i.exists():
        pass
    else:
        initialize_db()
