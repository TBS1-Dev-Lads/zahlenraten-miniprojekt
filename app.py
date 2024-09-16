# app.py
from flask import Flask, send_from_directory, jsonify, session, request
import os
import random

app = Flask(__name__, static_folder='web/dist')

# Very very secret key, that never needs to change and is very safe
app.secret_key = b'sussus_amogus'


@app.route('/')
def serve_vue_app():
    new_game()
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/<path:path>')
def serve_vue_path(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})



@app.route('/game/newgame')
def new_game():
    session['number'] = random.randint(1, 100)
    print(session['number'])
    return 'ok'


@app.post('/game/guess')
def guess():
    number = request.json['numbIn']
    if 'number' in session:
        if session['number'] == number:
            return win(number)
        return lose(number)
    return 'invalid session'

# TODO work on win function
def win(number):
    new_game()
    return 'winner'

def lose(number):
    return 'lower' if session['number'] < number else 'higher'


if __name__ == '__main__':
    app.run(debug=True)