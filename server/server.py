from flask import Flask, jsonify
import data_utils as du

app = Flask(__name__)
bars = None  # Initialize bars to None

@app.route('/graph', methods=['GET'])
def get_graph():
    global bars
    bars = du.generate_data()  # Call generate_data only if bars is None
    return jsonify(bars)

@app.route('/merge-sort', methods=['GET'])
def merge_sort():
    global bars
    animations = []
    if bars is not None:
        animations = du.merge_sort(bars)  # Get the animations list
    return jsonify({"bars": bars, "animations": animations})  # Return both bars and animations

if __name__ == '__main__':
    app.run(debug=True)
