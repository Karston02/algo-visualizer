import unittest
import random
import sys
sys.path.insert(1, '../')
import data_utils as du

class TestSortingFunctions(unittest.TestCase):

    def setUp(self):
        # create a common list for all tests (so random doesn't change it)
        self.my_list = [random.randint(5, 550) for _ in range(75)]

    def test_merge_sort(self):
        sorted_list, _ = du.merge_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_quick_sort(self):
        sorted_list, _ = du.quick_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_insertion_sort(self):
        sorted_list, _ = du.insertion_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_bubble_sort(self):
        sorted_list, _ = du.bubble_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_selection_sort(self):
        sorted_list, _ = du.selection_sort(self.my_list.copy())
        self.assertEqual(sorted_list, sorted(self.my_list))

    def test_empty_list(self):
        # test if functions handle an empty list
        self.assertEqual(du.merge_sort([])[0], [])
        self.assertEqual(du.quick_sort([])[0], [])
        self.assertEqual(du.insertion_sort([])[0], [])
        self.assertEqual(du.bubble_sort([])[0], [])
        self.assertEqual(du.selection_sort([])[0], [])

    def test_already_sorted_list(self):
        # test if functions handle a list that is already sorted
        sorted_list = sorted(self.my_list)
        self.assertEqual(du.merge_sort(sorted_list.copy())[0], sorted_list)
        self.assertEqual(du.quick_sort(sorted_list.copy())[0], sorted_list)
        self.assertEqual(du.insertion_sort(sorted_list.copy())[0], sorted_list)
        self.assertEqual(du.bubble_sort(sorted_list.copy())[0], sorted_list)
        self.assertEqual(du.selection_sort(sorted_list.copy())[0], sorted_list)

    def test_reverse_sorted_list(self):
        # test if functions handle a list sorted in reverse order (for future implementations)
        reversed_list = sorted(self.my_list, reverse=True)
        self.assertEqual(du.merge_sort(reversed_list.copy())[0], sorted(self.my_list))
        self.assertEqual(du.quick_sort(reversed_list.copy())[0], sorted(self.my_list))
        self.assertEqual(du.insertion_sort(reversed_list.copy())[0], sorted(self.my_list))
        self.assertEqual(du.bubble_sort(reversed_list.copy())[0], sorted(self.my_list))
        self.assertEqual(du.selection_sort(reversed_list.copy())[0], sorted(self.my_list))

    def test_single_element_list(self):
        # test if functions work with a list containing a single element
        single_element_list = [42]
        self.assertEqual(du.merge_sort(single_element_list.copy())[0], single_element_list)
        self.assertEqual(du.quick_sort(single_element_list.copy())[0], single_element_list)
        self.assertEqual(du.insertion_sort(single_element_list.copy())[0], single_element_list)
        self.assertEqual(du.bubble_sort(single_element_list.copy())[0], single_element_list)
        self.assertEqual(du.selection_sort(single_element_list.copy())[0], single_element_list)

    def test_large_list(self):
        # test if functions work with a large list
        large_list = [random.randint(5, 550) for _ in range(1000)]
        self.assertEqual(du.merge_sort(large_list.copy())[0], sorted(large_list))
        self.assertEqual(du.quick_sort(large_list.copy())[0], sorted(large_list))
        self.assertEqual(du.insertion_sort(large_list.copy())[0], sorted(large_list))
        self.assertEqual(du.bubble_sort(large_list.copy())[0], sorted(large_list))
        self.assertEqual(du.selection_sort(large_list.copy())[0], sorted(large_list))

if __name__ == '__main__':
    unittest.main()
