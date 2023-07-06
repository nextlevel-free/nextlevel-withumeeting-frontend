'use client';

import { atom, useAtom } from 'jotai';
import { textAtom } from '../store/atoms';

// readonly atom get함수를 통해 textAtom의 value를 가져온다.
const updateCaseAtom = atom((get) => get(textAtom).toUpperCase());

function Input() {
  const [text, setText] = useAtom(textAtom); // useAtom(atom);
  const handleChange = (e) => setText(e.target.value);

  return <input value={text} onChange={handleChange} />;
}

function UpperCase() {
  const [upperCase] = useAtom(updateCaseAtom);
  return <div>{upperCase}</div>;
}

export default function JotaiTest() {
  // components는 export default을 붙어서 내보낸다.
  return (
    <div>
      <Input />
      <UpperCase />
    </div>
  );
}
