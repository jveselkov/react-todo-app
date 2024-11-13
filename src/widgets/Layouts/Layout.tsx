import { Row, Col } from "antd";

interface ILayoutProps {
  children: JSX.Element;
}

export const Layout = ({ children }: ILayoutProps) => (
  <Row gutter={[16, 16]}>
    <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
      {children}
    </Col>
  </Row>
);
