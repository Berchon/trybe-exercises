def is_anagram(first_string, second_string):
    len_first_string = len(first_string)
    len_second_string = len(second_string)
    if (
        len_first_string == 0
        or len_second_string == 0
        or len_first_string != len_second_string
    ):
        return False

    ordened_first_string = quicksort(
        list(first_string), 0, len_first_string - 1
    )
    ordened_second_string = quicksort(
        list(second_string), 0, len_second_string - 1
    )
    for index in range(len_first_string):
        if ordened_first_string[index] != ordened_second_string[index]:
            return False

    return True


def quicksort(array, low, high):
    if len(array) == 1:
        return array

    if low < high:
        partition_index = partition(array, low, high)

        quicksort(array, low, partition_index - 1)
        quicksort(array, partition_index + 1, high)

    return array


def partition(array, low, high):
    i = low - 1
    pivot = array[high]

    for j in range(low, high):

        if array[j] <= pivot:

            i += 1
            array[i], array[j] = array[j], array[i]
    array[i + 1], array[high] = array[high], array[i + 1]

    return i + 1
