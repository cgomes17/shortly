import ShellFooter from './footer/footer';
import ShellHeader from './header/header';

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ShellHeader />
      {children}
      <ShellFooter />
    </>
  );
}

export default Shell;
