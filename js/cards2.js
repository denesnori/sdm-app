$(document).ready(function(){
    var source   = $("#template-hbs").html();

    // compile template:
    var template = Handlebars.compile(source);

    // apply template:
    var html = template({
        treatments: {
          practical_support:{
            name: "Practical Support",
            icon: "./img/practical_support4.jpg"
          },
          talking_therapy:{
            name: "Talking Therapy",
            icon:"./img/talking_therapy2.png"
          },
          medication:{
            name: "Medication",
            icon: "./img/medication3.png"
          }
        },
        questions:{
          1:{
          cards:3,
          identical:null,
          question:"What will this involve?",
          answers: {
            practical_support:"You will meet with a CAMHS worker who will offer you short-term, goal-focused support and activities.\n\nThis will also include advice about things like sleep, diet and exercise.",
            talking_therapy:"You will meet weekly with a therapist who will offer you a space to talk about and understand your feelings and the difficulties in your life. \n\nEach session is about an hour long and can involve other family members. ",
            medication:"You will meet with a GP, psychiatrist or a specialist nurse who will provide a script for medication.\n\nThe most common medication for depression is called an SSRI. \n\nThis is taken once daily as a tablet."
          }
        },
        2:
          {
            cards:3,
            identical:null,
            question: "How will this help me get better?",
            answers: {
              practical_support:"This basic support will give you practical strategies to help you feel better.",
              talking_therapy:"Talking therapies help you think differently about situations in your life and improve how you feel. ",
              medication:"SSRIs can improve symptoms of depression by making your feelings more stable."
            }
          },
        3:
          {
            cards:3,
            identical:null,
            question: "Will I see the same people for the duration of this help or support?",
            answers: {
              practical_support:"You will see one person for this support.",
              talking_therapy:"You will see the same person for your therapy. \n\nThis may not be the same person you see for your assessment.",
              medication:"Your GP or psychiatrist will meet with you at least once every six months. "
            }
          }
        ,
        4:
          {
            cards:2,
            question: "Can I use other types of support alongside this?",
            identical: ["talking_therapy","medication"],
            answers: {
              practical_support:"Changes to your diet, exercise and lifestyle may improve your symptoms.",
              talking_therapy:"Combining talk therapy with medication can improve symptoms of depression more than talk therapy or medication alone.\n\nChanges to diet, exercise and lifestyle may also help improve your symptoms.",
              medication:"Combining talk therapy with medication can improve symptoms of depression more than talk therapy or medication alone.\n\nChanges to diet, exercise and lifestyle may also help improve your symptoms."
            }
},
        5:{
            cards:2,
            identical:["practical_support","talking_therapy"],
            question: "Are there risks or side effects from this type of help or support?",
            answers: {
              practical_support:"Talking about your difficulties can sometimes cause discomfort, anxiety or stress. \n\nTell the person you are talking to if you are experiencing these feelings.",
              talking_therapy:"Talking about your difficulties can sometimes cause discomfort, anxiety or stress.\n\nTell the person you are talking to if you are experiencing these feelings.",
              medication:"Common: sleeping difficulties, drowsiness, loss of appetite, upset stomach, dry mouth, dizziness, weight loss, blurred vision, headaches, feeling agitated and sweating."
            }
          }
        ,
        6:{
          cards:2,
          identical:["practical_support","talking_therapy"],
          question: "Where can I get this support?",
          answers: {
            practical_support:"This can be found at CAMHS, at school, online or in the community.",
            talking_therapy:"This can be found at CAMHS, at school, online or in the community.",
            medication:"Medication can be prescribed by a psychiatrist, a GP, or a specialist nurse.\n\nThis would usually happen at CAMHS or a GP surgery. "
          }
        }

    }});
    $('.hbs-container').append(html);
});
