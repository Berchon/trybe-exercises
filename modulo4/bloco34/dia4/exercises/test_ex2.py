from ex2 import translate_to_number
import pytest


def test_abc_should_be_converted_in_2():
    "Testa se a função retorna o número certo"
    # Arrange
    expected = "222"

    # Act
    actual = translate_to_number("ABC")

    # Assert
    assert actual == expected


def test_abc_should_be_converted_in_5():
    "Testa se a função retorna o número certo"
    # Arrange
    expected = "555"

    # Act
    actual = translate_to_number("JKL")

    # Assert
    assert actual == expected


def test_dashe_zero_one_should_be_keeped():
    "Testa se a função retorn o 0, 1 ou -"
    # Arrange
    expected = "0-1"

    # Act
    actual = translate_to_number("0-1")

    # Assert
    assert actual == expected


def test_abc_should_be_converted_in_mix_numbers():
    "Testa se a função retorna o número certo ao passar letras misturadas"
    # Arrange
    expected = "87923"

    # Act
    actual = translate_to_number("TRYBE")

    # Assert
    assert actual == expected


def test_expression_should_be_at_least_one_char():
    "Testa se a função retorna erro ao passar string vazia"
    with pytest.raises(ValueError):
        translate_to_number("")


def test_expression_maximum_are_thirty_chars():
    "Testa se a função retorna erro ao passar string muito longa"
    long_expression = "1111111111" "1111111111" "1111111111" "1"  # 10 chars
    with pytest.raises(ValueError):
        translate_to_number(long_expression)


def test_expression_with_invalid_chars():
    "Testa se a função retorna erro ao passar string c/ caracteres inválidos"
    with pytest.raises(ValueError):
        translate_to_number("I-****-MY_JOB")
