def students_in_library(inputs, outputs, query_number):
    answer = 0
    for input, output in zip(inputs, outputs):
        if input < query_number < output:
            answer += 1
    return answer


list_in = [1, 2, 3]
list_out = [3, 2, 7]
query = 4

print(students_in_library(list_in, list_out, query))
