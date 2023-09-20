from flask import Flask, jsonify

# Create a Flask web application instance
app = Flask(__name__)

# Sample JSON data for testing
data = [
    {"id": 1, "name": "John", "age": 30},
]

# Define a route for '/api/members'
@app.route('/api/members')
def get_members():

    # Return the randomly selected member as JSON response
    return jsonify(data[0])

# Start the Flask application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
