# app.py
import datetime
import random
import string
from flask import Flask, send_from_directory, jsonify
import os

sessions = {
    "res":int,
    "lastChanged": datetime.time,
    "tries": int,
}

app = Flask(__name__, static_folder='web/dist')

@app.route('/')
def serve_vue_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_vue_path(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/game/start', methods=['GET'])
def start_game():
    # generate sessionid
    session_id = ''.join(random.choices(string.ascii_letters + string.digits, k=16))

    # generate number
    random_number = random.randint(1, 100)
    
    # create the users session
    sessions[session_id] = {
        "res": random_number,
        "lastChanged": datetime.time.now,
        "tries": 0,
    }
    
    return jsonify({"status": "ok", "session": session_id})

if __name__ == '__main__':
    app.run(debug=True)