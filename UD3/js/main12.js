import db  from '../json/db.json' with {type: 'json'};


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
    
})();