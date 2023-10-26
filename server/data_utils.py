import random
def generate_data():
    """Creates a my_list with 500 elements of a random value (5-750)"""
    my_my_list = []
    for _ in range(175):
        my_my_list.append(random.randint(5, 550))
    return my_my_list

def merge_sort(my_list, steps=[]):
    """Sorts a my_list using the merge sort algorithm. This algorithm is recursive and splits
    the my_list into two halves until each my_list has a single element. Then, the algorithm
    compares the two my_lists and merges them into a single my_list in sorted order. It is commonly 
    referred to as a divide and conquer algorithm."""
    if len(my_list) > 1:
        left_list = my_list[:len(my_list)//2]
        right_list = my_list[len(my_list)//2:]

        # Recursive call on these. It will call until the my_list has len 1.
        merge_sort(left_list)
        merge_sort(right_list)

        i = 0  # Left index
        j = 0  # Right index
        k = 0  # Merged index

        while i < len(left_list) and j < len(right_list):
            if left_list[i] < right_list[j]:
                # If the leftmost element in the left my_list is smaller, add it to the merged my_list.
                my_list[k] = left_list[i]
                i += 1
            else:
                # If the leftmost element in the right my_list is smaller, add it to the merged my_list.
                my_list[k] = right_list[j]
                j += 1

            # Append the indices of the two elements being compared at this step.
            k += 1
        steps.append(my_list.copy())

        # If the left my_list has elements left.
        while i < len(left_list):
            my_list[k] = left_list[i]
            i += 1
            k += 1
            steps.append(my_list.copy())

            # Append the index for the left my_list element.

        # If the right my_list has elements left.
        while j < len(right_list):
            my_list[k] = right_list[j]
            j += 1
            k += 1
            steps.append(my_list.copy())
    return my_list, steps  # Return the my_list of steps

def bubble_sort(my_list, steps=None):
    """Sorts a my_list using the bubble sort algorithm. This algorithm compares two adjacent elements
    and swaps them if they are not in order. It will continue to iterate through the my_list until
    no swaps are made."""
    if steps is None:
        steps = [my_list.copy()]
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(my_list) - 1):
            if my_list[i] > my_list[i + 1]:
                # Swap the elements
                my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]
                swapped = True
                steps.append(my_list.copy())
    return steps


my_list, my_steps = (merge_sort(generate_data()))
print(my_steps)

print("BUBBLE SORT START")
my_steps = (bubble_sort(generate_data()))
print(my_steps)