from flask import Flask, jsonify
import data_utils as du

# Create a Flask web application instance.
app = Flask(__name__)


# Define a route for '/'
@app.route('/graph')
def get_graph():
    # this will generate each page reload
    my_list = du.generate_data()
    # return generated list as json
    return jsonify(my_list)

# Start the Flask application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
