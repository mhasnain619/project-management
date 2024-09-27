// import NewProject from "./components/NewProject";
import { useState } from "react";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import NewProject from "./components/NewProject";

function App() {
  const [prjectsState, setPrjectsState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setPrjectsState(prevState => {

      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  function handleAddProject(projectData) {
    setPrjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }
      return {
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }
  console.log(prjectsState);


  let content;
  if (prjectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (prjectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />

  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
