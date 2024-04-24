function showResult() {
    var answer = document.getElementById('question1').value;
    var resultText = '';
    
 
   if (answer === 'INTJ') {
     resultText = 'Personality Traits: INTJs are analytical, creative, and have a strong drive to see connections where others might not. They demand high performance from themselves and those around them.Best Programming Areas:Software Engineering: INTJs excel in designing complex systems and solving intricate problems.Data Science and Analysis: Their analytical mindset makes them adept at handling large datasets and deriving insights.Entrepreneurship: INTJs may enjoy coding for their own startups or innovative ventures1.';
   } else if (answer === 'ISTJ') {
     resultText = 'Personality Traits: ISTJs are responsible, organized, and productive. They prefer clear rules and direction.Best Programming Areas:Quality Assurance (QA): ISTJs thrive in ensuring software quality by meticulously testing and validating code.Database Management: Their attention to detail suits tasks related to data integrity and organization.Backend Development: ISTJs can handle the structured logic behind server-side applications1.';
   } else if (answer === 'ENTP') {
     resultText = 'Personality Traits: ENTPs are curious, adaptable, and love exploring new ideas. They enjoy brainstorming and problem-solving.Best Programming Areas:Frontend Development: ENTPs can bring creativity to user interfaces and user experiences.Mobile App Development: Their adaptability suits the ever-evolving mobile landscape.Innovation and Prototyping: ENTPs thrive in experimental projects and proof-of-concept work1.';
   }else if (answer === 'INFP') {
     resultText = 'Personality Traits: INFPs are empathetic, imaginative, and value meaningful work. They seek purpose in their endeavors.Best Programming Areas:Web Development: INFPs can infuse creativity into web design and user interactions.Nonprofit and Social Impact Projects: They may find fulfillment in coding for causes they care about.Game Development: INFPs can contribute to storytelling and immersive game experiences1.';
   }else if (answer === 'ENFP') {
     resultText = 'Personality Traits: ENFPs are enthusiastic, adaptable, and love collaboration. They thrive on new challenges.Best Programming Areas:Full-Stack Development: ENFPs enjoy working across different layers of an application.Startups and Dynamic Environments: Their adaptability suits fast-paced, innovative settings.Creative Projects: ENFPs can contribute to projects that involve both technical and artistic elements1.';
   }else if (answer === 'ISTP') {
     resultText = 'Personality Traits: ISTPs are practical, hands-on, and enjoy solving real-world problems. They thrive in dynamic environments.Best Programming Areas:Embedded Systems: ISTPs can excel in low-level programming for hardware devices.Game Development (Graphics and Physics): Their practical mindset suits game physics and graphics programming.Cybersecurity: ISTPs may enjoy the challenge of securing systems and networks.';
   }else if (answer === 'ESFJ') {
     resultText = 'Personality Traits: ESFJs are warm, social, and value harmony. They enjoy helping others and working in collaborative settings.Best Programming Areas:User Experience (UX) Design: ESFJs can create intuitive and user-friendly interfaces.Project Management: Their organizational skills are valuable for coordinating development teams.Customer-Facing Applications: ESFJs thrive in roles that involve direct interaction with users.';
   }else if (answer === 'ENTJ') {
     resultText = 'Personality Traits: ENTJs are assertive, strategic, and natural leaders. They enjoy planning and executing complex projects.Best Programming Areas:Software Architecture: ENTJs can design scalable and efficient systems.Business Applications: Their strategic thinking aligns well with enterprise software development.Startups and Entrepreneurship: ENTJs may lead tech ventures or manage development teams.';
   }else if (answer === 'ISFP') {
     resultText = 'Personality Traits: ISFPs are creative, sensitive, and value aesthetics. They seek meaning in their work.Best Programming Areas:Frontend Development (UI/UX): ISFPs can infuse artistic flair into web and app interfaces.Graphic Design and Animation: Their creativity suits visual elements in software.Indie Game Development: ISFPs may enjoy creating unique and visually appealing games.';
   }else if (answer === 'ESTP') {
     resultText = 'Personality Traits: ESTPs are energetic, adaptable, and love challenges. They thrive in fast-paced environments.Best Programming Areas:Mobile App Development: ESTPs can handle the rapid changes in mobile technologies.DevOps and Automation: Their adaptability suits continuous integration and deployment.Hackathons and Prototyping: ESTPs enjoy quick problem-solving and building functional prototypes.';
   }
   else {
     resultText = 'Please select an option for both questions.';
   }
 
   document.getElementById('resultText').textContent = resultText;
   document.getElementById('resultText').style.display = 'block';
 }