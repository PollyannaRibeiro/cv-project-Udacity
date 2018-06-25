var bio = {
    "name": "Pollyanna Ribeiro",
    "role": "Web developer",
    "contacts":{
        "mobile": "0000-0000",
        "email": "recpolly@gmail.com",
        "github": "https://github.com/PollyannaRibeiro",
        "location": "London"
    },
    "welcomeMessage": "Lorem ex et pariatur laborum nisi elit non sit proident",
    "skills" : ["HTML/CSS", "javaScript", "Photopraphy", "CMS", "UX", "WordPress", "Responsive Websites", "Digital Marketing"],
    "biopic": "img/cat.jpg", 
    "display": ""  
};

var education = {

    "schools": [
        {  
            "name":"UFPE",
            "location": "Recife - Brazil",
            "course": "Design",
            "degree":"Incomplete degree",
            "majors": "[Art, Design Graphic, Cinema]",
            "subjects": "Focus on object creation and graphic design.",
            "dates":"2005-2007",
            "url": "https://www.ufpe.br/"
        },
        {
            "name":"UniNassau",
            "location": "Recife - Brazil",
            "course":"Law",
            "degree":"Bachelor degree",
            "majors": "[Labor, Civil, Tax Law]",
            "subjects": "Study of Brazilian law: labor, constitutional, civil, tax and criminal.",
            "dates":"2007-2012",
            "url": "www.uninassau.edu.br/institucional/recife"
        }
    ], 

    "onlineCourses":[
        {
            "title":"Web Design",
            "school": "Alura",
            "dates": "6 months",
            "url": "https://www.alura.com.br/",
            "subject": "Elit aliqua in cupidatat elit pariatur proident minim sit sit magna quis ad nisi est. Est eiusmod enim irure consequat minim. Ea velit ipsum do ut ea eiusmod laboris esse nulla amet est ad aliquip. Est cupidatat irure sit cupidatat."
        },
        {
            "title":"Web Development",
            "school": "Udacity",
            "dates": "6 months",
            "url": "https://www.udacity.com/",
            "subject": "Elit aliqua in cupidatat elit pariatur proident minim sit sit magna quis ad nisi est. Est eiusmod enim irure consequat minim. Ea velit ipsum do ut ea eiusmod laboris esse nulla amet est ad aliquip. Est cupidatat irure sit cupidatat."
        },
        {
            "title":"Photography",
            "school": "Michigan State University",
            "dates": "6 months",
            "url": "https://www.coursera.org/",
            "subject": "Elit aliqua in cupidatat elit pariatur proident minim sit sit magna quis ad nisi est. Est eiusmod enim irure consequat minim. Ea velit ipsum do ut ea eiusmod laboris esse nulla amet est ad aliquip. Est cupidatat irure sit cupidatat."
        }
    ]
};

var work = {
    "jobs": [
        {
            "title": "Designer",
            "employer": "Company",
            "dates": "2015-2016",
            "description": "Ea in consectetur incididunt consequat magna cupidatat dolor ipsum proident ea non cupidatat et proident. Cupidatat aliquip nulla minim incididunt ut aute irure in. Reprehenderit mollit minim reprehenderit veniam ipsum occaecat ad reprehenderit. Lorem veniam enim eiusmod pariatur mollit aute. Velit esse excepteur et eiusmod nulla. Nostrud non do occaecat aute sit deserunt aliqua aliqua. Quis enim elit culpa qui tempor.",
            "location": "London"
        },
        {
            "title": "Designer",
            "employer": "Company",
            "dates": "2015-2016",
            "description": "Nostrud quis officia incididunt aute excepteur. Irure irure adipisicing incididunt ipsum id dolor voluptate deserunt veniam nisi. Ipsum consequat amet labore est irure aute. Labore aliqua sunt consectetur dolor quis est dolor cupidatat qui. Incididunt amet est sint aliqua minim consectetur voluptate elit est aliquip irure amet sit labore.",
            "location": "London"
        },
        {
            "title": "Designer",
            "employer": "Company",
            "dates": "2015-2016",
            "description": "Excepteur aliquip cupidatat laborum sint aliquip nisi ut sit ex. Commodo Lorem aliquip sunt commodo Lorem minim esse irure adipisicing non elit id. Lorem minim eiusmod veniam sint commodo esse culpa pariatur deserunt sunt ut. Voluptate fugiat excepteur nulla et veniam veniam aute et voluptate duis deserunt voluptate et velit. Laborum exercitation mollit ad ipsum consectetur reprehenderit ex labore non laboris aliqua culpa. Consectetur fugiat veniam do laboris anim aute non non esse ea. Exercitation nostrud cupidatat aute consequat incididunt veniam commodo velit irure minim quis.",
            "location": "London"
        }
    ]
};

