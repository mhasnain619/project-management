// import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";
import SelectedProjects from "./components/SelectedProjects";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddingTasks(text) {
    setProjectsState(prevState => {
      const taskId = Math.random()
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId
      }
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks]
      }
    })
  }
  function handleDeleteTask(Id) {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== Id)
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }
  function handleStartAddProject() {
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  function handleCancel() {
    setProjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }
  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const projectId = Math.random()
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  function handleDeleteProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }
  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = (
    <SelectedProjects
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddingTasks}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  )
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onSelectProject={handleSelectProject}
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
