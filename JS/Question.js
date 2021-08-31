 var Question =function (QuestionObj) {
     this.value= {
         text:"Question",
         
     }

     this.selectodAnswer =null;
     this.html= null;
     this.questionText =null;
     this.questionFeedback =null;


     this.value =Object.assign (this.value , QuestionObj);


     this.create =function () {

        this.html =Document.createdElement ('div');
        this.html.classList.add('question');


        this.questionText =document.createElement ('h2');
        this.questionText.textContent =this.value.text;


        this.questionFeedback= document.createdElement('div');
        this.questionFeedback.classList.add ('question-feedback');



        this.html.appenChild (this.questionText);
        this.html.appenChild(this.questionFeedback);
     }
 }