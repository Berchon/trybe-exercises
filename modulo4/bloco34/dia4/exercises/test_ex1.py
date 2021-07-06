from ex1 import list_number
import pytest


def test_list_number_throw_error_with_parameter_type_string():
    with pytest.raises(TypeError):
        list_number("a")


def test_list_number_with_parameter_less_than_1_return_empty_list():
    (
        "Testa se a função retorna uma lista vazia ao ser passado um parametro"
        " menor que 1"
    )
    # Arrange
    expected_list = []

    # Act
    actual_list = list_number(0)

    # Assert
    assert actual_list == expected_list


def test_list_number_return_list_with_2_items():
    "Testa se a função retorn uma lista numérica e suas exceções"
    # Arrange
    expected_list = [1, 2]

    # Act
    actual_list = list_number(2)

    # Assert
    assert actual_list == expected_list


def test_list_number_return_list_with_4_items():
    "Testa se a função retorn uma lista numérica e suas exceções"
    # Arrange
    expected_list = [1, 2, "Fizz", 4]

    # Act
    actual_list = list_number(4)

    # Assert
    assert actual_list == expected_list


def test_list_number_return_list_with_7_items():
    "Testa se a função retorn uma lista numérica e suas exceções"
    # Arrange
    expected_list = [1, 2, "Fizz", 4, "Buzz", "Fizz", 7]

    # Act
    actual_list = list_number(7)

    # Assert
    assert actual_list == expected_list


def test_list_number_return_list_with_16_items():
    "Testa se a função retorn uma lista numérica e suas exceções"
    # Arrange
    expected_list = [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
        16,
    ]

    # Act
    actual_list = list_number(16)

    # Assert
    assert actual_list == expected_list
