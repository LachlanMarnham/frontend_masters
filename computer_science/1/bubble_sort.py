def bubble_sort(l: list):
    swapped = True

    while swapped:
        swapped = False
        for i in range(1, len(l)):
            if l[i] < l[i - 1]:
                l[i], l[i - 1] = l[i - 1], l[i]
                swapped = True


if __name__ == '__main__':
    list_1 = [3, 2, 5, 1, 9, 9]
    bubble_sort(list_1)
    assert list_1 == [1, 2, 3, 5, 9, 9]

    list_2 = [5, 4, 3, 0, -1]
    bubble_sort(list_2)
    assert list_2 == [-1, 0, 3, 4, 5]

    list_3 = [5, 5, 5, 5, 5, 5]
    bubble_sort(list_3)
    assert list_3 == [5, 5, 5, 5, 5, 5]
