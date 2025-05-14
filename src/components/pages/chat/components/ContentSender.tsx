import bot_icon from '@public/asset/bot_icon.svg'
import user_icon from '@public/asset/user_icon.svg'

interface IContentSenderProps {
  item: {
    text: string;
    sender: 'bot' | 'user';
  };
}

export const ContentSender = ({ item }: IContentSenderProps) => {
  const botSender = item.sender === 'bot';

  return (
    <div className={`flex w-full p-2 ${botSender ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex items-start gap-3 max-w-[75%]`}>
        {botSender && (
          <div className="flex-shrink-0">
            <img src={bot_icon} alt="bot" className="w-8 h-8" />
          </div>
        )}

        <p className="bg-white text-[#151515] text-sm p-4 rounded-lg shadow-sm break-words whitespace-pre-wrap">
          {item.text}
        </p>

        {!botSender && (
          <div className="flex-shrink-0">
            <img src={user_icon} alt="usuário" className="w-8 h-8" />
          </div>
        )}
      </div>
    </div>
  );
};