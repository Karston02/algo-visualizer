import random

NUM_BARS = 75
BAR_MIN_HEIGHT = 5
BAR_MAX_HEIGHT = 550


def generate_data():
    """Creates a my_list with 500 elements of a random value (5-750)"""
    my_my_list = []
    for _ in range(NUM_BARS):
        my_my_list.append(random.randint(BAR_MIN_HEIGHT, BAR_MAX_HEIGHT))
    return my_my_list

# video example: https://www.youtube.com/watch?v=cVZMah9kEjI
def merge_sort(my_list, steps=[]):
    """Sorts a my_list using the merge sort algorithm. This algorithm is recursive and splits
    the my_list into two halves until each my_list has a single element. Then, the algorithm
    compares the two my_lists and merges them into a single my_list in sorted order. It is commonly 
    referred to as a divide and conquer algorithm.

    Time complexity: O(nlogn)
    Space complexity: O(n)
    """
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

# video example: https://www.youtube.com/watch?v=g_xesqdQqvA
def bubble_sort(my_list, steps=None, animate=None):
    """Sorts a my_list using the bubble sort algorithm. This algorithm compares two adjacent elements
    and swaps them if they are not in order. It will continue to iterate through the my_list until
    no swaps are made.

    Time complexity: O(n^2)
    Space complexity: O(1)
    """
    # on first run, initialize steps to copy list
    if steps is None:
        steps = [my_list.copy()]

    # on first run, initialize animate[0] to be negative numbers.
    if animate is None:
        animate = [(-1, -1)]
    # set swapped to True to guarantee the loop runs once
    swapped = True
    while swapped:
        swapped = False
        for i in range(len(my_list) - 1):
            # if the current element is greater than the next element, swap them
            if my_list[i] > my_list[i + 1]:
                # simple swap
                my_list[i], my_list[i + 1] = my_list[i + 1], my_list[i]
                swapped = True
                # append a copy of the current list to steps after swap
                steps.append(my_list.copy())
                # append the indices of the two elements that were swapped to animate
                animate.append((i, i + 1))
    return steps, animate

# video example: https://www.youtube.com/watch?v=4CykZVqBuCw
def selection_sort(my_list, selection_steps=None, selection_animate=None):
    """Sorts a my_list using the selection sort algorithm. This algorithm finds the smallest element
    in the my_list and swaps it with the element in the first position. Then, it finds the second smallest
    element and swaps it with the element in the second position. It continues to do this until the list is sorted.

    Time complexity: O(n^2)
    Space complexity: O(1)
    """
    # on first run, initialize steps to copy list
    if selection_steps is None:
        selection_steps = [my_list.copy()]

    # on first run, initialize animate[0] to be negative numbers.
    if selection_animate is None:
        selection_animate = [(-1, -1)]

    # loop through the list
    for i in range(len(my_list)):
        # set the current index as the smallest value
        smallest_value_index = i
        # loop through the rest of the list
        for j in range(i + 1, len(my_list)):
            # if the current element is smaller than the smallest value, set the current element as the smallest value
            if my_list[j] < my_list[smallest_value_index]:
                smallest_value_index = j
        # swap the smallest value with the first element
        my_list[i], my_list[smallest_value_index] = my_list[smallest_value_index], my_list[i]
        # append a copy of the current list to steps after swap
        selection_steps.append(my_list.copy())
        # append the indices of the two elements that were swapped to animate
        selection_animate.append((i, smallest_value_index))

    return selection_steps, selection_animate

# video example: https://www.youtube.com/watch?v=JU767SDMDvA
def insertion_sort(my_list, steps=None, animate=None):
    """Sorts a my_list using the insertion sort algorithm. This algorithm iterates through the my_list
    and compares each element to the elements before it. If the element is smaller than the elements before it,
    it is moved to the correct position.

    Time complexity: O(n^2)
    Space complexity: O(1)
    """
    # on first run, initialize steps to copy list
    if steps is None:
        steps = [my_list.copy()]

    # on first run, initialize animate[0] to be negative numbers.
    if animate is None:
        animate = [(-1, -1)]

    # loop through the list
    for i in range(1, len(my_list)):
        # set the current element as the key
        key = my_list[i]
        # set the current index as the index of the element before the key
        j = i - 1
        # while the index is greater than or equal to 0 and the element before the key is greater than the key
        while j >= 0 and key < my_list[j]:
            # move the element before the key to the right
            my_list[j + 1] = my_list[j]
            # decrement the index
            j -= 1
        # set the key to the correct position
        my_list[j + 1] = key
        # append a copy of the current list to steps after swap
        steps.append(my_list.copy())
        # append the indices of the two elements that were swapped to animate
        animate.append((j + 1, i))

    return steps, animate

# video example: 
def quick_sort(my_list, steps=None, animate=None):
    """Sorts a my_list using the quick sort algorithm. This algorithm picks a pivot and partitions the my_list
    into two halves. All elements less than the pivot are moved to the left of the pivot and all elements greater
    than the pivot are moved to the right of the pivot. This process is repeated until the my_list is sorted.

    Time complexity: 
    O(nlogn) <-- average/best case
    O(n^2) <-- worst case
    Space complexity: O(n)
    """
    # on first run, initialize steps to copy list
    if steps is None:
        steps = [my_list.copy()]

    # on first run, initialize animate[0] to be negative numbers.
    if animate is None:
        animate = [(-1, -1)]

    # if the length of the list is greater than 1
    if len(my_list) > 1:
        # set the pivot to the last element in the list
        pivot = my_list[-1]
        # set the left index to 0
        left_index = 0
        # set the right index to the element before the pivot
        right_index = len(my_list) - 2
        # while the left index is less than or equal to the right index
        while left_index <= right_index:
            # if the element at the left index is greater than the pivot and the element at the right index is less than the pivot
            if my_list[left_index] > pivot and my_list[right_index] < pivot:
                # swap the elements at the left and right indices
                my_list[left_index], my_list[right_index] = my_list[right_index], my_list[left_index]
                # increment the left index
                left_index += 1
                # decrement the right index
                right_index -= 1
            # if the element at the left index is less than or equal to the pivot
            elif my_list[left_index] <= pivot:
                # increment the left index
                left_index += 1
            # if the element at the right index is greater than or equal to the pivot
            elif my_list[right_index] >= pivot:
                # decrement the right index
                right_index -= 1
        # swap the pivot with the element at the left index
        my_list[left_index], my_list[-1] = my_list[-1], my_list[left_index]
        # append a copy of the current list to steps after swap
        steps.append(my_list.copy())
        # append the indices of the two elements that were swapped to animate
        animate.append((left_index, len(my_list) - 1))
        # recursively call quick sort on the left and right halves
        quick_sort(my_list[:left_index], steps, animate)
        quick_sort(my_list[left_index + 1:], steps, animate)
    return steps, animate

# testing return in console
my_list = generate_data()
my_steps, my_animation = (quick_sort(my_list))
print(my_steps + my_animation)
