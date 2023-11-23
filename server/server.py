from flask import Flask, jsonify
import data_utils as du

app = Flask(__name__)
bars = None  # Initialize bars to None

# This route is used to get the data for the graph
@app.route('/graph', methods=['GET'])
def get_graph():
    global bars
    bars = du.generate_data()
    return jsonify(bars)


@app.route('/merge-sort', methods=['GET'])
def merge_sort():
    global bars
    if bars is not None:
        steps = du.merge_sort(bars)
    return jsonify({"bars": bars, "steps": steps})


@app.route('/bubble-sort', methods=['GET'])
def bubble_sort():
    global bars
    if bars is not None:
        steps, animations = du.bubble_sort(bars)
    return jsonify({"steps": steps, "animations": animations})


@app.route('/selection-sort', methods=['GET'])
def selection_sort():
    global bars
    if bars is not None:
        steps, animations = du.selection_sort(bars)
    return jsonify({"steps": steps, "animations": animations})

@app.route('/insertion-sort', methods=['GET'])
def insertion_sort():
    global bars
    if bars is not None:
        steps, animations = du.insertion_sort(bars)
    return jsonify({"steps": steps, "animations": animations})

@app.route('/quick-sort', methods=['GET'])
def quick_sort():
    global bars
    if bars is not None:
        steps, animations = du.quick_sort(bars)
    return jsonify({"steps": steps, "animations": animations})
if __name__ == '__main__':
    app.run(debug=True)
