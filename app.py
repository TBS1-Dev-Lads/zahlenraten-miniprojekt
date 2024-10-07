# app.py
import datetime
import random
import string
from dotenv import load_dotenv
from flask import Flask, request, send_from_directory, jsonify
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

@app.route('/')
def serve_vue_app():
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

if __name__ == '__main__':
    app.run(debug=True)