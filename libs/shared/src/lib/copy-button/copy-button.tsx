import { Button } from 'flowbite-react';
import { useState } from 'react';

export function CopyButton({ text }: { text: string }) {
  const [clicked, setClicked] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setClicked(true);
  };
  return (
    <Button
      size="sm"
      color={clicked ? 'success' : 'info'}
      onClick={() => copyToClipboard(text)}
    >
      {clicked ? 'Copied!' : 'Copy'}
    </Button>
  );
}

export default CopyButton;
