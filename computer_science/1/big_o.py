from typing import List


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


if __name__ == '__main__':
    assert cross_add([1, 2, 3]) == [4, 4 ,4]
    assert cross_add([3, 4, 7, 13]) == [16, 11, 11, 16]
