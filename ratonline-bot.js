var botui = new BotUI('ratonline-bot');
    botui.message.add({
      delay: 700,
      content: "Welcome to Rat online chatbot!"
    })

function init() {
  botui.message
    .bot({
      delay: 1200,
        content: "What part of VMI life would you like to learn about today?"
    }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'VMI Overview',
          value: 'overview'
        }, {
          text: 'Physical Fitness',
          value: 'fitness'
        }, {
          text: 'Cadet Life',
          value: 'cadet'
        }]
      })
  }).then(function (res) {
    var message; 

    if (res.value == "overview") {
      getBotLoading();
      getOverview();
    } 
    if (res.value == "fitness") {
      getBotLoading();
      getFitness();
    }
    if (res.value == "cadet") {
      getBotLoading();
      getCadet();
    } 
  });
}

var getBotLoading = function () {
  botui.message
    .bot({
      content: "Ok! Let me see if I can find that for you."
    })
}

var getOverview = function () {
  botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "Founded in 1839, Virginia Military Institute  (VMI)  is the oldest  state-supported  military  college in the United States. Throughout its storied history, VMI has produced leaders and individuals whose daily lives reflect the integrity, fairness, and appreciation for the value of hard work that is instilled at the Institute. For the individual who wants an undergraduate experience more complete and transformative than an ordinary college or university can provide and more versatile in its applications than a military service academy affords, VMI offers a superb education."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 

    if (res.value == "help") {
      init();
    } 
    
  });
}


var getFitness = function () {
  botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "Here's what I could find on fitness."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'Physical Fitness Frequency',
          value: 'numworkouts'
        }, {
          text: 'Physical Fitness Tests',
          value: 'tests'
        }]
      })
  }).then(function (res) { 

    if (res.value == "numworkouts") {
      getBotLoading();
      getNumWorkouts();
    } 
    if (res.value == "tests") {
      getBotLoading();
      getTests();
    }
  });
  var getNumWorkouts = function () {
  botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "Here's what I could find on how often cadets work on their fitness: Cadets are required to take seven semesters of physical education classes. Cadets are also involved with several programs that encourage physical fitness. Physical Training Time (PTT) is administered by the respective ROTC departments and the Commandant’s staff. These sessions are mandatory. PTT is conducted twice each week and consists of a variety of physical training activities. Additionally, rats will engage in NCAA sports or Rat Challenge. This is where they will learn teamwork and leadership principles while doing many physical tasks such as runs, rope climbs, obstacle courses, rappelling, and swims. New Cadet Military Training (NCMT) teaches basic military skills, marksmanship, first aid, and land navigation."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 

    if (res.value == "help") {
      init();
    } 
    
  }); 
  }
  var getTests = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "There are different types of physical tests for cadets would you like to learn about how VMI tests cadets or how an ROTC tests cadets?"
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'VMI',
          value: 'VMItest'
        }, {
          text: 'ROTC',
          value: 'ROTCtest'
        }]
      })
    }).then(function (res) { 

    if (res.value == "VMItest") {
      getBotLoading();
      getVMItest();
    } 
    if (res.value == "ROTCtest") {
      getBotLoading();
      getROTCtest();
    }
  }); 
  }
  var getVMItest = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "Here's What I found on VMI fitness testing: Cadets have to take the VMI Fitness Test (VFT) every semester. The VFT is gendernormed and consists of pull-ups, sit-ups and a 1.5 mile run"
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 

    if (res.value == "help") {
      init();
    } 
  });
  }
  var getROTCtest = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
      content: "Here's What I found on VMI ROTC fitness testing: Cadets perform different fitness tests depending on their respective ROTC requirments. Here is what Army ROTC cadets have to take for their fitness test. Cadets are required to complete push-ups, sit-ups, and a timed 2-mile run"
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 
    if (res.value == "help") {
      init();
    } 
  });
  }
}

