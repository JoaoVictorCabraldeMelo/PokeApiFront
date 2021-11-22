import Alert from "@material-ui/core/Alert/Alert";

interface SuccessProps {
  message: string;
  show: boolean;
  onClose: () => void;
}

const Success: React.FC<SuccessProps> = ({ message, show, onClose }) => {
  return (
    <>
      {show ? (
        <Alert severity="success" onClose={onClose}>
          {message}
        </Alert>
      ) : null}
    </>
  );
};

export default Success;
