"use client";
import { Htag, Button, ParagraphTag, Tag, Rating } from "./components";
import UserLogo from './public/user 1.svg';
import { useState } from "react";

export default function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(4);

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
      <Rating rating={rating} isEditable setRating={setRating}/>
    </div>
  );
}
