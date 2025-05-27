import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import DashboardMainContent from "./components/DashboardMainContent";

const App = () => {
  return(
  <div className="flex flex-col md:flex-row h-screen overflow-x-hidden bg-gray-100">
      
      <aside className="w-full md:w-64 bg-white shadow-md">
        <Sidebar />
      </aside>
  
  <div className="flex flex-col flex-1 mid-w-0">
    <Header />
    <DashboardMainContent />
  </div>
</div>

  )
}

export default App;