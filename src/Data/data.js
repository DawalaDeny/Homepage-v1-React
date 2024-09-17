const projects = [
  {
    id: 1,
    image: '/images/projects/projectMemory1.png',
    name: 'Memory game v1',
    date: '2022',
    techs: 'HTML, CSS, JS',
    description:
      'In the Web Development course, we were introduced to JavaScript. While HTML is responsible for the structure of elements on the screen and CSS for the layout, JavaScript is used to make a website dynamic/interactive. We were assigned to create a memory game and encouraged to use as much JavaScript as possible, such as creating elements.',
    type: 'website',
    linkWebsite: 'https://avatar1.dawaladeny.eu',
    linkGithub:
      'https://github.com/DawalaDeny/webpages/tree/main/projects/AvatarMemoryGame1',
  },
  {
    id: 2,
    image: '/images/projects/projectLocalStorage.png',
    name: 'Startpage',
    date: '2022',
    techs: 'HTML, CSS, JS',
    description:
      'In the Web Development course, we were introduced to the concept of local storage and how it is used to save data in the browser so that when you return to the page, the data is still available. I created a website where you can navigate Twitter, YouTube, Google, and Instagram via commands, and the results are displayed below. These results are saved, and when you return to the website, they remain there until the local storage is cleared.',
    type: 'website',
    linkWebsite: 'https://startpage.dawaladeny.eu',
    linkGithub:
      'https://github.com/DawalaDeny/webpages/tree/main/projects/My%20Internet%20Start%20Page',
  },
  {
    id: 3,
    image: '/images/projects/projectMinecraft.png',
    name: 'Minecraft server',
    date: '2022',
    techs: 'Docker, HTML, CSS',
    description:
      'I was introduced to the concept of Docker and quickly realized how easy it was to spin up containers. I set up an Oracle free tier instance and launched a Minecraft Docker container. I mapped the correct ports, set up a volume for backing up the world, and added ingress rules to make the server publicly available. I also found a website-template for the server online and hosted it on the same instance.',
    type: 'misc',
    linkWebsite: 'https://minecraft.dawaladeny.eu',
  },
  {
    id: 4,
    image: '/images/projects/projectMemory2.png',
    name: 'Memory game v2',
    date: '07-2023',
    techs: 'NodeJS, HTML, CSS, JS, Mongo',
    description:
      'After creating my first memory game, I wanted to add a high score feature. At the time, I was new to web development, and the concepts of front-end and back-end were unfamiliar to me. Now, with a better understanding, I built an API for the backend with two methods: a GET method to retrieve all scores and a POST method to add new ones. This API allows scores to be fetched and updated in the database.',
    type: 'website',
    linkWebsite: 'avatar2.dawaladeny.eu',
    linkGithub:
      'https://github.com/DawalaDeny/webpages/tree/main/projects/AvatarMemoryGame2',
  },

  {
    id: 5,
    image: '/images/projects/projectChatApp.png',
    name: 'ChatApp',
    date: '08-2024',
    techs: 'NodeJS, HTML, CSS, JS',
    description:
      "I read about WebSockets and how they enable real-time communication, which got me interested in exploring the topic. To dive deeper, I created a real-time chat app using WebSockets. For the terminal design, I followed a guide called 'Retro CRT terminal screen in CSS + JS' by Edwin on dev.to, adapting the code to suit my preferences. Building this app helped me grasp the basics of WebSockets and real-time interactions.",
    type: 'website',
    linkWebsite: 'https://chat.dawaladeny.eu',
    linkGithub: 'https://github.com/DawalaDeny/ChatAPP',
  },
  {
    id: 6,
    image: '/images/projects/projectMain1.png',
    name: 'Homepage v1',
    date: '09-2024',
    techs: 'React',
    description:
      "I'm following a course on React and believe I have a solid grasp of the fundamentals (such as components, props, prop drilling, useState, useEffect, syntax, etc.). I've decided to update my plain homepage with a new one using React. This project serves as a test of my React fundamentals skills.",
    type: 'website',
    linkWebsite: 'https://dawaladeny.eu',
    linkGithub: '',
  },
]
export default projects
