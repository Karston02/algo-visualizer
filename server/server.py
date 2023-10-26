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
    if bars is not None:
        steps = du.merge_sort(bars)  # Get the animations list
    return jsonify({"bars": bars, "steps": steps})  # Return both bars and animations

@app.route('/bubble-sort', methods=['GET'])
def bubble_sort():
    global bars
    if bars is not None:
        steps = du.bubble_sort(bars)
    return jsonify(steps)
if __name__ == '__main__':
    app.run(debug=True)
