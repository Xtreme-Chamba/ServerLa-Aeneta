from sqlalchemy import create_engine, MetaData

engine = create_engine("aeneta://root:1234@localhost:3306/storedb")

meta = MetaData()

conn = engine.connect()