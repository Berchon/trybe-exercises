def max_time_ok(values):
    max_time = 0
    current_time = 0
    for value in values:
        if value == 1:
            current_time += 1
        else:
            current_time = 0
        if current_time >= max_time:
            max_time = current_time
    return max_time


colected_values = [0, 1, 1, 1, 0, 0, 1, 1]
print(max_time_ok(colected_values))
