'use client';

import { atom, useAtom } from 'jotai'; // jotai에서 제공하는 기능?

const textAtom = atom('hello');

// readonly atom get함수를 통해 textAtom의 value를 가져온다.
const uppercaseAtom = atom((get) => get(textAtom).toUpperCase());

function Input() {
  const [text, setText] = useAtom(textAtom); // useAtom(atom);
  const handleChange = (e) => setText(e.target.value);

  return <input value={text} onChange={handleChange} />;
}

function Uppercase() {
  // useAtom(atom);
  const [uppercase] = useAtom(uppercaseAtom);
  return <div>{uppercase}</div>;
}

export default function JotaiTest() {
  // components는 export default을 붙어서 내보낸다.
  return (
    <div>
      <Input />
      <Uppercase />
    </div>
  );
}
