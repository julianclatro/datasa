import React, { type FunctionComponent } from 'react';
import { Notification as NotificationComponent } from 'datasa-design-system';

type NotificationContextType = {
  isOpen: boolean;
  openNotification: (content: ContentProps) => void;
  closeNotification: () => void;
};

type ContentProps = {
  title: string;
  status: number
};
export const NotificationContext = React.createContext<NotificationContextType>(
  {} as NotificationContextType
);

export const NotificationProvider: FunctionComponent = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [content, setContent] = React.useState({ title: '', status: 0 });

  const openNotification = ({ title, status }: ContentProps) => {
    setIsOpen(true);
    setContent({ title, status });
    setTimeout(closeNotification, 3000);
  };

  const closeNotification = () => {
    setIsOpen(false);
  };

  return (
    <NotificationContext.Provider
      value={{ isOpen, openNotification, closeNotification }}
    >
      {children}
      <NotificationComponent
        content={content}
        initialState={isOpen}
        closeNotification={closeNotification}
      />
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  return React.useContext(NotificationContext);
};
