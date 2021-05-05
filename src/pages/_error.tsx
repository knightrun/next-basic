import ErrorLayout from "@/components/layouts/error";

const Error = ({statusCode}) => {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'
      }
    </p>
  )
}

Error.getInitialProps = ({res, err}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {statusCode}
}

Error.Layout = ErrorLayout

export default Error