import React, { useRef, useState } from 'react';

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
  handleChange: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ boo, index, text, children, person, handleChange }) => {
  const [count, setCount] = useState<number | null>(5)
  const [obj, setObj] = useState<{ text: string } | TextNode>({ text: "" })
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLDivElement>(null)

  setObj({ text: "hello" })
  setCount(null)

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}