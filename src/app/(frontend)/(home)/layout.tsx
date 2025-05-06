import { Navbar } from '@/components/Navbar/navbar';
import { Footer } from '@/components/Footer/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 bg-gray-50">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
