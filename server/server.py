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
    # should never be None, but just in case
    if bars is not None:
        du.merge_sort(bars)  # sort the existing bars in-place
    return jsonify(bars)  # return the sorted bars

if __name__ == '__main__':
    app.run(debug=True)
