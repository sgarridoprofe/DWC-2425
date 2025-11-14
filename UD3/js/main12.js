import db  from '../json/db.json' with {type: 'json'};

/**
 * Funcion que devuelve un array con los ids de los cursos en los que
 * un alumno está matriculado
 * @param {*} db 
 * @param {*} idAlumno 
 * @returns array de ids de cursos en los que el alumno idAlumno está matriculado
 */
function devuelveCursosAlumno(db2,idAlumno){

    const enrollmentsAlumno =db.enrollments.filter(enrollment => enrollment.studentId === idAlumno);
    const cursosAlumnos=[]
    enrollmentsAlumno.forEach(enrollment => 
        cursosAlumnos.push(enrollment.courseId));
    return cursosAlumnos;
    //return enrollmentsAlumno.map(({courseId}) => courseId);
    //return enrollmentsAlumno.map(enrollment => enrollment.courseId);   

}


/**
 * Devuelve un array con la combinacion de estudiantes y cursos
 * @param {*} db base de datos con los tres atributos
 * @returns  Array con la combinacion de estudiantes y cursos
 */
function combinaEstudiantesYCursos(db) {
    return [db.students, db.courses];
}

/**
 * main12.js    
 */
(function (){
    console.log("Hola desde main12.js");
    console.log("Cargando datos desde JSON...");
    console.log(db);
    console.log("Estudiantes",db.students);
    console.log("Cursos",db.courses);
    console.log("Enrollments",db.enrollments);
    console.log("Cursos en los que está matriculado el alumno con id 4:",devuelveCursosAlumno(db,6));
})();