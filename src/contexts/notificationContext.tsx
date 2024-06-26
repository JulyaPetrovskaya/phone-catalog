import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type Props = {
  children: React.ReactNode;
};

export enum NotificationStatus {
  Success = '#27ae60',
  Warning = '#F3D060',
  Error = '#BA0C2E',
  None = 'transparent',
}

export type NotificationType = {
  message: string;
  color: NotificationStatus;
};

type NotificationContextType = {
  notification: NotificationType;
  setNotification: Dispatch<SetStateAction<NotificationType>>;
};

export const NotificationContext = createContext<NotificationContextType>({
  notification: { message: '', color: NotificationStatus.None },
  setNotification: () => {},
});

export const NotificationProvider: React.FC<Props> = ({ children }) => {
  const [notification, setNotification] = useState<NotificationType>({
    message: '',
    color: NotificationStatus.None,
  });

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
