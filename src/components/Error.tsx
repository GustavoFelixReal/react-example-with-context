interface IError {
  message: string;
}

function Error({ message }: IError) {
  return (
    <span>{message}</span>
  )
}

export default Error;
