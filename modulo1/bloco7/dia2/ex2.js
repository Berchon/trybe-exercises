const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

// ex 1
console.log('==============================\n         Exercício1\n==============================')
const addProperty = (obj, key, value) => obj[key] = value;
addProperty(lesson2, 'turno', 'manhã');
console.log(lesson2);

// ex2
console.log('==============================\n         Exercício2\n==============================')
const listKeys = (obj) => Object.keys(obj);
console.log(listKeys(lesson3));

// ex3
console.log('==============================\n         Exercício3\n==============================')
const sizeObject = (obj) => listKeys(obj).length;
console.log(sizeObject(lesson1));

// ex4
console.log('==============================\n         Exercício4\n==============================')
const listValues = (obj) => Object.values(obj);
console.log(listValues(lesson3));

// ex5
console.log('==============================\n         Exercício5\n==============================')
const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// ex6
console.log('==============================\n         Exercício6\n==============================')

const sumStudents = (obj) => {
    //lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
    let sum = 0;
    for (key in obj) {
        sum += obj[key].numeroEstudantes;
    }
    return(sum);
}
console.log(sumStudents(allLessons));

// ex7
console.log('==============================\n         Exercício7\n==============================')
const getValueByNumber = (obj, position) => Object.values(obj)[position]
console.log(getValueByNumber(lesson1, 0));

// ex8
console.log('==============================\n         Exercício8\n==============================')
const verifyPair = (obj, key, value) => (obj[key] == value) ? "true" : "false"
console.log(verifyPair(lesson3, 'turno', 'noite'));
console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));

// ex bônus1
console.log('==============================\n      Exercício Bônus1\n==============================')
const sumMath = (obj) => {
    //lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
    let sum = 0;
    for (key in obj) {
        if (obj[key].materia === 'Matemática') {
            sum += obj[key].numeroEstudantes;
        }
    }
    return(sum);
}
console.log(sumMath(allLessons));

// ex bônus2
console.log('==============================\n      Exercício Bônus2\n==============================')
const createReport = (obj, teacher) => {
    //lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes;
    let sum = 0;
    for (key in obj) {
        if (obj[key].professor === teacher) {
            sum += obj[key].numeroEstudantes;
        }
    }
    return(sum);
}
console.log(createReport(allLessons, 'Maria Clara'));