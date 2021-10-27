import { Helmet } from "react-helmet";

const SEO = ({ title, titleTemplate, description }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>
        {title} - {titleTemplate}
      </title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

SEO.defaultProps = {
  title: "Motor",
  titleTemplate: "Motor Qlik Sense Mashup",
  description: "Motor Qlik Sense Mashup",
};

export default SEO;
