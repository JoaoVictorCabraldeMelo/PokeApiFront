import Alert from "@material-ui/core/Alert/Alert";

interface ErrorProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Error: React.FC<ErrorProps> = ({ message, show, onClose }) => {
  return (
    <>
      {show ? (
        <Alert severity="error" onClose={onClose}>
          {message}
        </Alert>
      ) : null}
    </>
  );
};

export default Error;
