from flask import Flask, request, jsonify


app = Flask(__name__)

@app.route('/save_data', methods=["POST"])
def save_data():
    data = request.json
    print("Received data:", data)
    return jsonify({"status": "success", "recieved": data})


if __name__ == '__main__':
    app.run(debug=True, port=5000)