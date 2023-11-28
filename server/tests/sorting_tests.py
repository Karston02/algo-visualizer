import unittest
import random
import sys
sys.path.insert(1, '../')
import data_utils as du

class TestSortingFunctions(unittest.TestCase):

    def setUp(self):
        # create a common list for all tests (so random doesn't change it)
        # only use 15 so that the tests don't take too long
        self.my_list = [random.randint(5, 550) for _ in range(15)]

    ################################################
    # only check the [-1] b/c it's the last "step" #
    ################################################
    def test_insertion_sort(self):
        sorted_list, _ = du.insertion_sort(self.my_list.copy())
        self.assertEqual(sorted_list[-1], sorted(self.my_list))

    def test_bubble_sort(self):
        sorted_list, _ = du.bubble_sort(self.my_list.copy())
        self.assertEqual(sorted_list[-1], sorted(self.my_list))

    def test_selection_sort(self):
        sorted_list, _ = du.selection_sort(self.my_list.copy())
        self.assertEqual(sorted_list[-1], sorted(self.my_list))

    def test_empty_list(self):
        # test if functions handle an empty list
        empty_list = []
        insertion_final_result, _ = du.insertion_sort(empty_list)
        self.assertEqual(insertion_final_result[-1], [])
        bubble_final_result, _ = du.bubble_sort(empty_list)
        self.assertEqual(bubble_final_result[-1], [])
        selection_final_result, _ = du.selection_sort(empty_list)
        self.assertEqual(selection_final_result[-1], [])

    def test_already_sorted_list(self):
        # test if functions handle a list that is already sorted
        sorted_list = sorted(self.my_list)
        insertion_final_result, _ = du.insertion_sort(sorted_list)
        self.assertEqual(insertion_final_result[-1], sorted_list)
        bubble_final_result, _ = du.bubble_sort(sorted_list)
        self.assertEqual(bubble_final_result[-1], sorted_list)
        selection_final_result, _ = du.selection_sort(sorted_list)
        self.assertEqual(selection_final_result[-1], sorted_list)

    def test_merge_sort(self):
        sorted_list, _ = du.merge_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_quick_sort(self):
        sorted_list = du.quick_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

if __name__ == '__main__':
    unittest.main()
