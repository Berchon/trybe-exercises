def find_duplicate(nums):
    if not nums:
        return False

    for index in range(1, len(nums)):
        result_search = binary_search_boolean(
            nums[index:], 0, len(nums) - 1 - index, nums[index - 1]
        )
        if result_search and nums[index - 1] >= 0:
            return nums[index - 1]

    return False


def binary_search_boolean(array, low_index, high_index, value):
    if high_index < low_index:
        return False

    middle_index = (high_index + low_index) // 2

    if array[middle_index] == value:
        return True
    elif array[middle_index] > value:
        return binary_search_boolean(array, low_index, middle_index - 1, value)
    else:
        return binary_search_boolean(
            array, middle_index + 1, high_index, value
        )
