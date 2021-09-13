import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { useMessages } from '@store/message.store';
import CardMessage from '@components/CardMessage';
import ChatForm from '@components/ChatForm';

const Namespace: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { messages, addMessage } = useMessages(id as string);

  return (
    <section className='vh-100 d-flex flex-column justify-content-between'>
      <h1 className='text-center m-0 py-3 display-1 fw-normal tx-wlight'>
        NameSpace {id}
      </h1>
      <div className='d-flex h-100 flex-column justify-content-end mx-3'>
        <section className='vh-72 overflow-auto'>
          <h2 className='ps-1 fs-1 tx-wlight'>Welcome to UL Chat</h2>
          <p className='ps-1 pt-3 m-0 fs-6 tx-wlight'>
            The global chat starts here
          </p>
          <hr className='bg-light-chat mt-1 mb-3' />
          {messages.map((el, idx) => (
            <CardMessage key={idx} text={el.message} />
          ))}
        </section>
      </div>
      <ChatForm addMessage={addMessage} />
    </section>
  );
};

export default Namespace;
