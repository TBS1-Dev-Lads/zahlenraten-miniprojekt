# app.py
import datetime
import random
import string
from dotenv import load_dotenv
from flask import Flask, send_from_directory, jsonify, session, request
import os

sessions = {
    "res":int,
    "lastChanged": datetime.time,
    "tries": int,
    "points": int,
}

print("load environment")
load_dotenv()

print("create flask application")
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

@app.route('/api/game/getProgress', methods=['GET'])
def start_game():
    session_id = request.args.get('session')
    
    if session_id in sessions:
        return jsonify({"points": sessions[session_id]["points"]}), 200
    else:
        return jsonify({"message":"a session with the given id: "+session_id+" was not found"}), 404

@app.route('/api/game/start', methods=['GET'])
def start_game():
    print("client requesting game start")
    # generate sessionid
    session_id = ''.join(random.choices(string.ascii_letters + string.digits, k=16))

    # generate number
    random_number = random.randint(1, 100)
    
    attemps = 0
    while session_id in sessions:
        if attemps > 5:
            return jsonify({"message": "failed to generate session id"}), 500
        
        session_id = ''.join(random.choices(string.ascii_letters + string.digits, k=16))
        attemps=+1
    
    # create the users session
    sessions[session_id] = {
        "res": random_number,
        "lastChanged": datetime.time.now,
        "tries": 0,
        "points": 0,
    }
    
    # if there is no session_id generated return error
    if session_id == "":
        return jsonify({"message": "no session id found"}), 404
    
    return jsonify({"session": session_id}), 200



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