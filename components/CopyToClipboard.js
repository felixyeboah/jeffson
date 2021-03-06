import clsx from 'clsx';
import * as React from 'react';
import { BsCheck } from 'react-icons/bs';
import { MdContentCopy } from 'react-icons/md';

async function copyToClipboard(value) {
  try {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(value);
      return true;
    }

    const element = document.createElement('textarea');
    element.value = value;
    document.body.append(element);
    element.select();
    document.execCommand('copy');
    element.remove();

    return true;
  } catch {
    return false;
  }
}

const State = {
  Idle: 'idle',
  Copy: 'copy',
  Copied: 'copied',
};

export function ClipboardCopyButton({
  value,
  className,
  variant = 'responsive',
}) {
  const [state, setState] = React.useState(State.Idle);

  React.useEffect(() => {
    async function transition() {
      switch (state) {
        case State.Copy: {
          const res = await copyToClipboard(value);
          console.log('copied', res);
          setState(State.Copied);
          break;
        }
        case State.Copied: {
          setTimeout(() => {
            setState(State.Idle);
          }, 2000);
          break;
        }
        default:
          break;
      }
    }
    void transition();
  }, [state, value]);

  return (
    <button
      onClick={() => setState(State.Copy)}
      className={clsx(
        'p-3 text-black whitespace-nowrap text-lg font-medium bg-white rounded-lg focus:outline-none shadow hover:shadow-md group-hover:opacity-100 peer-hover:opacity-100 hover:opacity-100 peer-focus:opacity-100 focus:opacity-100 transition focus:ring-4 hover:ring-4 ring-team-current lg:opacity-0',
        { 'lg:px-8 lg:py-4': variant === 'responsive' },
        className
      )}
    >
      <span
        className={clsx('hidden', { 'lg:inline': variant === 'responsive' })}
      >
        {state === State.Copied ? 'Copied to clipboard' : 'Click to copy url'}
      </span>
      <span
        className={clsx('inline', { 'lg:hidden': variant === 'responsive' })}
      >
        {state === State.Copied ? <BsCheck /> : <MdContentCopy />}
      </span>
    </button>
  );
}
