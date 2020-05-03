def basic_recursion(current: int, ceiling: int) -> None:
    """ Uses recursion to print all ints on the interval [current, ceiling]

    Examples:
        (1, 1) -> stdout(1)
        (1, 5) -> stdout(1, 2, 3, 4, 5)
        (1, 0) -> stdout()
    """
    if current > ceiling:
        return
    print(current)    
    basic_recursion(current + 1, ceiling)


def fibonacci(n: int):
    """ Calculates the nth Fibonacci number

    Examples:
        1 -> 1
        2 -> 1
        6 -> 8
    """
    if n <= 2:
        return 1
    return fibonacci(n - 1) + fibonacci(n - 2)


if __name__ == '__main__':
    basic_recursion(1, 1)  # 1
    basic_recursion(1, 5)  # 1, 2, 3, 4, 5
    basic_recursion(1, 0)  # ...

    assert fibonacci(1) == fibonacci(2) == 1
    assert fibonacci(6) == 8
