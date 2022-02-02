// Nondon daily 14 ta subject "X" hour a porle proti ta subject porte kot minutes lagbe?

function readSubject(studyInMinutes){
   console.log('totally study korte hobe ' , studyInMinutes, 'minutes');
    var perSubStudy = studyInMinutes/14;
    return perSubStudy;
}
var studyInHour = 8;
var studyInMinutes = studyInHour*60;
var perSubjectInMinutes = readSubject(studyInMinutes);
console.log( 'proti ta subject a lagbe ', perSubjectInMinutes , 'minutes');