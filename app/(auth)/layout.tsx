const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-500">
        <div className="w-full flex items-center justify-center mx-auto">
          {children}
        </div>
      </div>
    );
  };
  
  export default Layout;
  