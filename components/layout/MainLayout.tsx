import Header from "../header/Header";
import SideBar from "../sidebar/SideBar";

interface PropMainLayout {
  children: React.ReactNode;
}

const MainLayout = ({ children }: PropMainLayout) => {
  return (
    <div className="flex justify-center min-h-screen">
      <SideBar />
      <div className="flex-1">
        <Header />
        <div className=" bg-secondary">
          <div className="container">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