var projects = {
    "projects" :[
        {
            "title" : "blá blá blá",
            "dates" : "2010-2012",
            "description" : "Commodo eiusmod ea cillum pariatur ad fugiat pariatur elit eu et sunt.Dolor cillum consequat culpa ex velit reprehenderit ea sit nisi magna dolore amet velit. Labore nostrud non adipisicing consectetur nisi sit consequat reprehenderit ut Lorem duis irure eiusmod. Exercitation do ea dolor magna sunt est ex magna. Nostrud magna sit Lorem voluptate consectetur do nostrud dolore elit sit nostrud.",
            "images" : ["http://placekitten.com/400/400", "http://placekitten.com/600/400"]
        },
        {
            "title" : "blá blá blá",
            "dates" : "2010-2012",
            "description" : "Commodo eiusmod ea cillum pariatur ad fugiat pariatur elit eu et sunt.Eu sunt cillum irure anim aliquip nulla non ut ullamco fugiat sit occaecat est. Id eiusmod irure elit amet aliquip officia laboris eiusmod anim. Quis dolor eu ut elit Lorem culpa nisi. Proident esse exercitation culpa consectetur veniam eu incididunt. Anim duis nulla nisi adipisicing ea eu occaecat in.",
            "images" : ["http://placekitten.com/600/400", "http://placekitten.com/300/400"]
        },
        {
            "title" : "blá blá blá",
            "dates" : "2010-2012",
            "description" : "Commodo eiusmod ea cillum pariatur ad fugiat pariatur elit eu et sunt. Qui anim officia laborum esse reprehenderit occaecat et. Labore officia duis consequat exercitation labore id qui fugiat dolore in. Lorem qui mollit quis ullamco pariatur id. In quis ipsum ut fugiat officia.",
            "images" : ["http://placekitten.com/400/600", "http://placekitten.com/600/400"]
        }
    ]
};

var data = "%data%";

function displayContacts(place){
    var formattedMobile =  HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail =  HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub =  HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation =  HTMLlocation.replace(data, bio.contacts.location);
    $(place).append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);
}

bio.display = function(){

    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedPicture = HTMLbioPic.replace(data, bio.biopic);
    var formattedRole =  HTMLheaderRole.replace(data, bio.role);
    var formattedMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").prepend(formattedName, formattedPicture, formattedRole, formattedMsg);

    displayContacts("#topContacts");

    if (bio.skills.length!== 0){
        $("#skills").append("<hr>Skills:     ");
        for (var i = 0; i<bio.skills.length; i++){
            var formatedSkills = HTMLskills.replace(data, bio.skills[i]);
            $("#skills").append(formatedSkills);
        } 
    }
};

bio.display();

work.display = function (){
    for (var index = 0; index<work.jobs.length; index++){
        $("#workExperience").append(HTMLworkStart);
        var workEmployer = HTMLworkEmployer.replace(data, work.jobs[index].employer);
        var workTitle = HTMLworkTitle.replace(data, work.jobs[index].title);
        var workDates = HTMLworkDates.replace(data, work.jobs[index].dates);
        var workLocation = HTMLworkLocation.replace(data, work.jobs[index].location);
        var workDescription = HTMLworkDescription.replace(data, work.jobs[index].description);
    
        $(".work-entry:last").append(workLocation, workTitle, workDates, workEmployer , workDescription);
    }
};

work.display();

projects.display = function(){

    for (var index = 0; index<projects.projects.length; index++){
        $("#projects").append(HTMLprojectStart);
        var projectTitle = HTMLprojectTitle.replace(data, projects.projects[index].title );
        var projectDates = HTMLprojectDates.replace(data, projects.projects[index].dates);
        var projectDescription = HTMLprojectDescription.replace(data, projects.projects[index].description);
        $(".project-entry:last").append(projectTitle, projectDates, projectDescription);

        if (projects.projects[index].images.length !== 0){
            for (var i = 0; i<projects.projects[index].images.length; i++){
                var projectImage = HTMLprojectImage.replace(data, projects.projects[index].images[i]);
                $(".project-entry:last").append(projectImage); 
            }
         }
    }  
};

projects.display();

education.display = function (){

    for (var index = 0; index<education.schools.length; index++){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, education.schools[index].name);
        var formattedLocal = HTMLschoolLocation.replace(data,education.schools[index].location);
        var formattedCourse = HTMLschoolCourse.replace(data,education.schools[index].course);
        var formattedDegree = HTMLschoolDegree.replace(data,education.schools[index].degree);
        var formattedSubjects = HTMLschoolMajor.replace(data, education.schools[index].subjects);
        var formattedDate = HTMLschoolDates.replace(data,education.schools[index].dates);
        $(".education-entry:last").append(formattedCourse, formattedDate, formattedName, formattedLocal, formattedDegree, formattedSubjects);
    }
  
    $("#education").append(HTMLonlineClasses);
    for (var index2 = 0; index2<education.onlineCourses.length; index2++ ){    
        $("#education").append(HTMLschoolStart);
        var formatedTitle =  HTMLonlineTitle.replace(data, education.onlineCourses[index2].title);
        var formattedSchool = HTMLonlineSchool.replace(data, education.onlineCourses[index2].school);
        var formattedDates = HTMLonlineDates.replace(data, education.onlineCourses[index2].dates);
        var formattedUrls = HTMLonlineURL.replace(data, education.onlineCourses[index2].url);
        var formattedOnlineSubject = HTMLonlineSubject.replace(data, education.onlineCourses[index2].subject);  
        $(".education-entry:last").append(formatedTitle, formattedDates, formattedSchool, formattedOnlineSubject);
    }    
};

education.display();

// map div
$("#mapDiv").append(googleMap);

// footer contacts information

displayContacts("#footerContacts");

// click tracking

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;

    console.log(logClicks(x, y));
});