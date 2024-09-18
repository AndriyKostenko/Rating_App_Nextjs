import { Htag } from "../components/Htag";
import { Button } from "../components/Button";
import { ParagraphTag } from "../components/ParagraphTag";
import { Tag } from "../components/Tag";
import { Rating } from "../components/Rating";
import UserLogo from '../public/user 1.svg';


export default function Home(): JSX.Element {

  return (
    <div>
      <Htag tag="h1">Hello, World!</Htag>
      <Button appearance="primary" arrow="right">Primary</Button>
      <Button appearance="ghost" arrow="right">Primary</Button>
      <UserLogo/>
      <ParagraphTag size="small">Small sdfsdf sd fsdf sdf sd</ParagraphTag>
      <ParagraphTag size="medium">Medium tag fdsfsdfsdfds</ParagraphTag>
      <ParagraphTag size="large">Large tag fdsfsdfsdfds</ParagraphTag>
      <Tag size="small" color="red">Small tag</Tag>
      <Tag size="medium" color="primary">Medium tag</Tag>
      <Tag size="small" color="ghost">Small tag</Tag>
      <Tag size="medium" color="grey">Medium tag</Tag>
      <Tag size="small" color="green">Small tag</Tag>
      <Rating rating={3} isEditable />
    </div>
  );
}
