import aws from '../../assets/img/aws.png'
import bs from '../../assets/img/bs.png'
import css from '../../assets/img/css.png'
import express from '../../assets/img/express.png'
import firebase from '../../assets/img/firebase.png'
import git from '../../assets/img/git.png'
import github from '../../assets/img/github.png'
import html from '../../assets/img/html.png'
import javascript from '../../assets/img/javascript.png'
import linux from '../../assets/img/linux.png'
import mongodb from '../../assets/img/mongodb.png'
import nodejs from '../../assets/img/node-js.png'
import npm from '../../assets/img/npm.png'
import react from '../../assets/img/react.png'
import redux from '../../assets/img/redux.png'
import tailwind from '../../assets/img/tailwind.png'
import typescript from '../../assets/img/typescript.png'
import vscode from '../../assets/img/vscode.png'
const MySkills = () => {
  const techList = [
    {
      name: 'HTML 5',
      text: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
      img: html
    },
    {
      name: 'CSS 3',
      text: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
      img: css
    },
    {
      name: 'JavaScript',
      text: 'JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard.',
      img: javascript
    },
    {
      name: 'TypeScript',
      text: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
      img: typescript
    },
    {
      name: 'React JS',
      text: 'React is a free and open-source front-end JavaScript library for building user interfaces based on components.',
      img: react
    },
    {
      name: 'Redux',
      text: 'Redux is an open-source JavaScript library for managing and centralizing application state.',
      img: redux
    },
    {
      name: 'MongoDB',
      text: 'MongoDB is a source-available cross-platform document-oriented database program.',
      img: mongodb
    },
    {
      name: 'NodeJS',
      text: 'Node.js is a back-end JavaScript runtime environment, runs on the V8 JavaScript Engine, and executes JavaScript code outside a web browser.',
      img: nodejs
    },
    {
      name: 'ExpressJS',
      text: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
      img: express
    },
    {
      name: 'Git',
      text: 'Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.',
      img: git
    },
    {
      name: 'GitHub',
      text: 'GitHub, Inc. is a platform and cloud-based service for software development and version control using Git, allowing developers to store and manage their code.',
      img: github
    },
    {
      name: 'NPM',
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
      img: npm
    },
    {
      name: 'Tailwind CSS',
      text: 'Tailwind CSS is an open source CSS framework. The main feature of this library is that, unlike other CSS frameworks like Bootstrap, it does not provide a series of predefined classes for elements such as buttons or tables',
      img: tailwind
    },
    {
      name: 'Bootstrap 5',
      text: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development.',
      img: bs
    },
    {
      name: 'Linux',
      text: 'A Linux server is a server running a variant of the Linux open source operating system (OS). It is designed to handle the most demanding business applications, such as web services and databases.',
      img: linux
    },
    {
      name: 'AWS',
      text: 'Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.',
      img: aws
    },
    {
      name: 'Firebase',
      text: 'Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses.',
      img: firebase
    },
    {
      name: 'VS Code',
      text: 'Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.',
      img: vscode
    }
  ]
  return (
    <div className="bg-base-300 bg-opacity-40 rounded-2xl mt-20 lg:mt-0 p-3 lg:p-5">
      <h3 className="text-3xl text-center border-b-2 pb-2">
        Tools And Technology
      </h3>
      <div className="my-10 grid lg:grid-cols-4 gap-5 cursor-pointer">
        {techList.map((item, index) => (
          <div className="ethCard" key={index}>
            <img src={item?.img} alt="" className="img h-32" />
            <h1 className="img mt-44 font-semibold">{item.name}</h1>
            <div className="textBox">
              <p className="text head">{item.name}</p>
              <span>{item.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MySkills
