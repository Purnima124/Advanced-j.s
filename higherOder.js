const interviewQuestions=(name)=>{
    if (name==="vinod"){
        return function(topic){
            console.log(`Hii ${name}.what is ${topic}.plz explain us`);

        }
    }if(name=="thapa"){
        return function (topic){
            console.log(`Hii ${name}.what is ${topic}.plz explain us`);

        }
    }if(name=="Technical"){
        return function (topic){
            console.log(`Hii ${name}.what is ${topic}.plz explain us`);
        }
    }else{
        return function(){
            console.log("Welcome to your interview")
        }
    }
}
// interviewQuestions("vinod")("UI")
// interviewQuestions("thapa")("full stack Developer")
// interviewQuestions("Technical")("Fron End Developer")
const cand1=interviewQuestions("vinod");
cand1("UI");
cand1("Ux");
cand1("javascript")
