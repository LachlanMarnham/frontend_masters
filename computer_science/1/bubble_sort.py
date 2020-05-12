from typing import List


def bubble_sort(l: List[int]) -> List[int]:
    """ An implementation of bubble sort

    Examples:
        bubble_sort(list_1) -> [1, 2, 3, 5, 9, 9]
        bubble_sort(list_2) -> [-1, 0, 3, 4, 5]
        bubble_sort(list_3) -> [5, 5, 5, 5, 5, 5]

    Complexity:
        O(n^2)
    """
    l = l.copy()
    swapped = True

    while swapped:
        swapped = False
        for i in range(1, len(l)):
            if l[i] < l[i - 1]:
                l[i], l[i - 1] = l[i - 1], l[i]
                swapped = True
    return l


def bubble_sort_2(l: List[int]) -> List[int]:
    """ A (slightly better) implementation of bubble sort

    Examples:
        bubble_sort(list_1) -> [1, 2, 3, 5, 9, 9]
        bubble_sort(list_2) -> [-1, 0, 3, 4, 5]
        bubble_sort(list_3) -> [5, 5, 5, 5, 5, 5]

    Complexity:
        O(n^2)
    """
    n = len(l)
    l = l.copy()

    for i in range(n - 1):
        for j in range(n - i - 1):
            if l[j] > l[j + 1]:
                l[j], l[j + 1] = l[j + 1], l[j]

    return l



if __name__ == '__main__':
    list_1 = [3, 2, 5, 1, 9, 9]
    assert bubble_sort(list_1) == [1, 2, 3, 5, 9, 9], list_1

    list_2 = [5, 4, 3, 0, -1]
    assert bubble_sort(list_2) == [-1, 0, 3, 4, 5], list_2

    list_3 = [5, 5, 5, 5, 5, 5]
    assert bubble_sort(list_3) == [5, 5, 5, 5, 5, 5], list_3
