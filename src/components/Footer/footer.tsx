export const Footer = () => {
  return (
    <footer className="flex border-t justify-between font-medium p-6">
      <div className="flex items-center gap-2">
        <p className="text-sm">© {new Date().getFullYear()} ZipCart. All rights reserved.</p>
        <p className="text-sm">Made with ❤️ by ZipCart Team</p>
      </div>
    </footer>
  );
};
