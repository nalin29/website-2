export const projects = [
  {
    title: "TuxKart Ice Hockey Image Agent",
    subtitle: "Showcase Image detection",
    description:
      "An agent that was trained using an FCN to mask out the puck and detect the center. This was combined with a hand made controller. As a result the agent successfully beat the competing agents. Scoring goals in almost every match allowing us to place top 10.",
    image: "./tuxkart.gif",
    link: "/projects/0",
  },
  {
    title: "Smoothed Particle Hydrodynamics Simulation",
    subtitle: "Showcase Fluid Simulation",
    description: "A class project to implement Smoothed Particle Hydrodynamics. This is a way of simulating fluids by representing them as discrete particles. Then calculating the force of pressure and gravity using the nearby kernel of particles. This demo is of a simplistic version of that.",
    image: "./sph.gif",
    link: "/projects/9"
  },
  {
    title: "CNN Fruit Classifier",
    subtitle: "Keras Showcase",
    description:
      "Exploration into CNN classification using the Keras API and fruit-360 dataset from Kaggle. In this project using the Tensorflow Keras API I create a series of CNN models and evaluated the best one on the Fruit-360 dataset from Kaggle ",
    image: "./fruitClassifier.png",
    link: "/projects/1",
  },
  {
    title: "Point Cloud Stream Compression",
    subtitle: "Showcase FRI Project",
    description:
      "An application that runs using the ROS framework that compresses a depth camera output. The color data is compressed using standard compression techniques. The depth data is compressed using a custom lz4. This is reconstructed into a point cloud.",
    image: "./compression_node.png",
    link: "/projects/2",
  },
  {
    title: "VR Hallway Experiment",
    subtitle: "Showcase BWI Project",
    description:
      "Using previous data extrapolate gaze correlation with movement and if possible try to train a virtual agent such that it can read the gaze cues of a person in the VR environment and clone the behavior of a normal human.",
    image: "./vr.gif",
    link: "/projects/5",
  },
  {
    title: "Pacman Q-Learning",
    subtitle: "Showcase Reinforcement Learning",
    description:
      "A reinforcement agent that learned to estimate the value of certain action state pairs by manipulating weights of hand coded features. This was then used to populate and expectimax tree. This resulted in a fifth place sumbission.",
    image: "./pacman.gif",
    link: "/projects/7",
  },
  {
    title: "Old Website",
    subtitle: "Showcase of Express and PugJS",
    description:
      "I have created this website from scratch. The website uses nodejs as a web server and serves content using an express middleware. In addition the contact system below uses the nodemailer library to send e-mails and Send-Grid is the email service provider.",
    image: "./website.jpg",
    link: "/projects/4",
  },
  {
    title: "Stroke Classification",
    subtitle: "Showcase Data Mining",
    description:
      "This is a python notebook showcasing a full pipeline of data cleaning, feature creation and classification. Primarily, utilizes scipy and covers a wide variety of models for classification. In this Notebook we perform classification using KNN, SVM and Trees.",
    image: "./data-mining.png",
    link: "/projects/3",
  },
  {
    title: "NBAToday Website",
    subtitle: "Showcase React, Flask and PostgreSQL",
    description:
      "A website designed to show interesting stats for the NBA. This contains a react frontend. The data is stored in a PostegreSQL database. This is distributed using a fully fledged and documented API served by a Flask Backend.",
    image: "./nba.png",
    link: "/projects/6",
  },
  {
    title: "Asynchronous Copy",
    subtitle: "Showcase Asynchronous I/O",
    description: "A final project to create a faster version of cp -r by using asynchronous IO. For this project I leveraged the original aio library. I then compared it to an version with the new kernel level io_uring library.",
    image: "./aio.png",
    link: "/projects/8"
  }
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Jesse Hicks",
    company: "Zoozle",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa quod necessitatibus quidem impedit facilis? Distinctio laboriosam veritatis recusandae minus. Voluptatum accusantium hic laudantium soluta ea sapiente cupiditate officia maiores itaque.",
    image: "https://randomuser.me/api/portraits/men/94.jpg",
    name: "Ruben Alvarez",
    company: "Dooble.io",
  },
];

export const skills = [
  "JavaScript",
  "React",
  "Flask",
  "Java",
  "Python",
  "C/C++",
  "Pytorch",
  "Tensorflow",
  "SpringBoot",
  "Tomcat/Apache Servers",
  "Gradle",
  "AWS",
  "GCP",
  "Nginx"
];