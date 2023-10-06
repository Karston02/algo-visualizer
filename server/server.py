from flask import Flask, jsonify
import data_utils as du

app = Flask(__name__)

@app.route('/graph', methods=['GET'])
def get_graph():
    bars = du.generate_data()
    return jsonify(bars)

@app.route('/merge-sort', methods=['GET'])
def merge_sort():
    bars = du.generate_data()  # Get the same array as in get_graph
    du.merge_sort(bars)  # Sort the bars in-place using merge_sort from data_utils
    return jsonify(bars)

if __name__ == '__main__':
    app.run(debug=True)
