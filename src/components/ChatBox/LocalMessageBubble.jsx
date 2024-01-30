import { useLocalPeer } from '@huddle01/react/hooks';

function LocalMessageBubble({ message }) {
  const { metadata } = useLocalPeer();

  return (
    <div className='w-full items-end flex flex-col rounded-lg'>
      <span className='text-white bg-blue-500 p-1 rounded-lg text-sm'>
        {message.text}
      </span>
    </div>
  );
}

export default LocalMessageBubble;
