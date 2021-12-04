
console.log("start");

function loginUser (email, password, callback){
    setTimeout ( () => {
        callback  ({ email });
    },3000);  
}
function getUserCourses (email, callback){
    setTimeout ( () => {
        callback  (["course 1", "course 2", "course 3"]);
    },2000);  
}
function getCourseDetail (id, callback){
    setTimeout ( () => {
        callback  ("course title is js");
    },2000);  
}
const user = loginUser("gomnam@yahoo.com", 1234, (user)=>{
    console.log(user);
    getUserCourses (user.email, (courses) => {
        console.log(courses);
        getCourseDetail (courses[0], (title) => {
            console.log(title);
        });    
    });
});
console.log("end");
// start
// end
// {email: 'gomnam@yahoo.com'}
// (3) ['course 1', 'course 2', 'course 3']
// course title is js


// callback hell