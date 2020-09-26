function fatorial (N) {
    return ((N > 1)?(N * fatorial(N - 1)):(1));
}

console.log(fatorial(5));