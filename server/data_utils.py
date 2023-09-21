import random
def generate_data():
    """Creates a list with 500 elements of a random value (5-750)"""
    my_list = []
    for _ in range(175):
        my_list.append(random.randint(5, 550))
    return my_list

def merge_sort(list):
    """Sorts a list using the merge sort algorithm. This algorithm is recursive and splits
    the list into two halves until each list has a single element. Then, the algorithm
    compares the two lists and merges them into a single list in sorted order. It is commonly 
    referred to as a divide and conquer algorithm."""
    if len(list) > 1:
        left_list = list[:len(list)//2]
        right_list = list[len(list)//2:]
        # recursive call on these. it will call until the list has len 1
        merge_sort(left_list)
        merge_sort(right_list)

        # merge step
        i = 0 # left index
        j = 0 # right index
        k = 0 # merged index
        while i < len(left_list) and j < len(right_list):
            if left_list[i] < right_list[j]: # if leftmost in left list is smaller, add it to merged list.
                list[k] = left_list[i]
                i += 1 # move left index up
            else: # if leftmost in right list is smaller, add it to merged list.
                list[k] = right_list[j]
                j += 1 # move right index up
            k += 1 # move merged index up
        
        # if left list has elements left
        while i < len(left_list):
            list[k] = left_list[i]
            i += 1
            k += 1
        
        # if right list has elements left
        while j < len(right_list):
            list[k] = right_list[j]
            j += 1
            k += 1
    