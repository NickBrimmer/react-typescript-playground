import React from 'react';

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

export const TextField: React.FC<Props> = () => {
  return (
    <div>
      <input />
    </div>
  )
}