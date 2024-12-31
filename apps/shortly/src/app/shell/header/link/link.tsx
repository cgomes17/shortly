export function ShellHeaderLinkText({ label }: { label: string }) {
  return (
    <div className="text-sm font-bold text-neutral hover:text-neutral-dark">
      {label}
    </div>
  );
}

export default ShellHeaderLinkText;
