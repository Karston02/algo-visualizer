import random
def generate_data():
    """Creates a list with 500 elements of a random value (5-750)"""
    my_list = []
    for _ in range(175):
        my_list.append(random.randint(5, 550))
    return my_list
