import * as React from "react";
import { Command as CommandComponent } from "datasa-design-system";
import { useFetcher } from "@remix-run/react";

type CommandContextType = {
  isOpen: boolean;
  openCommand: () => void;
  closeCommand: () => void;
};

export const CommandContext = React.createContext<CommandContextType>(
  {} as CommandContextType
);

export const CommandProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openCommand = () => setIsOpen(true);
  const closeCommand = () => setIsOpen(false);
  const [query, setQuery] = React.useState("");
  const fetcher = useFetcher();

  React.useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data === undefined) {
      fetcher.load(`/datos`);
    }
  }, []);

  const filterQuery = () => {
    if (fetcher.data === undefined) return;
    const result = fetcher.data.posts.filter((post: any) =>
      post.information.toLowerCase().includes(query.toLowerCase())
    );
    console.log('result', result)
    return result;
  };

  return (
    <CommandContext.Provider value={{ isOpen, openCommand, closeCommand }}>
      {children}
      <CommandComponent
        initialState={isOpen}
        closeCommand={closeCommand}
        query={query}
        setQuery={setQuery}
        filterQuery={filterQuery}
        constants={{placeholder: 'Buscar datos', no_results: 'Tu busqueda no ha devuelto resultados.'}}
      />
    </CommandContext.Provider>
  );
};

export const useCommand = (): CommandContextType => {
  return React.useContext(CommandContext);
};
