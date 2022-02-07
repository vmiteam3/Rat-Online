from flask import Flask, jsonify, request
from replit import db

db['test'] = 'test123'
print(db.prefix('test'))

app = Flask('app')

@app.route('/')
def home():
  return jsonify('Welcome to ratonline backend')






#@app.route('/question', methods=["GET"])
#def get_question():
  #return jsonify(get_question)

app.run(host='0.0.0.0', port=8080, debug = True)