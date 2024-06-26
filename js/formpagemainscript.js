function handleQuestionChange(questionNumber) {
    var question1 = document.getElementById('question1');
    var question2 = document.getElementById('question2');
    var answer1 = question1.value;
  
    if (questionNumber === 1) {
      if (answer1 === 'Web Development') {
        question2.innerHTML = '<option value="">Select an option</option>' +
                              '<option value="JavaScript">JavaScript</option>' +
                              '<option value="Python">Python</option>' +
                              '<option value="C#(Asp.net)">C#(Asp.net)</option>';
      } else if (answer1 === 'Mobile App Development') {
        question2.innerHTML = '<option value="">Select an option</option>' +
                              '<option value="Swift">Swift</option>' +
                              '<option value="Kotlin">Kotlin</option>' +
                              '<option value="Dart(Flutter)">Dart(Flutter)</option>';
      } else if (answer1 === 'Game Development') {
        question2.innerHTML = '<option value="">Select an option</option>' +
                              '<option value="C++_language">C++_language</option>' +
                              '<option value="C#(Unity)">C#(Unity)</option>' +
                              '<option value="JavaScript(Phaser.js)">JavaScript(Phaser.js)</option>';
      }else if (answer1 === 'Data Science') {
        question2.innerHTML = '<option value="">Select an option</option>' +
                              '<option value="Python">Python</option>' +
                              '<option value="R_language">R</option>' +
                              '<option value="Julia">Julia</option>';
      }else if (answer1 === 'Systems Programming') {
        question2.innerHTML = '<option value="">Select an option</option>' +
                              '<option value="C_language">C</option>' +
                              '<option value="Rust">Rust</option>'+
                              '<option value="Go">Go</option>';     
      }                                                                
      question2Group.style.display = 'block';
    } else if (questionNumber === 2) {
      var answer2 = question2.value;
      if (answer1 !== "" && answer2 !== "") {
        buttonGroup.style.display = 'block';
      }
    }
  }
    
  
    function showResult() {
    var answer1 = document.getElementById('question1').value;
    var answer2 = document.getElementById('question2').value;
    var resultText = '';
  
    if (answer1 === 'Web Development' && answer2 === 'JavaScript') {
      resultText = 'Highly interactive for users, supported by all browsers, and has a massive ecosystem of libraries.JavaScript is essential for web development. Start by understanding its syntax, variables, and functions. HTML defines content, CSS styles layout, and JavaScript brings interactivity. Practice on platforms like Codecademy or freeCodeCamp.Dive into popular JavaScript frameworks like React, Angular, or Vue.js to build dynamic web applications.';
    } else if (answer1 === 'Web Development' && answer2 === 'Python') {
      resultText = ' Great for rapid development, with readable syntax and strong community support.First, master Python basics, including variables, loops, and functions. Next, explore web frameworks like Django (for complex projects) or Flask (for flexibility). Familiarize yourself with HTML and CSS, essential for creating web pages. Dive into database interaction using SQL libraries like SQLAlchemy.';
    } else if (answer1 === 'Web Development' && answer2 === 'C#(Asp.net)') {
      resultText = 'Its a great choice for making web Applications.Set up your environment by installing Visual Studio, create an ASP.NET Core project, explore IDE features, make changes to your web app, and run it locally. Remember, web development is a journey, and practice is key. Explore online tutorials, courses, and documentation to deepen your understanding of C# and ASP.NET Core. ';
    } else if (answer1 === 'Mobile App Development' && answer2 === 'Swift') {
      resultText = 'Optimized for performance on Apple devices, with a clean syntax and integration with Apple services.Set up your environment by installing Xcode, create your first iOS project, learn Swift basics, design your user interface (UI), write Swift code, test your app, and explore advanced topics. Remember, mobile app development is an exciting journey. Continuously expand your knowledge, explore advanced concepts, and stay up-to-date with the latest updates in the Swift ecosystem.';
    } else if (answer1 === 'Mobile App Development' && answer2 === 'Kotlin') {
      resultText = 'Modern language for Android development, fully interoperable with Java, and less prone to errors.To begin, install Android Studio, an IDE tailored for Android development. Create a new project, explore the project structure, and write your first Kotlin code. You’ll learn how to add UI elements, handle click events, and even create a second screen for your app.';
    } else if (answer1 === 'Mobile App Development' && answer2 === 'Dart(Flutter)') {
      resultText = ' Cross-platform development, hot reload feature for UI, and expressive UI creation. First, explore the Flutter codelab for creating your initial app. This guided tutorial covers mobile, desktop, and web platforms, allowing you to build a solid foundation in Flutter. Additionally, consider Udemy’s Mobile App Development with Flutter & Dart course, which caters to absolute beginners. You’ll learn Dart step-by-step and create impressive apps for both Android and iOS using a single codebase. ';
    } else if (answer1 === 'Game Development' && answer2 === 'C++_language') {
      resultText = 'Offers control over system resources and performance, widely used in AAA games.First, familiarize yourself with the engine’s interface, basic features, and workflow. Engines like Unreal Engine and Cryengine offer extensive documentation and tutorials for beginners. Next, master C++ for game development. C++ is widely used due to its performance and flexibility. To hone your skills, consider resources like Udemy’s “Learn C++ for Game Development” course or GameDev.tv’s “C++ Fundamentals: Game Programming For Beginners”. ';
    } else if (answer1 === 'Game Development' && answer2 === 'C#(Unity)') {
      resultText = ' Versatile, with a huge number of resources for learning, and strong community support.First, familiarize yourself with the engine’s interface, basic features, and workflow. Engines like Unity and Cryengine offer extensive documentation and tutorials for beginners. Next, master C# for game development. C# is widely used due to its performance and flexibility. To hone your skills, consider resources like Udemy’s “C# Fundamentals for Game Development” course or freeCodeCamp’s “Game Development for Total Beginners” Unity course.';
    }else if (answer1 === 'Game Development' && answer2 === 'JavaScript(Phaser.js)') {
      resultText = 'Good for simple web-based games, easy to start with if you know web development.First, master the basics of Phaser by exploring Codecademy’s free course on game development with Phaser.js. This course covers everything from setting up a build with Webpack to creating characters, animations, and handling maps using Tiled. Additionally, check out MDN Web Docs’ step-by-step tutorial on building a simple 2D breakout game using Phaser.js. Lastly, consider using libraries and frameworks like Phaser, Pixi.js, or Three.js to build captivating web and mobile games.';
    }else if (answer1 === 'Data Science' && answer2 === 'Python') {
      resultText = 'Extensive libraries for data analysis (Pandas), machine learning (scikit-learn), and data visualization (Matplotlib).Python is an ideal starting point. Its user-friendly syntax, rich ecosystem of libraries, and versatility make it a top choice for data scientists. Begin by mastering Python basics: variables, loops, and functions. Then, delve into powerful tools like Pandas (for data manipulation), NumPy (for numerical computing), and Matplotlib (for data visualization). Hands-on practice with real datasets will accelerate your journey toward becoming a proficient data scientist with Python.';
    }else if (answer1 === 'Data Science' && answer2 === 'R_language') {
      resultText = ' Designed for statistical analysis and visualization, with a comprehensive collection of packages for data science.Begin by understanding the fundamental building blocks of R. Familiarize yourself with variables, data types, and basic operations. Online tutorials and courses can be helpful for this foundation.Master data cleaning and reshaping using packages like dplyr and tidyr. Explore ggplot2 for creating informative plots.Grasp probability, hypothesis testing, and regression analysis. Apply your knowledge by working on small projects.Join R forums and share experiences with fellow data enthusiasts.';
    }else if (answer1 === 'Data Science' && answer2 === 'Julia') {
      resultText = ' High-performance for numerical computing, easy to learn for those with a math background.It’s an excellent choice for data science tasks. To get started, download Julia from the official website1. Once installed, explore the basics: learn about variables, types, and conditionals. Dive into loops, functions, and packages. Julia’s 1-based indexing and native support for matrices make it a powerful tool for data manipulation. Remember, Julia isn’t just for data science—it’s a versatile language that can be used for web development, game development, and more.';
    }else if (answer1 === 'Systems Programming' && answer2 === 'C_language') {
      resultText = ' Low-level access to memory, efficient and fast, suitable for system/kernel development.start by understanding the basics of C: variables, loops, and syntax. Set up your development environment—your coding oasis—using an IDE like Visual Studio Code. Dive into advanced concepts like functions, pointers, and arrays. Explore file handling, input/output operations, and memory management. C’s portability and low-level features make it ideal for system software development, where hardware awareness is crucial.';
    }else if (answer1 === 'Systems Programming' && answer2 === 'Rust') {
      resultText = 'Memory safety without garbage collection, concurrency without data races, and growing community.To begin your Rust journey in systems programming, follow these steps: learn the fundamentals, explore advanced features, set up your environment, and engage in hands-on practice. Rust’s safety guarantees and versatility make it an excellent choice for roles like Platform Engineer, MLOps Engineer, Data Engineer, Embedded Engineer, or Backend Developer.';
    }else if (answer1 === 'Systems Programming' && answer2 === 'Go') {
      resultText = 'Simple syntax, efficient concurrency model, and fast compilation times. To begin, install Go if you haven’t already. Write a simple “Hello, World” program, and use the go command to run it. Explore the Go package discovery tool to find relevant packages for your projects. Dive into system-level concepts, compare Go code to C, and embrace the language’s efficiency and safety.';
    }else {
      resultText = 'Please select an option for both questions.';
    }
  
    document.getElementById('resultText').textContent = resultText;
    document.getElementById('resultText').style.display = 'block';
  }