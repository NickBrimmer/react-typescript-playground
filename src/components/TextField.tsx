import React, { useState } from 'react';

interface Person {
  firstName: string
  lastName: string
}
interface Props {
  text: string;
  boo: boolean;
  index: number;
  function?: (bob: string) => void;
  person?: Person;
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ boo, index, text, children, person }) => {
  const [count, setCount] = useState<number | null>(5)
  const [obj, setObj] = useState<{ text: string } | TextNode>({ text: "" })

  setObj({ text: "hello" })
  setCount(null)

  return (
    <div>
      <input />
    </div>
  )
}