import { Htag, Button } from "./components";
import User from './public/user 1.svg';


export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1">Hello, World!</Htag>
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Primary</Button>
      <User/>
    </div>
  );
}
