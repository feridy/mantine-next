import { Welcome } from '../components/Welcome/Welcome';
import { LayoutHeader } from '../components/Layout/LayoutHeader';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <LayoutHeader />
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