var getCadet = function () {
  botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: 'What part of Cadet life would you like to learn about?'
    }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Daily Rat Activities',
          value: 'ratact'
        }, {
          text: 'Class System',
          value: 'class'
        }]
      })
  }).then(function (res) { 

    if (res.value == "ratact") {
      getBotLoading();
      getRatAct();
    } 
    if (res.value == "class") {
      getBotLoading();
      getClass();
    }
  }); 
  var getRatAct = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "Would you like to learn about a rat's day during matriculation or during a semester?"
    }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Matriculation',
          value: 'matriculation'
        }, {
          text: 'Semester',
          value: 'semester'
        }]
      })
  }).then(function (res) { 

    if (res.value == "matriculation") {
      getBotLoading();
      getMatriculation();
    } 
    if (res.value == "semester") {
      getBotLoading();
      getSemester();

    }
  }); 
  var getMatriculation = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "Here's What I could find on Rat activities during Matriculation week: During Matriculation Week, you will participate in numerous training activities, get your rat haircut, engage in daily physical fitness routines, learn about the history of VMI, and become familiar with the requirements of cadet life. You will also purchase textbooks, so ensure funds are available. Matriculation Week concludes with an event called the Rat Crucible."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 
    if (res.value == "help") {
      init();
    } 
  });
  }
  var getSemester = function () {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "Here's what I could find on a Rat's daily routine during teh semester:  Typical Rat’s Day Initially, new cadets are awakened by their cadre. After classes begin, they learn to wake up in time to get properly dressed, roll up their “hay” (mattress) and complete chores in their dykes’ rooms before Breakfast Roll Call (BRC). At BRC and all other formations, squad corporals (3rd Class cadets) inspect new cadets for personal appearance. They then march down to Crozet Hall for breakfast. After breakfast, classes begin at 0800. All cadets must be on time and prepared for class. After Supper Roll Call (SRC) and the following dinner, cadets must be in an approved study area such as barracks, the library, or an academic building. The end of the duty day is signified by Taps (lights out) at 2330 Sunday–Thursday. Saturdays are filled with various activities including military duty and academic meetings. On Sunday mornings, cadets are offered the opportunity to attend services at one of the local churches. On Sunday evenings, VMI’s full-time chaplains hold a nondenominational service in Memorial Hall."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 
    if (res.value == "help") {
      init();
    } 
  });
  }
  }
  var getClass = function() {
    botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "What part of the class system would you like to learn about?"
    }).then(function () {
      return botui.action.button({
        delay: 1000,
        action: [{
          text: 'Cadet Services',
          value: 'cadetservices'
        }, {
          text: 'Dyke System',
          value: 'dyke'
        }]
      })
  }).then(function (res) { 

    if (res.value == "cadetservices") {
      getBotLoading();
      getServices();
    } 
    if (res.value == "dyke") {
      getBotLoading();
      getDyke();
    }
  }); 
  }
  var getDyke = function () {
botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "Here's what I could find on the dyke system: A new cadet’s greatest ally during and after the Rat Line is his or her 1st Class mentor, known as a dyke. The phrase originated in the 19th-century mispronunciation of the term “to get decked out,” or to dress up in one’s finery, as it takes two cadets to “dyke out” (put on the white cross belts) for the dress uniform worn at parades. In exchange for certain tasks performed by the new cadet, the dyke offers good advice, moral support, and a haven on the first stoop (“floor”) of barracks. New cadets learn that the dyke, as a mentor, will not allow avoidance of duties, but will help them through the rat year. Normally, the upper-class cadet initiates the contact with a new cadet for a possible dyke relationship. This contact may be based on common background, sports team, or shared hometown with the new cadet, or it may be facilitated by a member of the faculty, staff, or a coach. New cadets are closely monitored to ensure they receive a dyke."
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 
    if (res.value == "help") {
      init();
    } 
  });
  }
  var getServices = function () {
botui.message
    .bot({
      delay: 1200,
      loading: true,
        content: "Here's what I could find on VMI cadet services: VMI has several governing committees run by cadets under the supervision of the assistant commandant for cadet government. These committees handle the issues of the Corps and enforce regulations of the Institute. The General Committee (GC) makes up the cadet leadership of the school. The GC upholds the standards and traditions of the Corps. It is the guardian of the class system through its enforcement of class privileges, and it is the officially recognized voice for cadets when interacting with the administration. The GC consists of the nine class officers and one elected 1st Class secretary. The Officer of the Guard Association (OGA) maintains order and harmony within the Corps. This is the main organization through which the Corps polices its own, dealing with offenses from the most trivial to the most important. This organization, among other things, is charged with enforcing VMI’s antihazing policies. The OGA consists of 1st Class privates. The Cadet Equity Association (CEA) promotes the Superintendent’s Statement on Equity at VMI, and monitors a postwide climate of respect and equitable treatment for cadets. The mission of these cadets is to receive reports of incidents of discrimination or sexual harassment, to investigate these matters when appropriate, and to protect the privacy of the individuals involved insofar as it is possible. CEA cadets receive training in matters and procedures related to investigations and legal issues that involve gender, racial, religious, sexual orientation, and ethnic discrimination"
    }).then(function () {
      return botui.action.button({
        delay: 500,
        action: [{
          text: 'For More Questions Press Me',
          value: 'help'
        }]
      })
    }).then(function (res) { 
    if (res.value == "help") {
      init();
    } 
  });
  }
}


init();