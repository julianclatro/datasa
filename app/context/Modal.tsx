import React, { type ReactElement, type FunctionComponent } from "react";
import { Modal as ModalComponent } from "datasa-design-system";
import { EditPost, FormPost, About } from "~/compositions";
import { FormOrganization } from "~/compositions/FormOrganization";
import { Confirmation } from '~/compositions/Confirmation';

type ModalContextType = {
  isOpen: boolean;
  openModal: (action: {
    type: string;
    content?: any;
    padding?: "none" | "small" | "medium" | "large";
    size?: "small" | "medium" | "large" | "fit";
    showBar?: boolean;
    onClose?: () => void;
  }) => void;
  afterClose: () => void;
  closeModal: () => void;
};

enum ModalTypeE {
  // WELCOME = "welcome",
  NEW_POST = "new_post",
  EDIT_POST = "edit_post",
  NEW_ORGANIZATION = "new_organization",
  EDIT_ORGANIZATION = "edit_organization",
  CONFIRMATION = "confirmation",
}

const modalAssert = (action: { type: string; content?: any }) => {
  let modalContent;
  switch (action.type) {
    // case ModalTypeE.WELCOME: {
    //   return <About />;
    // }
    case ModalTypeE.NEW_POST: {
      const { organizations, axes, categories } = action.content as any;
      modalContent = (
        <FormPost
          organizations={organizations}
          axes={axes}
          categories={categories}
        />
      );
      break;
    }
    case ModalTypeE.EDIT_POST: {
      const { organizations, axes, categories, post } = action.content as any;
      modalContent = (
        <EditPost
          post={post}
          organizations={organizations}
          axes={axes}
          categories={categories}
        />
      );
      break;
    }
    case ModalTypeE.NEW_ORGANIZATION: {
      modalContent = <FormOrganization  />;
      break;
    }
    case ModalTypeE.EDIT_ORGANIZATION: {
      modalContent = <FormOrganization organization={action.content} />;
      break;
    }
    case ModalTypeE.CONFIRMATION: {
      modalContent = <Confirmation />
      break;
    }
    default:
      modalContent = <></>;
      break;
  }
  return modalContent;
};

export const ModalContext = React.createContext<ModalContextType>(
  {} as ModalContextType
);

export const ModalProvider: FunctionComponent<{ children: ReactElement }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [state, setState] = React.useState<{
    type: string;
    content?: any;
    onClose?: any;
    padding?: "none" | "small" | "medium" | "large";
    size?: "small" | "medium" | "large" | "fit";
    showBar?: any;
    overflow?: any;
  }>({
    type: "",
    content: {},
    onClose: () => {},
    padding: "large",
    size: "large",
    showBar: true,
    overflow: false,
  });

  const openModal = (action: {
    type: string;
    content?: any;
    padding?: "none" | "small" | "medium" | "large";
    size?: "small" | "medium" | "large" | "fit";
    showBar?: any;
    overflow?: any;
    onClose?: any;
  }) => {
    setIsOpen(true);
    setState({
      type: action.type,
      content: action.content,
      onClose: action.onClose,
      padding: action.padding,
      size: action.size,
      showBar: action.showBar,
      overflow: action.overflow,
    });
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const afterClose = () => {
    const { onClose } = state;
    onClose();
  };

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, afterClose }}
    >
      {children}
      <ModalComponent
        initialState={isOpen}
        closeModal={closeModal}
        padding={state.padding ? state.padding : "large"}
        size={state.size ? state.size : "large"}
        showBar={state.showBar}
        overflow={state.overflow}
      >
        {modalAssert(state)}
      </ModalComponent>
    </ModalContext.Provider>
  );
};

export const useModal = (): ModalContextType => {
  return React.useContext(ModalContext);
};
