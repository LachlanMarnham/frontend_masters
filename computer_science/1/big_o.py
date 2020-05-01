from typing import List, Tuple


def cross_add(input_vals: List[int]) -> List[int]:
    """ Traverses <input_vals> from both directions, adding the ith element to the (n-i)th, and storing
    the result in the ith element of <result>.
    
        Examples:
            [1, 2, 3] -> [4, 4, 4] 
            [3, 4, 7, 13] -> [16, 11, 11, 16]
        
        Complexity: O(n)
    """
    result = []

    for i in range(len(input_vals)):
        new_result = input_vals[i] + input_vals[-i - 1]
        result.append(new_result)
    
    return result


def find(needle: int, haystack: List[int]) -> bool:
    """ `in` alias, returns True if needle is an element of haystack, otherwise returns False.
    
        Examples:
            (1, [1, 2, 3]) -> True
            (4, [5, 6, 7]) -> False
        
        Complexity: O(n)
    """
    for item in haystack:
        if item == needle:
            return True
    
    return False


def make_tuples(input_vals: Tuple[int]) -> List[Tuple[int, int]]:
    """ Computes the Cartesian product of Input_vals with itself

        Example:
            (1, 2) -> [(1, 1), (1, 2), (2, 1), (2, 2)]
        
        Complexity: O(n^2)
    """
    result = []

    for first_element in input_vals:
        for second_element in input_vals:
            new_tuple = (first_element, second_element)
            result.append(new_tuple)
    
    return result


if __name__ == '__main__':
    assert cross_add([1, 2, 3]) == [4, 4 ,4]
    assert cross_add([3, 4, 7, 13]) == [16, 11, 11, 16]
    
    assert find(1, [1, 2, 3])
    assert not find(4, [5, 6, 7])

    assert make_tuples((1, 2)) == [(1, 1), (1, 2), (2, 1), (2, 2)]
