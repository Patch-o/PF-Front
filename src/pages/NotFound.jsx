import { FormattedMessage } from "react-intl";

const NotFound = () => {
  return (
    <div className="cards">
      <h1><FormattedMessage id="notfound.footer" defaultMessage="Error 404 NO ENCONTRADO" /></h1>
    </div>
  )
};

export default NotFound;