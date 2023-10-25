import random
def generate_data():
    """Creates a list with 500 elements of a random value (5-750)"""
    my_list = []
    for _ in range(175):
        my_list.append(random.randint(5, 550))
    return my_list

def merge_sort(list, animations=None):
    """Sorts a list using the merge sort algorithm. This algorithm is recursive and splits
    the list into two halves until each list has a single element. Then, the algorithm
    compares the two lists and merges them into a single list in sorted order. It is commonly 
    referred to as a divide and conquer algorithm."""
    if animations is None:
        animations = []  # Create an empty list to store the animations

    if len(list) > 1:
        left_list = list[:len(list)//2]
        right_list = list[len(list)//2:]

        # Recursive call on these. It will call until the list has len 1.
        merge_sort(left_list, animations)
        merge_sort(right_list, animations)

        i = 0  # Left index
        j = 0  # Right index
        k = 0  # Merged index

        while i < len(left_list) and j < len(right_list):
            if left_list[i] < right_list[j]:
                # If the leftmost element in the left list is smaller, add it to the merged list.
                list[k] = left_list[i]
                i += 1
            else:
                # If the leftmost element in the right list is smaller, add it to the merged list.
                list[k] = right_list[j]
                j += 1

            # Append the indices of the two elements being compared at this step.
            animations.append((i, j))

            k += 1

        # If the left list has elements left.
        while i < len(left_list):
            list[k] = left_list[i]
            i += 1
            k += 1

            # Append the index for the left list element.
            animations.append((i, i))

        # If the right list has elements left.
        while j < len(right_list):
            list[k] = right_list[j]
            j += 1
            k += 1

            # Append the index for the right list element.
            animations.append((j, j))

    return list, animations  # Return the list of animations

print(merge_sort([10, 19, 14, 5, 8]))