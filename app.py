# app.py
from flask import Flask, send_from_directory, jsonify
import os

app = Flask(__name__, static_folder='web/dist')

@app.route('/')
def serve_vue_app():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def serve_vue_path(path):
    return send_from_directory(app.static_folder, path)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Hello from Flask!"})

if __name__ == '__main__':
    app.run(debug=True)