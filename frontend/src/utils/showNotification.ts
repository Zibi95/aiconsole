import { notifications } from '@mantine/notifications';
import { cn } from '@/utils/styles';

type Notification = {
  title: string;
  message: string;
  variant?: NotificationVariant;
};

type NotificationVariant = 'success' | 'error' | 'info';

const getStyles = (variant: NotificationVariant) => {
  let bodyClassNames = 'pl-5 border-l-[3px]';
  const rootClassNames = 'w-[400px] ml-auto !bg-gray-600 !rounded-lg !py-5 !px-4 gap-5 !shadow-dark before:!hidden';
  const titleClassNames = '!text-white !font-semibold !text-base';
  const descriptionClassNames = '!text-gray-300 !font-normal !text-[15px]';
  const closeButtonClassNames = '!text-gray-300 hover:!text-white hover:!bg-transparent self-start';

  switch (variant) {
    case 'success':
      bodyClassNames = cn(bodyClassNames, 'border-green-400')
      break;
    case 'error':
      bodyClassNames = cn(bodyClassNames, 'border-red-400')
      break;
    case 'info':
      bodyClassNames = cn(bodyClassNames, 'border-gray-400')
      break;
  }

  return {
    root: rootClassNames,
    body: bodyClassNames,
    title: titleClassNames,
    description: descriptionClassNames,
    closeButton: closeButtonClassNames,
  };
};

const showNotification = ({ title, message, variant = 'info' }: Notification) => {
  notifications.show({
    title,
    message,
    classNames: {...getStyles(variant)}
  });
};

export default showNotification;