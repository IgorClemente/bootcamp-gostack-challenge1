import express from 'express';

import * as Yup from 'yup';

const server = express();
const projects = [];
let requestsCount = 0;

server.use((req, res, next) => {
  requestsCount += 1;
  console.log(`Request Count: ${requestsCount}`);
  next();
});

server.use(express.json());

function checkExistsProject(req, res, next) {
  const { id } = req.params;

  if (!id) {
    return res.status(401).json({ error: 'Project id not provide' });
  }

  if (projects.length === 0) {
    return res.status(401).json({ error: 'No found projects' });
  }

  if (!projects.find(project => project.id === id)) {
    return res.status(401).json({ error: 'Project not found' });
  }
  return next();
}

server.get('/projects', (req, res) => {
  res.json(projects);
});

server.post('/projects', async (req, res) => {
  const schema = Yup.object().shape({
    id: Yup.string().required(),
    title: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(401).json({ error: 'Validate fail' });
  }

  const { id, title } = req.body;

  const checkIdExists = projects.find(project => project.id === id);

  if (checkIdExists) {
    return res.status(401).json({ error: 'User already exists' });
  }

  const newProject = {
    id,
    title,
    tasks: [],
  };

  projects.push(newProject);

  return res.json(newProject);
});

server.put('/projects/:id', checkExistsProject, async (req, res) => {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
  });

  const { id } = req.params;

  if (!(await schema.isValid(req.body))) {
    return res.status(401).json({ error: 'Validate fail' });
  }

  const { title } = req.body;

  const indexForExist = projects.findIndex(project => project.id === id);

  const projectExist = projects[indexForExist];

  projectExist.title = title;

  projects[indexForExist] = projectExist;

  return res.json(projects);
});

server.delete('/projects/:id', checkExistsProject, (req, res) => {
  const { id } = req.params;

  const indexForExist = projects.findIndex(project => project.id === id);

  projects.splice(indexForExist, 1);

  res.json({ msg: 'Projeto excluído' });
});

server.post('/projects/:id/tasks', checkExistsProject, async (req, res) => {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
  });

  if (!(await schema.isValid(req.body))) {
    return res.status(401).json({ error: 'Validate fail' });
  }

  const { title } = req.body;
  const { id } = req.params;

  const indexForExist = projects.findIndex(project => project.id === id);

  const projectExist = projects[indexForExist];

  projectExist.tasks = [...projectExist.tasks, title];

  projects[indexForExist] = projectExist;

  return res.json(projectExist);
});

export default server;
