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



# Game routes
# Start a new game, by generating new number
@app.route('/game/newgame')
def new_game():
    session['number'] = random.randint(1, 100)
    print(session['number'])
    return 'ok'

# Player makes a guess and the number is checked
@app.post('/game/guess')
def guess():
    number = request.json['numbIn']
    if 'number' in session:
        return check_number(number)
    return 'invalid session'

# Check if the number is right
def check_number(number):
    if number == session['number']:
        return win(number)
    return lose(number)


def invalidate_session():
    session.pop('number')

# TODO work on win/lose functions
def win(number):
    invalidate_session()
    return 'winner'

def lose(number):
    return 'lower' if session['number'] < number else 'higher'


if __name__ == '__main__':
    app.run(debug=True)